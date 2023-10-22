const contractAddr = "0xA2810D43556A8cB6692DE836627e7F78BF498Ebe"

const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "userRegAddr",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "collateralsForLevel",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "scoreForLevel",
                "type": "uint256[]"
            },
            {
                "internalType": "address",
                "name": "usdcToken",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__AlreadyMaxedLevel",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__AlreadyStaked",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__AmountExceedsDeposited",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__AmountIsZero",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__CallerNotOwnerOfOrder",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__ContractorAlreadySet",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__ContractorHasNotStaked",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__ContractorIneligible",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__ContractorNotFound",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__InvalidContractor",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__InvalidCustomer",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__InvalidLevel",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__InvalidLevelsConfig",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__OnlyTaskContractCanCall",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__OrderCantBeCancelled",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__OrderCantHavePastDate",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__OrderNotFound",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__ScoreIsLess",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__StakingFailed",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__TokenTransferFailed",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__WithdrawFailed",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__YouCantDowngrade",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuilderBuddy__YouCantUpgrade",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "contractor",
                "type": "address"
            }
        ],
        "name": "ContractorAssigned",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "contractor",
                "type": "address"
            }
        ],
        "name": "ContractorStaked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "contractor",
                "type": "address"
            }
        ],
        "name": "ContractorUnstaked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "OrderCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "contractor",
                "type": "address"
            }
        ],
        "name": "OrderConfirmed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "customer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "title",
                "type": "string"
            }
        ],
        "name": "OrderCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "bytes12",
                "name": "contractor",
                "type": "bytes12"
            }
        ],
        "name": "RefundedWithCollateral",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "userId",
                "type": "bytes12"
            },
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "internalType": "bytes12",
                "name": "contractorId",
                "type": "bytes12"
            }
        ],
        "name": "assignContractorToOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
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
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "cancelOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "contractorUserId",
                "type": "bytes12"
            },
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "confirmUserOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
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
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "desc",
                "type": "string"
            },
            {
                "internalType": "enum BuilderBuddy.Category",
                "name": "category",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "locality",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "_level",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "budget",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "expectedStartDate",
                "type": "uint256"
            }
        ],
        "name": "createOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "customerUserId",
                "type": "bytes12"
            }
        ],
        "name": "getAllCustomerOrders",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "customer",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes12",
                        "name": "customerId",
                        "type": "bytes12"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "enum BuilderBuddy.Category",
                        "name": "category",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "locality",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "budget",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expectedStartDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum BuilderBuddy.Status",
                        "name": "status",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "contractor",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes12",
                        "name": "contractorId",
                        "type": "bytes12"
                    },
                    {
                        "internalType": "address",
                        "name": "taskContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "level",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct BuilderBuddy.CustomerOrder[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllOrders",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "customer",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes12",
                        "name": "customerId",
                        "type": "bytes12"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "enum BuilderBuddy.Category",
                        "name": "category",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "locality",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "budget",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expectedStartDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum BuilderBuddy.Status",
                        "name": "status",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "contractor",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes12",
                        "name": "contractorId",
                        "type": "bytes12"
                    },
                    {
                        "internalType": "address",
                        "name": "taskContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "level",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct BuilderBuddy.CustomerOrder[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getArbiterContract",
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
                "name": "score",
                "type": "uint256"
            }
        ],
        "name": "getMaxEligibleLevelByScore",
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
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "getOrder",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "customer",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes12",
                        "name": "customerId",
                        "type": "bytes12"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "enum BuilderBuddy.Category",
                        "name": "category",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "locality",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "budget",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expectedStartDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum BuilderBuddy.Status",
                        "name": "status",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "contractor",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes12",
                        "name": "contractorId",
                        "type": "bytes12"
                    },
                    {
                        "internalType": "address",
                        "name": "taskContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "level",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct BuilderBuddy.CustomerOrder",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOrderCounter",
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
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "getRequiredCollateral",
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
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "getScore",
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
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "getTaskContract",
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
        "name": "getUsdcAddress",
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
        "name": "getUserRegistrationContract",
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
                "name": "contractorUserId",
                "type": "bytes12"
            },
            {
                "internalType": "uint8",
                "name": "_level",
                "type": "uint8"
            }
        ],
        "name": "incrementLevelAndStakeUSDC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "score",
                "type": "uint256"
            }
        ],
        "name": "markOrderAsCompleted",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "arbiter",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferCollateralToCustomer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes12",
                "name": "contractorUserId",
                "type": "bytes12"
            },
            {
                "internalType": "uint8",
                "name": "_level",
                "type": "uint8"
            }
        ],
        "name": "withdrawStakedUSDC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]