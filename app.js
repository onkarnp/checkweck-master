var contractAbi = [
	
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "index",
					"type": "uint256"
				}
			],
			"name": "Added",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_productId",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "info",
					"type": "string"
				}
			],
			"name": "addState",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_a",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_b",
					"type": "string"
				}
			],
			"name": "concat",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "prodid",
					"type": "uint256"
				}
			],
			"name": "getOwner",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_owner",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_text",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_date",
					"type": "string"
				}
			],
			"name": "newItem",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_productId",
					"type": "uint256"
				}
			],
			"name": "searchProduct",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "prodid",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "owner",
					"type": "string"
				}
			],
			"name": "transferOwnership",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	
]; // Paste Contract Here

var contractAddress ='0xd20DfAeD17A59BFE1c9327F1F2D26e0C0059cD20'; // Paste Address here