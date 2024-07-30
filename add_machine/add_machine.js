const { Web3 } = require('web3');
const { contractAbi } = require('./contract_abi.js');
const yargs = require('yargs');
const { exec } = require('child_process');
const Timer = require('timers/promises')
require('dotenv').config();


const providerUrl = process.env.PROVIDER_URL;
const web3 = new Web3(providerUrl);


const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractAbi, contractAddress);


const argv = yargs
    .option('wallet_address', {
        alias: 'w',
        description: 'The provider address',
        type: 'string',
    })
    .option('private_key', {
        alias: 'p',
        description: 'The private key',
        type: 'string',
    })
    .demandOption(['wallet_address', 'private_key'], 'Please provide the provider wallet address and private key')
    .help()
    .alias('help', 'h')
    .argv;


const fromAddress = argv.wallet_address;
const privateKey = argv.private_key;


const AddMachine = async () => {

    try {
        console.log(`Running get-gpu-details script...`);
        let machineInfoJsonString = await executeCommand("bash ./get-gpu-details.sh")
        let machineInfo = JSON.parse(machineInfoJsonString);
        
        const numberOfGpus = await getNumberOfGpus();
        for(let gpuID=1; gpuID<numberOfGpus; gpuID++) {
            const gpuName = await getGpuName(gpuID);
            if(machineInfo.gpuName.includes(gpuName)){
                machineInfo.gpuId = gpuID;
                break;
            }
        }

        const machineDetailsArray = [
            1, // MachineInfoId overwritten in contract
            machineInfo.gpuId,
            parseInt(machineInfo.gpuQuantity, 10),
            parseInt(machineInfo.gpuMemory, 10),
            machineInfo.connectionType,
            machineInfo.cpuName,
            parseInt(machineInfo.cpuCoreCount, 10),
            parseInt(Number(machineInfo.uploadBandWidth), 10),
            parseInt(Number(machineInfo.downloadBandWidth), 10),
            machineInfo.storageType,
            parseInt(machineInfo.storageAvailable, 10),
            machineInfo.portsOpen.split(",").map(Number),
            machineInfo.region,
            machineInfo.ipAddress
        ];

        console.log(machineDetailsArray);
        const functionName = 'addMachine';
        const functionParams = [machineDetailsArray];

        const functionData = contract.methods[functionName](...functionParams).encodeABI();
        const currentGasPrice = await web3.eth.getGasPrice();
        const gasEstimation = await web3.eth.estimateGas({
            from: fromAddress,
            to: contractAddress,
            data: functionData,
        });

        const transactionObject = {
            from: fromAddress,
            to: contractAddress,
            gas: gasEstimation,
            gasPrice: currentGasPrice,
            data: functionData,
        };

        const signedTx = await web3.eth.accounts.signTransaction(transactionObject, privateKey);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log("Machine Added successfully")
        return receipt
    }

    catch (error) {
        console.log(`Error in AddMachine`)
        console.log(error)
        throw error;
    }

};

async function getNumberOfGpus() {
    try {
        const numberOfGpus = await contract.methods.gpuID().call();
        return numberOfGpus;
    }

    catch (error) {
        console.log(`Error fetching numberOfGpus - gpuID`)
        console.log(error.message);
    }
}


async function getGpuName(gpuID) {
    try {
        const { name } = await contract.methods.gpus(gpuID).call();
        return name;
    }

    catch (error) {
        console.log(`Error fetching gpu name of gpuID: ${gpuID}`)
        console.log(error.message);
    }
}


async function getMachineStatus(machineId) {

    const MachineStatusEnum = { "0": "New", "1": "Available", "2": "Verifying", "3": "Processing", "4": "Offline", "5": "Disabled" };

    try {
        const { status } = await contract.methods.machines(machineId).call();
        const serializedMachineStatus = status.toString();
        console.log('MachineStatus:', MachineStatusEnum[serializedMachineStatus]);
        return MachineStatusEnum[serializedMachineStatus];
    }

    catch (error) {
        console.log(`Error fetching status of machine: ${machineId}`)
        console.log(error.message);
    }

}


async function getQueenInfo(machineId) {

    try {
        const { currentQueen } = await contract.methods.machines(machineId).call();
        const queenInfo = await contract.methods.queens(currentQueen).call();
        return queenInfo;
    }

    catch (error) {
        console.log(`Error fetching queenInfo of machine: ${machineId}`)
        console.log(error.message);
    }

}


// Function to execute a command
function executeCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                reject(error);
                return;
            }
            // console.log(`stdout: ${stdout}`);
            // console.error(`stderr: ${stderr}`);
            resolve(stdout);
        });
    });
}


async function setupSSH(public_key, user_name, user_type) {

    try {
        console.log(`Setting up SSH for ${user_type} : ${user_name} ...`)
        await executeCommand(`sudo bash setupSSH.sh ${user_type} ${user_name} "${public_key}"`);
        console.log(`SSH setup complete for ${user_type} : ${user_name} ...`);
    } catch (error) {
        console.log(`An error occurred while setting up SSH chroot environment for ${user_type} : ${user_name}`);
        console.log(error.message)
    }

}


async function deleteSSHSetup(user_type, user_name, queenPublicKey) {

    try {
        console.log(`Deleting SSH Setup for ${user_type} : ${user_name} ...`)
        await executeCommand(`sudo bash deleteSSHSetup.sh ${user_type} ${user_name} ${queenPublicKey}`);
        console.log(`Deleted SSH setup for ${user_type} : ${user_name} ...`);
    } catch (error) {
        console.log(`An error occurred while deleting SSH chroot environment for ${user_type} : ${user_name}`);
        console.log(error.message)
    }

}


async function getAddedMachineId() {
    try {
        const machineIDs = await contract.methods.getProviderMachines(fromAddress).call();
        return machineIDs[machineIDs.length-1];
    }
     catch (error) {
        console.log(`Error fetching machineIDs for provider: ${fromAddress}`)
        console.log(error.message)
     }
}


const AddMachineWaitUntilAvailable = async () => {

    try {
        await AddMachine();

        const machineId = await getAddedMachineId();
        console.log(`Machine ID : ${machineId}`);
        
        let machineStatus = await getMachineStatus(machineId);
        console.log("Initialising setup for drill test...");
        const { publicKey: queenPublicKey, userName: queenUserName } = await getQueenInfo(machineId);
        console.log("public key of the queen :", queenPublicKey);
        console.log("queen name :", queenUserName);
        await setupSSH(queenPublicKey, queenUserName, "queens");

        while (machineStatus === "New") {
            await Timer.setTimeout(3000);
            machineStatus = await getMachineStatus(machineId);
        }

        await deleteSSHSetup("queens", queenUserName, queenPublicKey);
    }

    catch (error) {
        console.log("Error Adding Machine and WaitUntilAvailable")
    }

}


AddMachineWaitUntilAvailable();


