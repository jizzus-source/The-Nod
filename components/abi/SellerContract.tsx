export const SellerContractABI = [
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "nftAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "buyTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "collector",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "deadstock",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "holygrail",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "goat",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MysteryBoxSeller.PricingOptions",
              "name": "prices",
              "type": "tuple"
            }
          ],
          "internalType": "struct MysteryBoxSeller.Options",
          "name": "opts",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "inputs": [
        {
          "internalType": "enum MysteryBoxNFT.BoxRarity",
          "name": "rarity",
          "type": "uint8"
        }
      ],
      "name": "buy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "collector",
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
      "name": "disable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "enable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "enabled",
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
      "inputs": [],
      "name": "prices",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "deadstock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "holygrail",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "goat",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
    }
  ];