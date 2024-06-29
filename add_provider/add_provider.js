const { Web3 } = require('web3');
const { contractAbi } = require('./contract_abi.js');
const yargs = require('yargs');
require('dotenv').config();


const providerUrl = process.env.PROVIDER_URL;
const web3 = new Web3(providerUrl);


const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractAbi, contractAddress);


const argv = yargs
    .option('nft_address', {
        alias: 'n',
        description: 'The provider NFT address',
        type: 'string',
    })
    .option('private_key', {
        alias: 'k',
        description: 'The private key',
        type: 'string',
    })
    .option('provider_address', {
        alias: 'p',
        description: 'The provider address',
        type: 'string',
    })
    .demandOption(['nft_address', 'private_key', 'provider_address'], 'Please provide the NFT address, private key and provider address')
    .help()
    .alias('help', 'h')
    .argv;


const fromAddress = argv.nft_address;
const privateKey = argv.private_key;
const providerAddress = argv.provider_address;


const AddProvider = async () => {

    try {
        const functionName = 'addProvider';
        const functionParams = [providerAddress];

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
        console.log("Provider Added successfully")
    }

    catch (error) {
        console.log(error)
    }

};

AddProvider();


