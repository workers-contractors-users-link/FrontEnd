const contractAddr = "0x7706dB18C4d446e3F11B0A64371C30511b055427"

const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "router",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_minimumScore",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_scorerId",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_source",
                "type": "string"
            },
            {
                "internalType": "uint64",
                "name": "_subscriptionId",
                "type": "uint64"
            },
            {
                "internalType": "uint32",
                "name": "_gasLimit",
                "type": "uint32"
            },
            {
                "internalType": "bytes",
                "name": "_secrets",
                "type": "bytes"
            },
            {
                "internalType": "string",
                "name": "donName",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "EmptyArgs",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "EmptySecrets",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "EmptySource",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NoInlineSecrets",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OnlyRouterCanFulfill",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UserRegistration__AlreadyRegistered",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UserRegistration__BuilderBuddyAlreadySet",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UserRegistration__CallerNotBuilderBuddy",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UserRegistration__ContractorNotFound",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UserRegistration__InvalidUserId",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UserRegistration__NotOwner",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "ethAddress",
                "type": "address"
            }
        ],
        "name": "AlreadyRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "ethAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "enum UserRegistration.Role",
                "name": "role",
                "type": "uint8"
            }
        ],
        "name": "Registered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "reqId",
                "type": "bytes32"
            }
        ],
        "name": "RegistrationRequestSent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "ethAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "score",
                "type": "uint256"
            }
        ],
        "name": "RegistrationUnsuccessful",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "RequestFulfilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "RequestSent",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "builderBuddy",
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
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            }
        ],
        "name": "contractors",
        "outputs": [
            {
                "internalType": "address",
                "name": "ethAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "score",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            },
            {
                "internalType": "bool",
                "name": "isAssigned",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "totalCollateralDeposited",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            }
        ],
        "name": "customers",
        "outputs": [
            {
                "internalType": "address",
                "name": "ethAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "_contractorId",
                "type": "bytes12"
            },
            {
                "internalType": "uint256",
                "name": "_collateral",
                "type": "uint256"
            }
        ],
        "name": "decrementCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "donId",
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
        "inputs": [],
        "name": "errror",
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
        "inputs": [],
        "name": "gasLimit",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "contractorId",
                "type": "bytes12"
            }
        ],
        "name": "getCollateralDeposited",
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
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            }
        ],
        "name": "getContractorAddr",
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
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            }
        ],
        "name": "getContractorInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "ethAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "score",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint8",
                        "name": "level",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "isAssigned",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalCollateralDeposited",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct UserRegistration.Contractor",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            }
        ],
        "name": "getCustomerAddr",
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
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            }
        ],
        "name": "getCustomerInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "ethAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "internalType": "struct UserRegistration.Customer",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "requestId",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "response",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "err",
                "type": "bytes"
            }
        ],
        "name": "handleOracleFulfillment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "_contractorId",
                "type": "bytes12"
            },
            {
                "internalType": "uint256",
                "name": "_score",
                "type": "uint256"
            }
        ],
        "name": "incrementContractorScore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minimumScore",
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
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            },
            {
                "internalType": "enum UserRegistration.Role",
                "name": "role",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "register",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "reqId",
                "type": "bytes32"
            }
        ],
        "name": "reqIdToUserInfo",
        "outputs": [
            {
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            },
            {
                "internalType": "address",
                "name": "ethAddress",
                "type": "address"
            },
            {
                "internalType": "enum UserRegistration.Role",
                "name": "role",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "scorerId",
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
        "inputs": [],
        "name": "secrets",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_builderBuddy",
                "type": "address"
            }
        ],
        "name": "setBuilderBuddy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "_contractorId",
                "type": "bytes12"
            },
            {
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }
        ],
        "name": "setContractorAssignStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "_contractorId",
                "type": "bytes12"
            },
            {
                "internalType": "uint8",
                "name": "_level",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_collateral",
                "type": "uint256"
            }
        ],
        "name": "setLevelAndCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "newSecrets",
                "type": "bytes"
            }
        ],
        "name": "setSecrets",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "newSubId",
                "type": "uint64"
            }
        ],
        "name": "setSubId",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "source",
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
        "inputs": [],
        "name": "subscriptionId",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "success",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "userAddr",
                "type": "address"
            }
        ],
        "name": "userAddrToUserId",
        "outputs": [
            {
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

module.exports = { abi, contractAddr }