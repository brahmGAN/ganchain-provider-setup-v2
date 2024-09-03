const { Web3 } = require('web3');
const axios = require('axios')
const { exec } = require('child_process');
require("dotenv").config({ path: "./default.env" });

const { contractAbi } = require('./contract_abi.js');


const providerUrl = process.env.PROVIDER_URL;
const web3 = new Web3(providerUrl)


const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractAbi, contractAddress);


let fromAddress;


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


async function getCurrentJobInfoOfMachine(machineId) {

    try {
        const { currentJobID } = await contract.methods.machines(machineId).call();
        const jobInfo = await contract.methods.jobs(currentJobID).call();
        return jobInfo;
    }

    catch (error) {
        console.log(`Error fetching current jobInfo of machine: ${machineId}`)
        console.log(error.message);
    }

}


async function getConsumerInfoOfMachine(machineId) {

    try {
        const { currentJobID } = await contract.methods.machines(machineId).call();
        const { consumerAddress } = await contract.methods.jobs(currentJobID).call();
        const consumerInfo = await contract.methods.consumers(consumerAddress).call();
        return consumerInfo;
    }

    catch (error) {
        console.log(`Error fetching current consumerInfo of machine: ${machineId}`)
        console.log(error.message);
    }

}


async function getQueenLastCheck(machineId) {

    try {
        const { currentJobID } = await contract.methods.machines(machineId).call();
        const { lastChecked } = await contract.methods.jobs(currentJobID).call();
        return lastChecked;
    }

    catch (error) {
        console.log(`Error fetching lastChecked of machine: ${machineId}`)
        console.log(error.message);
    }

}


async function ReassignQueen(machineId) {

    try {
        const functionName = 'reassignQueen';
        const functionParams = [machineId];

        const functionData = contract.methods[functionName](...functionParams).encodeABI();
        const gasEstimation = await web3.eth.estimateGas({
            from: fromAddress,
            to: contractAddress,
            data: functionData
        });
        const currentGasPrice = await web3.eth.getGasPrice();

        const transactionObject = {
            from: fromAddress,
            to: contractAddress,
            gas: gasEstimation,
            gasPrice: currentGasPrice,
            data: functionData,
        };

        const signedTx = await web3.eth.accounts.signTransaction(transactionObject, this.privateKey);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log(`Requested for Queen Reassign successfully for machine: ${machineId}`);
        return receipt;
    }

    catch (error) {
        console.log(`Error while requesting for Queen Reassign of machine: ${machineId}`);
        console.log(error.message)
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
        console.log(`Setting up SSH for ${user_type} : ${user_name} ...`);
        await executeCommand(`sudo bash setupSSH.sh ${user_type} ${user_name} "${public_key}"`);
        console.log(`SSH setup complete for ${user_type} : ${user_name} ...`);
    } catch (error) {
        console.log(`An error occurred while setting up SSH chroot environment for ${user_type} : ${user_name}`);
        console.log(error.message)
    }

}


async function deleteSSHSetup(user_type, user_name, queenPublicKey) {

    try {
        console.log(`Deleting SSH Setup for ${user_type} : ${user_name} ...`);
        await executeCommand(`sudo bash deleteSSHSetup.sh ${user_type} ${user_name} ${queenPublicKey}`);
        console.log(`Deleted SSH setup for ${user_type} : ${user_name} ...`);
    } catch (error) {
        console.log(`An error occurred while deleting SSH chroot environment for ${user_type} : ${user_name}`);
        console.log(error.message)
    }

}


async function startServer() {
    try {
        fromAddress = this.providerAddress;
        executeCommand('node machine_ping_server.js');

        console.log('Started Machine Availability Check server on machine');
    } catch (error) {
        console.error(`An error occurred while starting Machine Availability Check server on machine`);
        console.log(error.message)
    }
}


module.exports = { getMachineStatus, getQueenInfo, setupSSH, deleteSSHSetup, startServer, getConsumerInfoOfMachine, getQueenLastCheck, ReassignQueen, getCurrentJobInfoOfMachine }
