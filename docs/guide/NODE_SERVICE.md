# NODE SERVICE
  
## Introduction
  
Simplify scaling and powering your blockchain apps
  
---
  
Particle's Node Service is your high-performance access to all major blockchains, with supercharged reliability, data correctness, and scalability.
  
### 🚀 Fast & Reliable
  
* Lower latency and faster response
* Peak reliability node services
* Dynamic scalability
  
### 🔥 Extended Capabilities
  
* Enhanced API
* Data analysis
* 100% data correctness
* Rich dataset for FT & NFT Marketplaces
  
### 🧑‍💻 Easy To Use
  
* One-line API infrastructure
* 1,000+ engineering hours saved per year
  
### Available Networks
  
Currently, we support almost all EVM compatible chains **and the Solana chain.** [For details check this 👉]( )
  
---
  
## Authentication
  
Authenticate yourself to the Particle Node Service API
  
---
  
### Endpoint
  
**Base URL: https://api.particle.network**
  
```
The Server RPC URL is:
https://api.particle.network/server/rpc
  
The Solana chain's RPC URL is:
https://api.particle.network/solana/rpc
  
All EVM-compatible chains' RPC URL is:
https://api.particle.network/evm-chain/rpc
```
  
### Authentication
  
We assume you already have a [Particle Account]( ) and access to our [Dashboard]( ), where you can create projects and apps.
  
The Web3 APIs require **HTTP Basic Authentication:**
  
| Basic Auth Key | Basic Auth Value        |
| -------------- | ----------------------- |
| Username       | Your Project Id         |
| Password       | Your Project Server Key |
  
### Code Example
  
```
<!-- Javascript -->
const axios = require('axios');
(async () => {
    const response = await axios.get('https://api.particle.network/server/rpc', {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        },
    });
  
    console.log(response.data);
})();
  
  
<!-- Curl -->
curl 'https://api.particle.network/server/rpc' \
--header 'Authorization: Basic { Auth String }'
```
  
---
  
## Solana API
  
### Solana API
  
#### Endpoint
  
ttps://api.particle.network/solana/rpc
  
#### Structure
  
The Solana API allows applications to connect to a Solana node that is part of the Solana blockchain. Developers can interact with on-chain data and send different types of transactions to the network by utilizing the endpoints provided by the API.
  
The Solana API follows a JSON-RPC 2.0 standard. We extended a field named chainId to specify which Solana network we use.
  
| chainId Value (int) | Solana Network |
| ------------------- | -------------- |
| 101                 | Mainnet Beta   |
| 102                 | Testnet        |
| 103                 | Devnet         |
  
So the entire JSON RPC request body will look as follows：

```
// Solana get-balance request body
{
    "chainId": 103, // Devnet
    "jsonrpc": "2.0",
    "id": 0,
    "method": "getBalance",
    "params": ["83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri"]
}
```
  
#### Standard RPC
  
The Solana API supports **all methods** of Solana.
  
You can use our API just like you use [their official API]( ), but ours is faster 🚀
  
The difference is that we use the chainId field to specify the network, and Solana's official API uses different URLs.
  
#### Enhanced RPC
  
The Solana API offers several enhanced API methods on top of existing official calls.
  
The Enhanced API is easy and powerful, which makes app-building faster and saves your time.
  
---
  
### Standard RPC
  
All of The Solana Official JSON-RPC API methods that are supported.
  
---
  
#### Example：getBalance
  
Returns the balance of the account of provided Pubkey
  
**Parameters:**
```
    string> - Pubkey of account to query, as base-58 encoded string
    <object> - (optional) [Commitment]( )
```
  
**Results:**
```
    RpcResponse<u64> - RpcResponse JSON object with value field set to the balance
```
  
Request Example：

```
<!-- Javascript -->
const axios = require('axios');
  
(async () => {
    const response = await axios.post('https://api.particle.network/solana/rpc', {
        chainId: 103,
        jsonrpc: '2.0',
        id: 0,
        method: 'getBalance',
        params: ['8FE27ioQh3T7o22QsYVT5Re8NnHFqmFNbdqwiF3ywuZQ'],
    }, {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        }
    });
  
    console.log(response.data);
})();
  
<!-- Curl -->
curl 'https://api.particle.network/solana/rpc' \
--header 'Authorization: Basic { Auth String }' \
-X POST -H "Content-Type: application/json" -d '
    {"chainId":103,"jsonrpc":"2.0","id":0,"method":"getBalance","params":["8FE27ioQh3T7o22QsYVT5Re8NnHFqmFNbdqwiF3ywuZQ"]}
'
```
  
Response Example：

```
{
    "jsonrpc": "2.0",
    "result": {
        "context": {
            "slot": 133898617
        },
        "value": 3467728040
    },
    "id": 0
}
```
  
#### [👉 More APIs]( )
  
---
  
### Enhanced RPC
  
Simple And Powerful
  
---
  
#### 🔥 enhancedGetPrice
  
Get the real-time exchange rate of the Solana token ($SOL)
  
**Parameters:** 
``
    <[string]> - token mint address array
    The native token has no mint address, so it's value is native

    <[string]> - Array of supported currencies, the values of currencies is as follows:
        usd
        cny
```
```
  

  
**Results:**
```
 <[object]> - a JSON object array containing:
     address: <string>, token mint address
     currencies: <[object]>, currency info object
```  

  
Request example:

```
<!-- Javascript -->
const axios = require('axios');
  
(async () => {
    const response = await axios.post('https://api.particle.network/solana/rpc', {
        chainId: 103,
        jsonrpc: '2.0',
        id: 0,
        method: 'enhancedGetPrice',
        params: [
            [
                'native', 
                '2Dzzc14S1D7cEFGJyMZMACuoQRHVUYFhVE74C5o8Fwau',
            ],
            [
                'usd', 
                'cny',
            ],
        ],
    }, {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        },
    });
  
    console.log(response.data);
})();
  
<!-- Curl -->
curl 'https://api.particle.network/solana/rpc' \
--header 'Authorization: Basic YmEwNTA5ZTctZThiYi00MzY2LTg5YjctYjM5ZjAyYmNkMDg0OmNnZjE4YXNMbG9zSkJzZlZXbWxvNHNuZ2lFRVZzc1gzNHFlTUxmZzQ=' \
-X POST -H "Content-Type: application/json" -d '
    {"chainId":103,"jsonrpc":"2.0","id":0,"method":"enhancedGetPrice","params":[["native","2Dzzc14S1D7cEFGJyMZMACuoQRHVUYFhVE74C5o8Fwau"],["usd","cny"]]}
'
```
  
Response example:

```
{
    "chainId": 103,
    "jsonrpc": "2.0",
    "id": 0,
    "result": [
        {
            "address": "native",
            "currencies": [
                {
                    "type": "usd",
                    "price": 52.09,
                    "marketCap": 17527528410.265934,
                    "24hChange": 17.807880245620492,
                    "24hVol": 2822619824.236063,
                    "lastUpdatedAt": 1652433876
                },
                {
                    "type": "cny",
                    "price": 353.66,
                    "marketCap": 118957582567.63393,
                    "24hChange": 17.750642277273172,
                    "24hVol": 19162201462.773823,
                    "lastUpdatedAt": 1652433876
                }
            ]
        },
        {
            "address": "2Dzzc14S1D7cEFGJyMZMACuoQRHVUYFhVE74C5o8Fwau",
            "currencies": [
                {
                    "type": "usd",
                    "price": 0.00000559,
                    "marketCap": 0,
                    "24hChange": 5.572351955926479,
                    "24hVol": 1.0696550251883796,
                    "lastUpdatedAt": 1652415761
                },
                {
                    "type": "cny",
                    "price": 0.00003795,
                    "marketCap": 0,
                    "24hChange": 5.659460423725415,
                    "24hVol": 7.265738724094583,
                    "lastUpdatedAt": 1652415761
                }
            ]
        }
    ]
}
```
  
#### 🔥 enhancedGetTokensAndNFTs
  
Get token list and NFT list by giving an address
  
**Parameters:**
```
 <string> - Pubkey of account to query, as base-58 encoded string
```
  
**Results:**
```
 <object> - a JSON object containing:
     lamports: <u64>, lamports balance of the address
     nfts: <[object]>, NFT list of the address
     tokens: <[object]>, token list of the address
```
  
Request Example

```
<!-- Javascript -->
const axios = require('axios');
  
(async () => {
    const response = await axios.post('https://api.particle.network/solana/rpc', {
        chainId: 103,
        jsonrpc: '2.0',
        id: 0,
        method: 'enhancedGetTokensAndNFTs',
        params: ['6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe'],
    }, {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        }
    });
  
    console.log(response.data);
})();
  
<!-- Curl -->
curl 'https://api.particle.network/solana/rpc' \
--header 'Authorization: Basic { Auth String }' \
-X POST -H "Content-Type: application/json" -d '
    {"chainId":103,"jsonrpc":"2.0","id":0,"method":"enhancedGetTokensAndNFTs","params":["6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe"]}
'
```
  
Response Example

```
{
    "chainId": 103,
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "lamports": 7395293870,
        "nfts": [
            {
                "name": "MPD #2855",
                "symbol": "MPD",
                "image": "https://www.arweave.net/dfF-HHAE_G2qQN4N7gN2gLvXah_7xOQzUysI68rLqPA?ext=jpg",
                "mint": "5bxPBSWibpkYifCzaKhPuix63pqhehZCf5DU4LWwh5ot",
                "sellerFeeBasisPoints": 0,
                "data": {
                    "name": "MPD #2855",
                    "symbol": "MPD",
                    "image": "https://www.arweave.net/dfF-HHAE_G2qQN4N7gN2gLvXah_7xOQzUysI68rLqPA?ext=jpg",
                    "properties": {
                        "files": [
                            {
                                "uri": "https://www.arweave.net/dfF-HHAE_G2qQN4N7gN2gLvXah_7xOQzUysI68rLqPA?ext=jpg",
                                "type": "image/jpg"
                            }
                        ],
                        "creators": [
                            {
                                "address": "MPaXksCWktUySTTQ91h5Bq6CAeTWb7Myc9jhEiQQwKb",
                                "share": 100
                            }
                        ]
                    }
                }
            }
        ],
        "tokens": [
            {
                "name": "XYZ Test",
                "symbol": "XYZ",
                "image": "https://static.particle.network/token-list/solana/DEhAasscXF4kEGxFgJ3bq4PpVGp5wyUxMRvn6TzGVHaw.png",
                "mint": "5yAymuqKorGrXka7SnEQaHdeXxzKrDMXzDkQUGgT9gGy",
                "decimals": 6,
                "amount": 51000000
            }
        ]
    }
}
```
  
#### 🔥 enhancedGetTransactionsByAddress
  
Get parsed transaction history by giving an address
  
**Parameters:**
```
 <string> - account address as base-58 encoded string
 <object> - (optional) configuration object containing the following fields:
   limit: <number> - (optional) maximum transactions to return (between 1 and 1,000, default: 1,000).
   before: <string> - (optional) start searching backwards from this transaction signature. If not provided the search starts from the top of the highest max confirmed block.
   until: <string> - (optional) search until this transaction signature, if found before limit reached.
```
  
**Results:**
```
 <[object]> - a JSON object array containing:
   type: <string>, parsed type for a single transaction, the type value is as below
     unknown, can not parse this transaction in server
     transfer-token, the transaction contains transfer token action
   lamportsChange: <int64>, the account by given address lamports change in this transaction
   lamportsFee: <int64>, the transaction lamports fee
   signature: <string>, the transaction signature
   blockTime: <int64>, the transaction block time
   status: <"success" | "failed">, the status of the transaction
   data: <object>, extended data, when the type value is not unknown, the data is an object containing transaction detail
```
  
Request example:

```
<!-- Javascript -->
const axios = require('axios');
  
(async () => {
    const response = await axios.post('https://api.particle.network/solana/rpc', {
        chainId: 103,
        jsonrpc: '2.0',
        id: 0,
        method: 'enhancedGetTransactionsByAddress',
        params: ['6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe'],
    }, {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        }
    });
  
    console.log(response.data);
})();
  
<!-- Curl -->
curl 'https://api.particle.network/solana/rpc' \
--header 'Authorization: Basic { Auth String }' \
-X POST -H "Content-Type: application/json" -d '
    {"chainId":103,"jsonrpc":"2.0","id":0,"method":"enhancedGetTransactionsByAddress","params":["6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe"]}
'
```
  
Response example:

```
{
    "chainId": 103,
    "jsonrpc": "2.0",
    "id": 1,
    "result": [
        {
            "type": "transfer-token",
            "lamportsChange": -5000,
            "lamportsFee": 5000,
            "signature": "56VW9ki27EQzVQ1MqWFiZDfm2JgnCRW13MYJdmMQ8C4xeZLj8AbcQFKBfU4GMQQJT1MKyacpAiuMzMnDGcMmddNG",
            "blockTime": 1651214222,
            "status": "success",
            "data": {
                "name": "XYZ Test", // token name
                "symbol": "XYZ", // token symbol
                "image": "https://static.particle.network/token-list/solana/DEhAasscXF4kEGxFgJ3bq4PpVGp5wyUxMRvn6TzGVHaw.png", // token logo url
                "mint": "51qnHqrmVZfThAu9upFuKjsfLMLkZ8oezBz5gPxdFtJ3",
                "decimals": 9,
                "amountTransfered": 100, // transfer amount in this transaction
                "sender": "8FE27ioQh3T7o22QsYVT5Re8NnHFqmFNbdqwiF3ywuZQ",
                "receiver": "5vYsVaJufzUg1ZaW498VZCGbhNTTGDezHbydyJ6invAD",
                "senderAssociatedTokenAddress": "DdEq5UPCrg7WMqXqSXk2bUh16GMwLf5eXE1Ywj5CDTQN",
                "receiverAssociatedTokenAddress": "J4g3on2T2zPFCcjMJhPtGBXyLYFFYoFoxR69gVsTaqAi"
            }
        },
        {
            "type": "unknown",
            "lamportsChange": -1471600,
            "lamportsFee": 10000,
            "signature": "3XxaximWV9SnTVTeZtLyzTrJG7XHbByeYAKfxB1NS4BvhEP3Jb6hdExtvBMhp4e7y76XeCCDwxszTXYxP4yUFa2",
            "blockTime": 1650518427,
            "status": "success",
            "data": {}
        }
    ]
}
```
  
---
  
## EVM Chains API
  
### EVM Chains API
  
#### Endpoint
  
https://api.particle.network/evm-chain/rpc
  
#### Structure
  
The EVM Chains API allows applications to connect to a EVM chain node that is part of the EVM blockchain. Developers can interact with on-chain data and send different types of transactions to the network by utilizing the endpoints provided by the API.
  
The EVM Chains API follows a JSON-RPC 2.0 standard. We extended a field named **chainId** to specify which Solana network we use.
  
| chainId Value (int) | chainName Value(string) | EVM Chains                  |
| ------------------- | ----------------------- | --------------------------- |
| 1                   | ethereum                | Ethereum Mainnet            |
| 42                  | ethereum                | Ethereum Testnet(Kovan)     |
| 56                  | bsc                     | Binance Smart Chain Mainnet |
| 97                  | bsc                     | Binance Smart Chain Testnet |
| 137                 | polygon                 | Polygon Mainnet             |
| 80001               | polygon                 | Polygon Testnet(Mumbai)     |
| 43114               | avalanche               | Avalanche Mainnet(C-Chain)  |
| 43113               | avalanche               | Avalanche Testnet(Fuji)     |
| 250                 | fantom                  | Fantom Mainnet(Opera)       |
| 4002                | fantom                  | Fantom Testnet              |
| 42161               | arbitrum                | Arbitrum Mainnet(One)       |
| 421611              | arbitrum                | Arbitrum Testnet(Rinkeby)   |  |
| 1284                | moonbeam                | Moonbeam                    |
| 1285                | moonriver               | Moonriver                   |
| 1287                | moonbeam/moonriver      | Moonbase Alpha              |
| 1666600000          | harmony                 | Harmony Mainnet             |
| 1666700000          | harmony                 | Harmony Testnet             |
| 10                  | optimism                | Optimism Mainnet            |
| 69                  | optimism                | Optimism Testnet(Kovan)     |
| 128                 | heco                    | Huobi ECO Chain Mainnet     |
| 256                 | heco                    | Huobi ECO Chain Testnet     |
| 1313161554          | aurora                  | Aurora Mainnet              |
| 1313161555          | aurora                  | Aurora Testnet              |
  
#### Standard RPC [Standard RPC]( )
  
#### Enhanced RPC [Enhanced RPC]( )
  
The EVM Chains API offers several enhanced API methods on top of existing official calls.
The Enhanced API is easy and powerful, which makes app-building faster and saves your time.
  
---
  
### Standard RPC
  
The full list of API methods that are supported by is given below. And an error returned if a method is specified that is not supported.
  
For a full list of RPC API methods, refer to the [JSON-RPC specification.]( )
  
| RPC API method                          | Supported |
| --------------------------------------- | --------- |
| eth_accounts                            | ❌         |
| eth_blockNumber                         | ✅         |
| eth_chainId                             | ✅         |
| eth_getBalance*                         | ✅         |
| eth_getStorageAt*                       | ✅         |
| eth_getTransactionCount*                | ✅         |
| eth_getBlockTransactionCountByHash      | ✅         |
| eth_getBlockTransactionCountByNumber    | ✅         |
| eth_getUncleCountByBlockHash            | ✅         |
| eth_getUncleCountByBlockNumber          | ✅         |
| eth_getCode*                            | ✅         |
| eth_sign                                | ❌         |
| eth_sendTransaction                     | ❌         |
| eth_sendRawTransaction                  | ✅         |
| eth_call*                               | ✅         |
| eth_estimateGas                         | ✅         |
| eth_getBlockByHash                      | ✅         |
| eth_getBlockByNumber                    | ✅         |
| eth_getTransactionByHash                | ✅         |
| eth_getTransactionByBlockHashAndIndex   | ✅         |
| eth_getTransactionByBlockNumberAndIndex | ✅         |
| eth_getTransactionReceipt               | ✅         |
| eth_getUncleByBlockHashAndIndex         | ✅         |
| eth_getUncleByBlockNumberAndIndex       | ✅         |
| eth_getCompilers                        | ❌         |
| eth_compileLLL                          | ❌         |
| eth_compileSolidity                     | ❌         |
| eth_compileSerpent                      | ❌         |
| eth_newFilter                           | ❌         |
| eth_newBlockFilter                      | ❌         |
| eth_newPendingTransactionFilter         | ❌         |
| eth_uninstallFilter                     | ❌         |
| eth_getFilterChanges                    | ❌         |
| eth_getFilterLogs                       | ❌         |
| eth_getLogs*                            | ✅         |
| eth_getWork                             | ✅         |
| eth_submitWork                          | ✅         |
| eth_submitHashrate                      | ✅         |
| eth_getProof                            | ✅         |
  
RPC API methods followed by “*” are only supported for the latest 128 blocks
  
---
  
### Enhanced RPC
  
Simple And Powerful
  
---
  
#### 🔥 particle_getPrice
  
  
Get the real-time exchange rate of the token
  
**Parameters:**
```
    <[string]> - address array
    The native token has no contract address, so it's value is native

    <[string]> - Array of supported currencies, the values of currencies is as follows:
    usd
    cny
```
  

  
**Results:**
```
 <[object]> - a JSON object array containing:
   address: <string>, token contract address
   currencies: <[object]>, currency info object
```
  
Request example:

```
<!-- Javascript -->
const axios = require('axios');
  
(async () => {
    const response = await axios.post('https://api.particle.network/evm-chain/rpc', {
        chainId: 42,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getPrice',
        params: [
            [
                'native', 
                '0x7968bc6a03017eA2de509AAA816F163Db0f35148',
            ],
            [
                'usd', 
                'cny',
            ],
        ],
    }, {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        },
    });
  
    console.log(response.data);
})();
  
<!-- Curl -->
curl 'https://api.particle.network/evm-chain/rpc' \
--header 'Authorization: Basic YmEwNTA5ZTctZThiYi00MzY2LTg5YjctYjM5ZjAyYmNkMDg0OmNnZjE4YXNMbG9zSkJzZlZXbWxvNHNuZ2lFRVZzc1gzNHFlTUxmZzQ=' \
-X POST -H "Content-Type: application/json" -d '
    {"chainId":42,"jsonrpc":"2.0","id":1,"method":"particle_getPrice","params":[["native","0x7968bc6a03017eA2de509AAA816F163Db0f35148"],["usd","cny"]]}
'
```
  
Response example:

```
{
    "chainId": 42,
    "jsonrpc": "2.0", 
    "id": 1, 
    "result": [
        {
            "address": "native", 
            "currencies": [
                {
                    "type": "cny", 
                    "price": 12170.15, 
                    "marketCap": 1471838560900.835, 
                    "24hChange": -6.152514002972175, 
                    "24hVol": 134476255636.24605, 
                    "lastUpdatedAt": 1654153126
                }, 
                {
                    "type": "usd", 
                    "price": 1822.72, 
                    "marketCap": 220186784486.6231, 
                    "24hChange": -5.940275233699975, 
                    "24hVol": 20140522643.179638, 
                    "lastUpdatedAt": 1654153126
                }
            ]
        },
        {
            "address": "0x7968bc6a03017eA2de509AAA816F163Db0f35148", 
            "currencies": [
                {
                    "type": "cny", 
                    "price": 5.68, 
                    "marketCap": 9983229.811334804, 
                    "24hChange": -3.653366801443764, 
                    "24hVol": 1225668.578963783, 
                    "lastUpdatedAt": 1654173523
                }, 
                {
                    "type": "usd", 
                    "price": 0.85174, 
                    "marketCap": 1496287.4417468207, 
                    "24hChange": -3.6244889459436456, 
                    "24hVol": 183684.05277680393, 
                    "lastUpdatedAt": 1654173523
                }
            ]
        }
    ]
}
```
  
#### 🔥 particle_suggestedGasFees
  
Get suggested gas fees for EIP-1559
  
**Parameters:**
* no parameters
  
**Results:**
```
 <object> - a JSON object containing:
     low: <object>, suggested gas fees info
     medium: <object>, suggested gas fees info
     fast: <object>, suggested gas fees info
     baseFee: <string>, current base fee
```
  
Request Example:

```
<!-- Javascript -->
const axios = require('axios');
  
(async () => {
    const response = await axios.post('https://api.particle.network/evm-chain/rpc', {
        chainId: 42,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_suggestedGasFees',
        params: [],
    }, {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        }
    });
  
    console.log(response.data);
})();
  
<!-- Curl -->
curl 'https://api.particle.network/evm-chain/rpc' \
--header 'Authorization: Basic { Auth String }' \
-X POST -H "Content-Type: application/json" -d '
    {"chainId":42,"jsonrpc":"2.0","id":1,"method":"particle_suggestedGasFees","params":[]}
'
```
  
Response Example:

```
{
    "chainId": 42,
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "low": {
            "maxPriorityFeePerGas": "1",
            "maxFeePerGas": "20.261906202",
            "minWaitTime": 15000,
            "maxWaitTime": 30000
        },
        "medium": {
            "maxPriorityFeePerGas": "1.5",
            "maxFeePerGas": "27.503573373",
            "minWaitTime": 15000,
            "maxWaitTime": 45000
        },
        "high": {
            "maxPriorityFeePerGas": "2",
            "maxFeePerGas": "34.745240544",                
            "minWaitTime": 15000,
            "maxWaitTime": 60000
        },
        "baseFee": "19.261906202"
    }
}
```
  
#### 🔥 particle_getTokensAndNFTs
  
Get token and nfts by giving an address
  
**Parameters:**
```
    <string> - account address
```
  
**Results:**
  
```
 <[object]> - a JSON object array containing:
     native: <string>, native balance
     tokens: <[object]>, an object array containing token detail
     nfts: <[object]>, an object array containing NFT detail
```
  
**Request example:**

```
<!-- Javascript -->
const axios = require('axios');
  
(async () => {
    const response = await axios.post('https://api.particle.network/evm-chain/rpc', {
        chainId: 1,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokensAndNFTs',
        params: ['0x329a7f8b91Ce7479035cb1B5D62AB41845830Ce8'],
    }, {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        }
    });
  
    console.log(response.data);
})();
  
<!-- Curl -->
curl 'https://api.particle.network/evm-chain/rpc' \
--header 'Authorization: Basic { Auth String }' \
-X POST -H "Content-Type: application/json" -d '
    {"chainId":1,"jsonrpc":"2.0","id":1,"method":"particle_getTokensAndNFTs","params":["0x329a7f8b91Ce7479035cb1B5D62AB41845830Ce8"]}
'
```
  
**Response example:**
```
{
    "jsonrpc": "2.0", 
    "id": 1, 
    "result": {
        "native": "101067001639555898", 
        "tokens": [
            {
                "decimals": 18, 
                "amount": "1000000000000000000", 
                "address": "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa", 
                "name": "Dai Stablecoin", 
                "symbol": "DAI", 
                "image": ""
            }, 
            {
                "decimals": 18, 
                "amount": "1000000000000000", 
                "address": "0xd0A1E359811322d97991E03f863a0C30C2cF029C", 
                "name": "Wrapped Ether", 
                "symbol": "WETH", 
                "image": ""
            }, 
            {
                "decimals": 18, 
                "amount": "10000000000000000000", 
                "address": "0xa36085F69e2889c224210F603D836748e7dC0088", 
                "name": "ChainLink Token", 
                "symbol": "LINK", 
                "image": ""
            }
        ], 
        "nfts": [
            {
                "address": "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d", 
                "isSemiFungible": false, 
                "tokenId": "362330", 
                "tokenBalance": "1", 
                "name": "CryptoKitties: Core", 
                "symbol": "CK", 
                "image": "", 
                "data": {
                    "name": null, 
                    "description": "Heyo! I'm Kitty #362330. I've never told anyone this, but I once kissed a dog. I once kissed a rabbit. I don't like to talk about it. Can't wait to eat ice cream with you!", 
                    "image": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/362330.png", 
                    "animation_url": null, 
                    "external_url": null, 
                    "attributes": [
                        {
                            "type": "colorprimary", 
                            "description": "greymatter", 
                            "kittyId": 362330
                        }, 
                        {
                            "type": "coloreyes", 
                            "description": "mintgreen", 
                            "kittyId": 362330
                        }, 
                        {
                            "type": "body", 
                            "description": "ragamuffin", 
                            "kittyId": 362330
                        }, 
                        {
                            "type": "colorsecondary", 
                            "description": "barkbrown", 
                            "position": 273, 
                            "kittyId": 38911
                        }, 
                        {
                            "type": "mouth", 
                            "description": "saycheese", 
                            "position": 19, 
                            "kittyId": 11564
                        }, 
                        {
                            "type": "pattern", 
                            "description": "spock", 
                            "position": 547, 
                            "kittyId": 96322
                        }, 
                        {
                            "type": "eyes", 
                            "description": "crazy", 
                            "kittyId": 362330
                        }, 
                        {
                            "type": "colortertiary", 
                            "description": "kittencream", 
                            "kittyId": 362330
                        }, 
                        {
                            "type": "secret", 
                            "description": "se7", 
                            "position": -1, 
                            "kittyId": 362330
                        }, 
                        {
                            "type": "purrstige", 
                            "description": "pu12", 
                            "position": -1, 
                            "kittyId": 362330
                        }
                    ], 
                    "owner": "0xb3d8ba776631f0ebcebaf16182fb733f894b68b7"
                }
            }
        ]
    }, 
    "chainId": 42
}
```
  
#### 🔥 particle_getTransactionsByAddress
  
Get parsed transaction history by giving an address
  
**Parameters:**
```
    <string> - account address
```
  
**Results:**
  
```
 <[object]> - a JSON object containing:
   hash: <string>, transaction hash
   from: <string>, transaction send from address
   to: <string>, transaction send to address
   value: <string>, transaction send value
   data: <string>, transaction send data
   gasLimit: <int64>, transaction gas limit
   timestamp: <int64>, transaction time
   status: <int64>, transaction status:, the value is as below:
     0, pending transaction in TX-QUEUE, can cancel
     1, pending transaction in TX-POOL, can speed up or cancel
     3, confirmed transaction which status is Success
     4, confirmed transaction which status is Fail
```

  
when status is 0|1, the object containing:
```
 type: <int64>, transaction type, the value is as below:
     0: legacy transaction
     1: EIP-2930 access list transaction
     2: EIP-1559 gas fee market transaction
   nonce: <int64>, trancsaction nonce
   accessList: <[]>, EIP-2930 access list
   maxPriorityFeePerGas: <string>, EIP-1559 max priority fee per gas
   maxFeePerGas: <string>, EIP-1559 max fee per gas
```


when status is 3|4, the object containing:

```
    gasSpent: <string>, transaction actual used gas
        gasPrice: <string>, transaction gas price
        fees: <string>, transaction gas fees
```  

  
Request Example:
  
```
<!-- Javascript -->
const axios = require('axios');
  
(async () => {
    const response = await axios.post('https://api.particle.network/evm-chain/rpc', {
        chainId: 42,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTransactionsByAddress',
        params: ['0x425249Cf0F2f91f488E24cF7B1AA3186748f7516'],
    }, {
        auth: {
            username: 'Your Project Id',
            password: 'Your Project Server Key',
        }
    });
  
    console.log(response.data);
})();
  
<!-- Curl -->
curl 'https://api.particle.network/evm-chain/rpc' \
--header 'Authorization: Basic { Auth String }' \
-X POST -H "Content-Type: application/json" -d '
    {"chainId":42,"jsonrpc":"2.0","id":1,"method":"particle_getTransactionsByAddress","params":["0x425249Cf0F2f91f488E24cF7B1AA3186748f7516"]}
'
```
  
Response Example:

```
{
    "chainId": 42,
    "jsonrpc": "2.0",
    "id": 1,
    "result": [
        {
            "chainId": "0x2a",
            "nonce": "0x9",
            "maxPriorityFeePerGas": "0x8c347c90",
            "maxFeePerGas": "0xb60535d5740",
            "gasLimit": "0x5208",
            "to": "0x6D5fCEd0C74F22a1B145ef48B25527Ce9BF829bF",
            "value": "0x16345785d8a0000",
            "data": "0x",
            "accessList": [ ],
            "hash": "0x301657f8691004172b756e198a680f1e38065899b74f41175dde206071c17008",
            "from": "0x425249Cf0F2f91f488E24cF7B1AA3186748f7516",
            "type": 2,
            "status": 1,
            "timestamp": 1653593819
        },
        {
            "chainId": "0x2a",
            "hash": "0xbe18f8fd8c0694af8fa3dbd29b53f20981269a7c08f0c0e9ae888aa863ef74c7",
            "from": "0x425249Cf0F2f91f488E24cF7B1AA3186748f7516",
            "to": "0x5F5D96fac4cca23196531A4Fa221bC309C16544E",
            "value": "0x0",
            "gasLimit": "0x37775",
            "gasSpent": "0x33600",
            "gasPrice": "0x77359400",
            "fees": "0x17ec609380000",
            "status": 3,
            "timestamp": 1630521436
        }
    ]
}
```

---
  
## Error Reference
  
Learn about the standard JSON-RPC error codes and Particle Network's custom error codes
  
For JSON-RPC-specific errors, our API returns a 200 with the JSON-RPC error in the JSON response.
  
---
  
### Example Error Response
  
```
{
  "jsonrpc": "2.0",
  "chainId": 101, // optional; only chains's rpc returns this
  "id": 1,
  "error": {
    "code": -32602,
    "message": "Invalid params: invalid length 63, expected a 0x-prefixed, padded, hex-encoded hash with length 64."
  }
}
```
  
### JSON-RPC Error Codes
  
| Code   | Possible Return Message        | Description                                                                                           |
| ------ | ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 10001  | System error                   | Internal JSON-RPC error.                                                                              |
| 10002  | Invalid parameters             | Invalid method parameter(s).                                                                          |
| 40101  | User not exists                |                                                                                                       |
| 40102  | Authentication failed          | Invalid project ID or invalid project key.                                                            |
| 40103  | Address not exists             |                                                                                                       |
| 40104  | Insufficient funds             |                                                                                                       |
| 40105  | EIP1559: Invalid fee setting   |                                                                                                       |
| 40106  | Nonce error                    |                                                                                                       |
| 40107  | Cancel the biggest nonce first | Cancel local status transaction must from the biggest to the smallest.                                |
| 40108  | Transaction confirmed          | Can not speed up or cancel a confirmed transaction.                                                   |
| 40109  | GasLimit too low               | Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text. |
| 40201  | Transaction Error              |                                                                                                       |
| -32700 | Parse error                    |                                                                                                       |
| -32600 | Invalid request                |                                                                                                       |
| -32601 | Method not found               | The JSON sent is not a valid Request object.                                                          |
| -32602 | Invalid parameters             | The method does not exist/is not available.                                                           |
| -32603 | Internal error                 | Invalid method parameter(s).                                                                          |
| -32000 | Server error                   | Internal JSON-RPC error.                                                                              |
