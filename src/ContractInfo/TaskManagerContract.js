const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_orderId",
          "type": "uint256"
        },
        {
          "internalType": "bytes12",
          "name": "_clientId",
          "type": "bytes12"
        },
        {
          "internalType": "bytes12",
          "name": "_contractorId",
          "type": "bytes12"
        },
        {
          "internalType": "address",
          "name": "_clientAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_contractorAddress",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "_level",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_collateralDeposited",
          "type": "uint256"
        },
        {
          "internalType": "contract IERC20",
          "name": "_usdc",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "builderBuddyAddr",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "TaskManager__ArbiterCantBeClientOrContr",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__ContractNotActive",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__CostGreaterThanCollateral",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__FundsTransferFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__InsufficientFundsForTask",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__LastTaskAlreadyFinished",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__LastTaskNotApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__NeitherContractorNorClient",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__NoTasksYet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__NotApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__NotClient",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__NotContractor",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__NotInitiated",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__NotPending",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__OnlyArbiterCanResolveDisputes",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__PreviousTaskNotFinished",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__RatingNotInRange",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TaskManager__RefundCantBeMoreThanCost",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "taskId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "name": "AmountTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "arbiter",
          "type": "address"
        }
      ],
      "name": "ArbiterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "taskId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "name": "TaskAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "taskId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "name": "TaskApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "taskId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "name": "TaskFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "taskId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "name": "TaskRejected",
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
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "WorkFinished",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_cost",
          "type": "uint256"
        }
      ],
      "name": "addTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "approveTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "availCost",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "rating",
          "type": "uint256"
        }
      ],
      "name": "finishTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "finishWork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllRejectedTasks",
      "outputs": [
        {
          "components": [
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
              "internalType": "uint256",
              "name": "cost",
              "type": "uint256"
            },
            {
              "internalType": "enum TaskManager.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "version",
              "type": "uint256"
            }
          ],
          "internalType": "struct TaskManager.Task[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllTasks",
      "outputs": [
        {
          "components": [
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
              "internalType": "uint256",
              "name": "cost",
              "type": "uint256"
            },
            {
              "internalType": "enum TaskManager.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "version",
              "type": "uint256"
            }
          ],
          "internalType": "struct TaskManager.Task[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBuilderBuddyAddr",
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
      "name": "getClientAddress",
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
      "name": "getClientId",
      "outputs": [
        {
          "internalType": "bytes12",
          "name": "",
          "type": "bytes12"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
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
      "inputs": [],
      "name": "getContractorAddress",
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
      "name": "getContractorId",
      "outputs": [
        {
          "internalType": "bytes12",
          "name": "",
          "type": "bytes12"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLevel",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOrderId",
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
      "name": "getRejectedTaskCounter",
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
          "name": "taskId",
          "type": "uint256"
        }
      ],
      "name": "getTask",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "enum TaskManager.Status",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTaskCounter",
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
      "name": "getTaskVersionCounter",
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
      "name": "getUsdcToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
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
          "name": "arbiter",
          "type": "address"
        }
      ],
      "name": "involveArbiter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isWorkFinished",
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
      "name": "rejectTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "remarks",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "amtToRefund",
          "type": "uint256"
        }
      ],
      "name": "resolveDisputeFavourClient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]