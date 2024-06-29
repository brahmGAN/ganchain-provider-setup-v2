const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gpuID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "gpuType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "priceInWei",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "computeUnit",
				"type": "uint256"
			}
		],
		"name": "AddedGpuType",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "consumerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AmountRefunded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AmountWithdrawal",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "consumerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "organisation",
				"type": "string"
			}
		],
		"name": "ConsumerAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "machineID",
						"type": "uint256"
					},
					{
						"internalType": "uint16[]",
						"name": "availabilityData",
						"type": "uint16[]"
					}
				],
				"indexed": false,
				"internalType": "struct IGPU.HealthCheckData[]",
				"name": "healthCheckDataArray",
				"type": "tuple[]"
			}
		],
		"name": "HealthCheckDataBundle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "tickSeconds",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gpuID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "userID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineInfoID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "jobID",
				"type": "uint256"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minDrillTestRange",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minMachineAvailability",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "maxMachineUnavailability",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gracePeriod",
				"type": "uint256"
			}
		],
		"name": "InitializedDrillTestValues",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "consumerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "currentQueenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "jobID",
				"type": "uint256"
			}
		],
		"name": "JobCompleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "consumerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "queenValidationAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "jobId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gpuHoursInSeconds",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "JobCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "consumerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "queenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "jobId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum IGPU.JobStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "JobUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "MachineAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "MachineDisabled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "MachineDrillRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "newHealthScore",
				"type": "uint256"
			}
		],
		"name": "MachineHealthScoreUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "lastDrillResult",
				"type": "uint16"
			}
		],
		"name": "MachineStatusUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "providerNFTAddress",
				"type": "address"
			}
		],
		"name": "ProviderAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "publicKey",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "userName",
				"type": "string"
			}
		],
		"name": "QueenAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "consumerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "queenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "jobId",
				"type": "uint256"
			}
		],
		"name": "QueenReassign",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "queenValidationAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "RandomDrillTestTriggered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "machineID",
						"type": "uint256"
					},
					{
						"internalType": "uint16[]",
						"name": "availabilityData",
						"type": "uint16[]"
					}
				],
				"indexed": false,
				"internalType": "struct IGPU.HealthCheckData[]",
				"name": "healthCheckDataArray",
				"type": "tuple[]"
			}
		],
		"name": "RandomHealthCheckDataBundle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "queenValidationAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "RandomHealthCheckTriggered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newGpuID",
				"type": "uint256"
			}
		],
		"name": "UpdatedGpuId",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gpuID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "updatedPriceInWei",
				"type": "uint256"
			}
		],
		"name": "UpdatedGpuPrice",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minDrillTestRange",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minMachineAvailability",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "maxMachineUnavailability",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gracePeriod",
				"type": "uint256"
			}
		],
		"name": "UpdatedInitializedDrillTestValues",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "tickSeconds",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gpuID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "userID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineInfoID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "jobID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "helper",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "scheduler",
				"type": "address"
			}
		],
		"name": "UpdatedInitializedValues",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newJobId",
				"type": "uint256"
			}
		],
		"name": "UpdatedJobId",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newGracePeriod",
				"type": "uint256"
			}
		],
		"name": "UpdatedLatencyPeriod",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newMachineId",
				"type": "uint256"
			}
		],
		"name": "UpdatedMachineId",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "machineInfoId",
				"type": "uint256"
			}
		],
		"name": "UpdatedMachineInfoId",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newMaxUnavailability",
				"type": "uint256"
			}
		],
		"name": "UpdatedMaxMachineUnavailability",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newMinDrillTestRange",
				"type": "uint256"
			}
		],
		"name": "UpdatedMinDrillTestValue",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newMinAvailability",
				"type": "uint256"
			}
		],
		"name": "UpdatedMinMachineAvailability",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newNftAddress",
				"type": "address"
			}
		],
		"name": "UpdatedNftAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newTickSeconds",
				"type": "uint256"
			}
		],
		"name": "UpdatedTickSeconds",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newUserId",
				"type": "uint256"
			}
		],
		"name": "UpdatedUserId",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "validatorNftAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ss58Address",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usedNftCount",
				"type": "uint256"
			}
		],
		"name": "ValidatorAdded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "consumerAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organisation",
				"type": "string"
			}
		],
		"name": "addConsumer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "gpuName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "priceInWei",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "computeUnit",
				"type": "uint256"
			}
		],
		"name": "addGpuType",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "gpuID",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "gpuQuantity",
						"type": "uint256"
					},
					{
						"internalType": "uint64",
						"name": "gpuMemory",
						"type": "uint64"
					},
					{
						"internalType": "string",
						"name": "connectionType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cpuName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "cpuCoreCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "uploadBandWidth",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "downloadBandWidth",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "storageType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "storageAvailable",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "portsOpen",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "region",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipAddress",
						"type": "string"
					}
				],
				"internalType": "struct IGPU.MachineInfo",
				"name": "machineDetails",
				"type": "tuple"
			}
		],
		"name": "addMachine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			}
		],
		"name": "addProvider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "queenAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "publicKey",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			}
		],
		"name": "addQueen",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "validatorSS58Address",
				"type": "string"
			}
		],
		"name": "addValidator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "consumers",
		"outputs": [
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organisation",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "gpuHours",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "sshPublicKey",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "requireDrill",
				"type": "bool"
			}
		],
		"name": "createJob",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "disableMachine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "queenAddress",
				"type": "address"
			}
		],
		"name": "getDrillQueenMachines",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "queenAddress",
				"type": "address"
			}
		],
		"name": "getHealthQueenMachines",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			}
		],
		"name": "getNFTAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			}
		],
		"name": "getProviderComputeDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			}
		],
		"name": "getProviderMachines",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProviders",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "queenAddress",
				"type": "address"
			}
		],
		"name": "getQueenMachines",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "validatorNFTAddress",
				"type": "address"
			}
		],
		"name": "getSS58address",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValidators",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gpuID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "gpus",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "computeUnit",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gracePeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "machineID",
						"type": "uint256"
					},
					{
						"internalType": "uint16[]",
						"name": "availabilityData",
						"type": "uint16[]"
					}
				],
				"internalType": "struct IGPU.HealthCheckData[]",
				"name": "healthCheckDataArray",
				"type": "tuple[]"
			}
		],
		"name": "healthCheckBundle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "helper",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "NftAddress",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "TickSeconds",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "GpuID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "UserID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "MachineID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "MachineInfoID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "JobID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "MinDrillTestRange",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "MinMachineAvailability",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "MaxMachineUnavailability",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "GracePeriod",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Helper",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "Scheduler",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "jobID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jobs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "machineID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "consumerAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "queenValidationAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "gpuHours",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startedAt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastChecked",
				"type": "uint256"
			},
			{
				"internalType": "uint16",
				"name": "completedTicks",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "completedHours",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "sshPublicKey",
				"type": "string"
			},
			{
				"internalType": "enum IGPU.JobStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "consumerRating",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "machineID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "machineInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "gpuID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "gpuQuantity",
				"type": "uint256"
			},
			{
				"internalType": "uint64",
				"name": "gpuMemory",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "connectionType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cpuName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "cpuCoreCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "uploadBandWidth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "downloadBandWidth",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "storageType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "storageAvailable",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "region",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipAddress",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "machineInfoID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "machines",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "machineInfoID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "providerAddress",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "lastDrillResult",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "lastDrillTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastChecked",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "currentQueen",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "currentJobID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "healthScore",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "entryTime",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "sucessfulConsecutiveHealthChecks",
				"type": "uint8"
			},
			{
				"internalType": "enum IGPU.MachineStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxMachineUnavailability",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minDrillTestRange",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minMachineAvailability",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nftAddressToProviderAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nftCheck",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "providers",
		"outputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "providersList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "queens",
		"outputs": [
			{
				"internalType": "string",
				"name": "publicKey",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"internalType": "enum IGPU.QueenStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "queensList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "randomDrillTest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "randomHealthCheck",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "machineID",
						"type": "uint256"
					},
					{
						"internalType": "uint16[]",
						"name": "availabilityData",
						"type": "uint16[]"
					}
				],
				"internalType": "struct IGPU.HealthCheckData[]",
				"name": "healthCheckDataArray",
				"type": "tuple[]"
			}
		],
		"name": "randomHealthCheckBundle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			}
		],
		"name": "reassignQueen",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scheduler",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tickSeconds",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"internalType": "uint16",
				"name": "value",
				"type": "uint16"
			}
		],
		"name": "updateAssignedJob",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "gpuMappedID",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "updatedPriceInWei",
				"type": "uint256"
			}
		],
		"name": "updateGpuPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newNftAddress",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "newTickSeconds",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "newGpuID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newUserID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newMachineID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newMachineInfoID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newJobID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newMinDrillTestRange",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newMinMachineAvailability",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newMaxMachineUnavailability",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newGracePeriod",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "newHelper",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "newScheduler",
				"type": "address"
			}
		],
		"name": "updateInitializedValues",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "machineId",
				"type": "uint256"
			},
			{
				"internalType": "uint16",
				"name": "value",
				"type": "uint16"
			}
		],
		"name": "updateMachineStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "enum IGPU.UserType",
				"name": "userType",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "validators",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "maxNFTCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usedNFTCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
module.exports = {
	contractAbi: contractAbi
};