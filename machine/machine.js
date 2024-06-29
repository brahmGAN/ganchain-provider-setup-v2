const misc = require('./controller.js');
const yargs = require('yargs');
const Timer = require('timers/promises')

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
    .option('machine_id', {
        alias: 'm',
        description: 'The machine id',
        type: 'string',
    })
    .demandOption(['wallet_address', 'private_key', 'machine_id'], 'Please provide the wallet address, private key of provider and machine id')
    .help()
    .alias('help', 'h')
    .argv;

const fromAddress = argv.wallet_address;
misc.providerAddress = fromAddress;
misc.privateKey = argv.private_key;
misc.machineId = argv.machine_id;


const runner = async () => {

    let status = await misc.getMachineStatus(misc.machineId);
    while (true) {
        while (status === 'Available') {
            await Timer.setTimeout(3000)
            status = await misc.getMachineStatus(misc.machineId);
        }

        if (status == 'Verifying') {
            await precondition();
        } else if (status == 'Processing') {
            const { userName: consumerUserName } = await misc.getConsumerInfoOfMachine(misc.machineId);
            const { sshPublicKey: consumerPublicKey } = await misc.getCurrentJobInfoOfMachine(misc.machineId);
            console.log(`consumerPublicKey : ${consumerPublicKey}`);
            console.log(`consumerUserName : ${consumerUserName}`);

            await postProcessingSetup(consumerUserName, consumerPublicKey);
        }

        while (status !== 'Available') {
            await Timer.setTimeout(3000)
            status = await misc.getMachineStatus(misc.machineId);
        }

    }
}


const precondition = async () => {
    let status = await misc.getMachineStatus(misc.machineId);

    const { publicKey: queenPublicKey, userName: queenUserName } = await misc.getQueenInfo(misc.machineId);
    console.log(`queenPublicKey : ${queenPublicKey}`);
    console.log(`queenUserName : ${queenUserName}`);

    const { userName: consumerUserName } = await misc.getConsumerInfoOfMachine(misc.machineId);
    const { sshPublicKey: consumerPublicKey } = await misc.getCurrentJobInfoOfMachine(misc.machineId);
    console.log(`consumerPublicKey : ${consumerPublicKey}`);
    console.log(`consumerUserName : ${consumerUserName}`);

    await misc.setupSSH(queenPublicKey, queenUserName, "queens")


    while (status === 'Verifying') {
        await Timer.setTimeout(3000)
        status = await misc.getMachineStatus(misc.machineId);
    }

    if (status === 'Processing') {
        await Timer.setTimeout(3000)
        await misc.deleteSSHSetup("queens", queenUserName, queenPublicKey);
        await postProcessingSetup(consumerUserName, consumerPublicKey);
    }

    if (status === 'Available') {
        await misc.deleteSSHSetup("queens", queenUserName, queenPublicKey);
    }

}


async function postProcessingSetup(consumerUser, consumerPublicKey) {
    await misc.setupSSH(consumerPublicKey, consumerUser, "consumers")
    let status = await misc.getMachineStatus(misc.machineId);

    while (status === 'Processing') {
        await checkQueen();
        await Timer.setTimeout(3000)
        status = await misc.getMachineStatus(misc.machineId);
    }

    if (status === 'Available') {
        await misc.deleteSSHSetup("consumers", consumerUser, "queenPublicKey");
    }
}


const checkQueen = async () => {
    const queenLastCheck = await misc.getQueenLastCheck(misc.machineId);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (BigInt(currentTimestamp) - BigInt(queenLastCheck) > BigInt(7200)) {
        await misc.ReassignQueen(misc.machineId);
        const { publicKey: queenPublicKey, userName: queenUserName } = await misc.getQueenInfo(misc.machineId);
        console.log(`new queenPublicKey : ${queenPublicKey}`);
        console.log(`new queenUserName : ${queenUserName}`);
    }
}


console.log(`running script for provider ${fromAddress} machine: ${misc.machineId}`)
misc.startServer();
runner();
