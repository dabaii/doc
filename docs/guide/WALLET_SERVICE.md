# WALLET SERVICE

## Introduction

Your one-stop wallet solution

---

#### What is Oasis Wallet？

**The Oasis Wallet is not an independent wallet—it is a wallet infrastructure plugged into apps or wallets.**

With Oasis Wallet, you can integrate a wallet tailored to your app's needs, with features including transaction functions, NFT displays, and more.

![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-b9516dc3b96f6dcf3034b480f22b25f73cceaf24%2Fqiabao%20.jpg?alt=media)

---

#### Using Oasis Wallet to Build Your Wallet

Using Oasis Wallet, you have the flexibility to choose between building an app with an in-app wallet, or a standalone wallet itself. This has its advantages:

- **Ownership**: the dApp/wallet owns the whole experience, with minimal external branding. You'll even be able to use your own OAuth or single sign-on (SSO).
- **Easy to understand:** first-time users don't need the mental overhead of understanding the concept of a "wallet" to use your app.
- **In-app experience:** users can manage their wallets and make transactions within your app, creating a seamless experience specific to your app.

---

#### What Are Oasis Wallet's features?

- **Rapid development:** we provide a complete wallet SDK with functions including transaction abilities, NFT displays and trading, signatures, etc. This reduces development time for you and ensures security for users.
- **A complete UI interface:** Oasis Wallet provides a variety of highly adaptable UI interfaces for different app styles and scenarios.
- **Supports the use of independent functions:** to ensure the continuity of user experience, we support the utilization of a single function in a specific scenario. For example: to transfer funds, the user can call on a "transfer" page rather than having to enter the wallet.

![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-385d25e8118cccf1a16cf85fc4117b410f8329cc%2Fqiabao2%20.jpg?alt=media)

---

#### How can I use Oasis Wallet?

Oasis Wallet comes with simple SDKs that can be integrated in multiple ways to provide the best user experience. At present, it supports the display and trading of tokens/NFTs in the Solana and EVM ecosystems.

#### 👉 Wallet SDK

- [👉 Android]()
- [👉 iOS]()
- 👉 Web: coming soon
- 👉 Unity: coming soon
- 👉 Flutter: coming soon

## SDKs

### Android

#### Add Wallet Service to Your Android Project

##### Prerequisites

Make sure that your project meets the following requirements:

- argets API Level 23 (Marshmallow) or higher
- Uses Android 6.0 or higher
- Uses [Jetpack (AndroidX)]()

##### Create a Oasis Project and App

Before you can add Wallet Service to your Android app, you need to create a Oasis project to connect to your Android app. Visit **Oasis Dashboard** to learn more about Oasis projects and apps.

[👉 Sign up/log in and create your project now]()

##### Add the Wallet Service SDK to your app

Declare them in your module (app-level) Gradle file (usually app/build.gradle).

```
<!-- Kotlin -->
repositories {
    google()
    mavenCentral()
    maven { setUrl("https://jitpack.io") }
    //...
}

dependencies {
    // Oasis Auth Service
    implementation("network.Oasis:auth-service${latest_version}")
    // Oasis Wallet Api
    implementation("network.Oasis:api-service-api${latest_version}")
    // Oasis Wallet GUI, you can remove it if custom GUI.
    implementation("network.Oasis:wallet-service${latest_version}")
    //...
}

<!-- Groovy -->
repositories {
    google()
    mavenCentral()
    maven { setUrl("https://jitpack.io") }
    //...
}

dependencies {
    // Oasis Auth Service
    implementation("network.Oasis:auth-service${latest_version}")
    // Oasis Wallet Api
    implementation("network.Oasis:api-service-api${latest_version}")
    // Oasis Wallet GUI, you can remove it if custom GUI.
    implementation("network.Oasis:wallet-service${latest_version}")
    //...
}
```

The Wallet Service can only be used after a successful log-in with Auth Service.

> Wallet Service depends on Auth Service, you must import Auth Service.
> If you want to receive release updates, subscribe to our GitHub repository.

---

#### Wallet Core Reference

##### Solana Service

**Get the real-time exchange rate of the Solana token**

```
<!-- Swift -->
// native token address is "native", you can add other token mint address.
let addresses: [String] = ["native"]
OasisWalletAPI.getSolanaService().getPrice(by: addresses, currencies: ["usd"]).subscribe { [weak self] result in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Objective-C -->
// native token address is "native", you can add other token mint address.
NSArray *addresses = @[@"native"];
NSArray *currencies = @[@"usd"];
[[OasisWalletAPI getSolanaService] getPriceBy:addresses currencies:currencies successHandler:^(NSArray<TokenPrice *> * tokenPrice) {
    // handle token price
} failureHandler:^(NSError * error) {
    // handle error
}];
```

**Get token list and NFT list by giving an address**

```
<!-- Kotlin -->
// call enhanced method: enhancedGetTokensAndNFTs
//fetch from server、save to db and return
OasisNetwork.solana.getTokensAndNFTs(address)
//get data from db only
OasisNetwork.solana.getTokensAndNFTsFromDB(address)
```

**Get parsed transaction history by giving an address**

```
<!-- Kotlin -->
// call enhanced method: enhancedGetTransactionsByAddress
OasisNetwork.solana.getTransactionsByAddress(address, optBody)
//get trans from db
OasisNetwork.solana.getTransactionsByAddressFromDB(address, optBody)
```

**Serialize unsigned transaction**

```
<!-- Kotlin -->
 // call enhanced method: enhancedSerializeTransaction
val output = OasisNetwork.solana.serializeTransaction(txBody)

//send transaction with Oasis Auth
OasisNetwork.signAndSendTransaction(activity,
output.result.transaction.serialized, callback);
```

**Get Token info list**

```
<!-- Kotlin -->
// get solana chain all SPL token info
OasisNetwork.solana.getTokenList()
```

**Access any standard RPC**

```
<!-- Kotlin -->
// such as getBalance
OasisNetwork.solana.rpc("getBalance",
listOf("8FE27ioQh3T7o22QsYVT5Re8NnHFqmFNbdqwiF3ywuZQ"))
```

##### EVM Service

**Get the real-time exchange rate of the EVM token**

```
<!-- Kotlin -->
val parmas1 = arrayListOf("native")
val parmas2 = arrayListOf("usd")
val rateResultList = OasisNetwork.evm.getPrice(parmas1, parmas2)
```

**Get token list and NFT list by giving an address**

```
<!-- Kotlin -->
// call enhanced method: Oasis_getTokensAndNFTs
//fetch from server、save to db  return result
OasisNetwork.evm.getTokensAndNFTs(address)
//get data from db only
OasisNetwork.evm.getTokensAndNFTsFromDB(address)
```

**Get parsed transaction history by giving an address**

```
<!-- Kotlin -->
// call enhanced method: Oasis_getTransactionsByAddress
OasisNetwork.evm.getTransactionsByAddress(address)
//get data from db only
OasisNetwork.evm.getTransactionsByAddressFromDB(address)
```

**Get suggested GasFees**

```
<!-- Kotlin -->
OasisNetwork.evm.suggestedGasFees()
```

**Get Token info list**

```
<!-- Kotlin -->
// get any EVM chain all token info
OasisNetwork.evm.getTokenList()
```

**Access any standard RPC**

```
<!-- Kotlin -->
// such as eth_estimateGas
OasisNetwork.evm.rpc("eth_estimateGas",listOf(mapOf("from" to "0xXXX...", "to" to "0xXXX...")))
```

**Serialize the data of any contract**

```
<!-- Kotlin -->
OasisNetwork.evm.abiEncodeFunctionCall(params: List<Any>)
OasisNetwork.evm.abiEncodeFunctionCall(contractAddress: String,method: String,params: List<Any>,json: String = "")

//The above two methods work the same.
// 1. The first parameter is contract address
// 2. The second parameter is the name of the method to be called.
//    Currently, we support:'erc20_transfer'、'erc20_approve'、'erc20_transferFrom'、'erc721_safeTransferFrom'、'erc1155_safeTransferrom'
//    or arbitrary method call: 'custom_{methodName}'
//    for example if you need to call mint method, then pass custom_mint as parameter
// 3. The third parameter is the parameter value array of the method to be called, which should correspond to the above method.
// 4. The fourth parameter is optional，an ABI JOSN string
//    For erc20/721/1155 methods we support, this parameter is not needed
//    And if your contract is verified at the chain's scan website, this parameter is not needed
```

**Serialize the data of stardard contracts**

```
<!-- Kotlin -->
// call 'transfer(to, amount)' function in erc20
suspend fun erc20Transfer(){
    val contractAddress =""
    val to=""
    val amount:BigInteger = BigInteger.valueOf(1111)
    OasisNetwork.evm.erc20Transfer(contractAddress,to,amount)
}
// call 'approve(spender, amount)' function in erc20
suspend fun erc20Approve() {
    val contractAddress = ""
    val spender = ""
    val amount = BigInteger.valueOf(1111)
    val result: ResponseBody =
        OasisNetwork.evm.erc20Approve(contractAddress, spender, amount)
}
// call 'transferFrom(from, to, amount)' function in erc20
suspend fun erc20TransferFrom() {
    val contractAddress = ""
    val from = ""
    val to = ""
    val amount = BigInteger.valueOf(1111)
    val result: ResponseBody =
        OasisNetwork.evm.erc20TransferFrom(contractAddress, from, to, amount)
}
// call 'safeTransferFrom(from, to, tokenId)' function in erc721
suspend fun erc721SafeTransferFrom() {
    val contractAddress = ""
    val from = ""
    val to = ""
    val tokenId = ""
    val result: ResponseBody =
        OasisNetwork.evm.erc721SafeTransferFrom(contractAddress, from, to, tokenId)
}
// call 'safeTransferFrom(from, to, id, amount, data)' function in erc1155
suspend fun erc1155SafeTransferFrom() {
    val contractAddress = ""
    val from = ""
    val to = ""
    val id = ""
    val amount = BigInteger.valueOf(1111)
    val data: String;
    OasisNetwork.evm.erc1155SafeTransferFrom(contractAddress, from, to, id, amount, data)
}
```

**Create Transaction**

```
<!-- Kotlin -->
/**
 *
 * from: sender address.
 * to: receiver address or contract address.
 * value: (optional) hex of the value sent with this transaction.
 * contractParams: (optional) call contract function params.
 * type: default value "0x2"(EIP1559), "0x1"(EIP2930), "0x0"(Legacy)
 * nonce: default value "0x0", Oasis auth manage nonce without cancel or speed transaction.
 * gasFeeLevel: default value TransGasFeeMode.medium, transaction gas fee level.
 * action: detault TxAction.normal. if you cancel/speed tracsaction, set the vaule.
 */
val tx = OasisNetwork.evm.createTransaction(from, to, value, contractParams,
     type, nonce, gasFeeLevel, action)

//send transaction with Oasis auth
OasisNetwork.signAndSendTransaction(activity, tx.serialize(), callback)
```

you can call contract function by set contractParams:

- ContractParams.erc20Transform()
- ContractParams.erc20Approve()
- ContractParams.erc20TransferFrom()
- ContractParams.erc721SafeTransferFrom()
- ContractParams.erc1155SafeTransferFrom()
- ContractParams.customAbiEncodeFunctionCall()

**Read Contract**

```
<!-- Kotlin -->
// create tx data
val tx = TxData(null, "0x0", null, from, to ,null, data, OasisNetwork.chainId.toHexString())

//Integer block number, or the string 'latest', 'earliest' or 'pending'
val quantity = "latest"
//call eth_call rpc
val output = OasisNetwork.evm.rpc("eth_call", listOf(tx, quantity))
```

#### Wallet UI Reference

##### Open Wallet

```
<!-- Kotlin  -->
PNRouter.build(RouterPath.Wallet).navigation()

<!-- Java -->
PNRouter.build(RouterPath.Wallet).navigation();
```

navigation()can add parameters, callback to listen to results.

##### Open Send Token

```
<!-- Kotlin  -->
//open send spl token
val params = WalletSendParams(tokenAddress, toAddress?, toAmount?)
PNRouter.build(RouterPath.TokenSend, params).navigation()

//open send default token by chain name
PNRouter.build(RouterPath.TokenSend).navigation()

<!-- Java -->
//open send spl token
WalletSendParams params = new WalletSendParams(tokenAddress, toAddress, toAmount);
PNRouter.build(RouterPath.TokenSend, params).navigation();

//open send default token by chain name
PNRouter.build(RouterPath.TokenSend).navigation();
```

WalletSendParam has three parameters:

1. tokenAddress: token mint address
2. toAddress: receiver address (optional)
3. toAmount: send token amount, token minimum unit (optional)

##### Open Receive Token

Display your address QRCode.

```
<!-- Kotlin  -->
PNRouter.build(RouterPath.TokenReceive).navigation()

<!-- Java -->
PNRouter.build(RouterPath.TokenReceive).navigation();
```

##### Open Transaction Records

```
<!-- Kotlin  -->
//open spl token transaction records
val params = TokenTransactionRecordsParams(tokenAddress)
PNRouter.build(RouterPath.TokenTransactionRecords, params).navigation()

//open default token transaction records by chain name
PNRouter.build(RouterPath.TokenTransactionRecords).navigation()

<!-- Java -->
//open spl token transaction records
TokenTransactionRecordsParams params = new TokenTransactionRecordsParams(tokenAddress);
PNRouter.build(RouterPath.TokenTransactionRecords, params).navigation();

//open default token transaction records by chain name
PNRouter.build(RouterPath.TokenTransactionRecords).navigation();
```

##### Open NFT Details

```
<!-- Kotlin  -->
var params = NftDetailParams("nftMint")
PNRouter.build(RouterPath.NftDetails, params).navigation()


<!-- Java -->
NftDetailParams params = new NftDetailParams("nftMint")
PNRouter.build(RouterPath.NftDetails, params).navigation()
```

### IOS

#### Add Wallet Service to Your iOS Project

##### Prerequisites

- Install the following:
  - Xcode 13.3.1
- Make sure that your project meets the following requirements:
  - Your project must target these platform versions or later:
    - iOS 12

##### Create a Oasis Project and App

Before you can add the Wallet Service to your iOS app, you need to create a Oasis project to connect to your iOS app. Visit [Oasis Dashboard]() to learn more about Oasis projects and apps.

[👉 Sign up/log in and create your project now]()

##### Add the Wallet Service SDK to your app

Wallet Service supports installation with [CocoaPods.]()

Wallet Service's CocoaPods distribution requires Xcode 13.3.1 and CocoaPods 1.10.0 or higher. Here's how to install the Wallet Service using CocoaPods:

1. Create a Podfile if you don't already have one. From the root of your project directory, run the following command:

```
pod init
```

2. To your Podfile, add the Auth Service pods that you want to use in your app.

```
// Oasis Wallet API
pod 'OasisWalletAPI'
//  Oasis Wallet GUI, you can remove it if custom GUI.
pod 'OasisWalletGUI'
```

3. Install the pods, then open your .xcworkspace file to see the project in Xcode:

```
pod install --repo-update

open our-project.xcworkspace
```

4. Add Privacy - Camera Usage Description in your info.plist file, we need to take photos for the QR code.
   The Wallet Service can only be used after a successful log-in with Auth Service.

The Wallet Service can only be used after a successful log-in with Auth Service.

> Wallet GUI depends on Auth Service, you must import Auth Service.

> If you want to receive release updates, subscribe to our GitHub repository.

```
\ARM64 Simulator support
For everyone with an M1 (Silicon) device who want run their projects on a simulator, There are two solutions.
Set arm64 as excluding architecture for Any iOS Simulator SDK. add the following to Podfile
post_install do |installer|
  installer.pods_project.build_configurations.each do |config|
    config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
  end
end
2. Run Xcode with Rosetta.
```

---

#### Wallet Core Reference

##### Solana Service

**Get the real-time exchange rate of the Solana token**

```
<!-- Swift -->
// native token address is "native", you can add other token mint address.
let addresses: [String] = ["native"]
OasisWalletAPI.getSolanaService().getPrice(by: addresses, currencies: ["usd"]).subscribe { [weak self] result in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Object-C -->
// native token address is "native", you can add other token mint address.
NSArray *addresses = @[@"native"];
NSArray *currencies = @[@"usd"];
[[OasisWalletAPI getSolanaService] getPriceBy:addresses currencies:currencies successHandler:^(NSArray<TokenPrice *> * tokenPrice) {
    // handle token price
} failureHandler:^(NSError * error) {
    // handle error
}];
```

**Get the token list and NFT list by giving an address**

```
<!-- Swift -->
// native token address is "native", you can add other token mint address.
let addresses: [String] = ["native"]
OasisWalletAPI.getSolanaService().getPrice(by: addresses, currencies: ["usd"]).subscribe { [weak self] result in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Objecttive-C -->
// native token address is "native", you can add other token mint address.
NSArray *addresses = @[@"native"];
NSArray *currencies = @[@"usd"];
[[OasisWalletAPI getSolanaService] getPriceBy:addresses currencies:currencies successHandler:^(NSArray<TokenPrice *> * tokenPrice) {
    // handle token price
} failureHandler:^(NSError * error) {
    // handle error
}];
```

**Get the parsed transaction history by giving an address**

```
<!-- Swift -->
// address is user public address
let address: String = ""
OasisWalletAPI.getSolanaService().getTransactions(by: address, beforeSignature: nil, untilSignature: nil, limit: 1000).subscribe { [weak self] result in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)

// also get from database
OasisWalletAPI.getSolanaService().getTransactionsFromDB(by: address, beforeSignature: nil, untilSignature: nil, limit: 1000).subscribe { [weak self] result in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Objective-C -->
// address is user public address
NSString *address = @"";
[[OasisWalletAPI getSolanaService] getTransactionsBy:address beforeSignature:nil untilSignature:nil limit:1000 successHandler:^(NSArray<SolanaTransactionModel *> * transactions) {
    // handle transactions
} failureHandler:^(NSError * error) {
    // handle error
}];

// also get from database
[[OasisWalletAPI getSolanaService] getTransactionsFromDBBy:address beforeSignature:nil untilSignature:nil limit:1000 successHandler:^(NSArray<SolanaTransactionModel *> * transactions) {
    // handle transactions
} failureHandler:^(NSError * error) {
    // handle error
}];
```

**Serialize unsigned transaction**

```
<!-- Swift -->
// call enhanced method: enhancedSerializeTransaction
let transactionType: SolanaTransactionType = .transferSol
let sender: String = ""
let receiver: String = ""
let lamports: BInt = BInt(0)
let mintAddress: String? = nil
let payer: String? = nil
OasisWalletAPI.getSolanaService().serializeTransaction(type: transactionType, sender: sender, receiver: receiver, lamports: lamports, mintAddress: mintAddress, payer: payer).subscribe { [weak self] result in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Object-C -->
SolanaTransactionType transactionType = SolanaTransactionTypeTransferSol;
NSString *sender = @"";
NSString *receiver = @"";
NSString *lamports = @"";
NSString *mintAddress = nil;
NSString *payer = nil;

[[OasisWalletAPI getSolanaService] serializeTransactionWithType:transactionType sender:sender receiver:receiver lamports:lamports mintAddress:mintAddress payer:payer successHandler:^(NSString * result) {
    // handle result
} failureHandler:^(NSError * error) {
    // handle error
}];
```

**Get the token info list**

```
<!-- Swift -->
// get solana chain all SPL token info
OasisWalletAPI.getSolanaService().getTokenList().subscribe { [weak self] result in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Object-C -->
// get solana chain all SPL token info
[[OasisWalletAPI getSolanaService] getTokenListWithSuccessHandler:^(NSArray<TokenInfo *> * tokenList) {
    // handle tokenList
} failureHandler:^(NSError * error) {
    // handle error
}]
```

**Access any standard RPC**

```
// such as getBalance
let method: String = "getBalance"
let params: [Encodable?] = ["8FE27ioQh3T7o22QsYVT5Re8NnHFqmFNbdqwiF3ywuZQ"]
OasisWalletAPI.getSolanaService().rpc(method: method, params: params).subscribe { [weak self] result in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)
```

##### EVM Service

**Get the real-time exchange rate of the EVM token**

```
<!-- Swift -->
// native token address is "native", you can add other token contract address.
let addresses = ["native"]
OasisWalletAPI.getEvmService().getPrice(by: addresses, vsCurrencies: ["usd"]).subscribe { [weak self] _ in
guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Objective-C -->
// native token address is "native", you can add other token contract address.
NSArray *addresses = @[@"native"];
NSArray *currencies = @[@"usd"];
[[OasisWalletAPI getSolanaService] getPriceBy:addresses currencies:currencies successHandler:^(NSArray<TokenPrice *> * tokenPrice) {
    // handle token price
} failureHandler:^(NSError * error) {
    // handle error
}];
```

**Get the token list and NFT list by giving an address**

```
<!-- Swift -->
// address is user public address
let address = ""
OasisWalletAPI.getEvmService().getTokensAndNFTs(by: address).subscribe { [weak self] _ in
guard let self = self else { return }
    // handle result
}.disposed(by: bag)

// also get from database
OasisWalletAPI.getEvmService().getTokensAndNFTsFromDB(by: address).subscribe { [weak self] _ in
guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Objective-C -->
// address is user public address
NSString *address = @"";
[[OasisWalletAPI getEvmService] getTokensAndNFTsBy:address successHandler:^(TokenResult * tokenResult) {
    // handle tokenResult
} failureHandler:^(NSError * error) {
    // handle error
}];

// also get from database
[[OasisWalletAPI getEvmService] getTokensAndNFTsFromDBBy:address successHandler:^(TokenResult * tokenResult) {
    // handle tokenResult
} failureHandler:^(NSError * error) {
    // handle error
}];
```

**Get the parsed transaction history by giving an address**

```
<!-- Swift -->
// address is user public address
let address = ""
OasisWalletAPI.getEvmService().getTransactions(by: address).subscribe { [weak self] _ in
guard let self = self else { return }
    // handle result
}.disposed(by: bag)

// also get from database
OasisWalletAPI.getEvmService().getTransactionsFromDB(by: address).subscribe { [weak self] _ in
guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Objective-C -->
// address is user public address
NSString *address = @"";
[[OasisWalletAPI getEvmService] getTransactionsBy:address beforeSignature:nil untilSignature:nil limit:1000 successHandler:^(NSArray<SolanaTransactionModel *> * transactions) {
    // handle transactions
} failureHandler:^(NSError * error) {
    // handle error
}];

// also get from database
[[OasisWalletAPI getEvmService] getTransactionsFromDBBy:address beforeSignature:nil untilSignature:nil limit:1000 successHandler:^(NSArray<SolanaTransactionModel *> * transactions) {
    // handle transactions
} failureHandler:^(NSError * error) {
    // handle error
}];
```

**Get the token info list**

```
<!-- Swift -->
// get any EVM chain all token info
OasisWalletAPI.getEvmService().getTokenList().subscribe { [weak self] _ in
guard let self = self else { return }
    // handle result
}.disposed(by: bag)

<!-- Ojbective-C -->
// get any EVM chain all token info
[[OasisWalletAPI getEvmService] getTokenListWithSuccessHandler:^(NSArray<TokenInfo *> * tokenList) {
    // handle tokenList
} failureHandler:^(NSError * error) {
    // handle error
}]
```

**Access any standard RPC**

```
// such as eth_getBalance
let method = "eth_getBalance"
let params: [Encodable?] = ["0xfe3b557e8fb62b89f4916b721be55ceb828dbd73", "latest"]
OasisWalletAPI.getEvmService().rpc(method: method, params: params).subscribe { [weak self] _ in
    guard let self = self else { return }
    // handle result
}.disposed(by: bag)
```

**Serialize the data of any contract**

```
<!-- Swift -->
// call custom abi function
func customMethodAbiEncode() {
    let contractAddress = ""
    let methodName = ""
    let params: [String] = []
    let abiJsonString = ""
    OasisWalletAPI.getEvmService().abiEncodeFunctionCall(contractAddress: contractAddress, methodName: methodName, params: params, abiJsonString: abiJsonString).subscribe { [weak self] _ in
        guard let self = self else { return }
        // handle result
    }.disposed(by: bag)
}
// call 'transfer(to, amount)' function in erc20
func erc20Transfer() {
    let contractAddress = ""
    let to = ""
    let amount = BInt(1)
    OasisWalletAPI.getEvmService().erc20Transfer(contractAddress: contractAddress, to: to, amount: amount).subscribe { [weak self] _ in
        guard let self = self else { return }
        // handle result
    }.disposed(by: bag)
}
// call 'approve(spender, amount)' function in erc20
func erc20Approve() {
    let contractAddress = ""
    let spender = ""
    let amount = BInt(1)
    OasisWalletAPI.getEvmService().erc20Approve(contractAddress: contractAddress, spender: spender, amount: amount).subscribe { [weak self] _ in
        guard let self = self else { return }
        // handle result
    }.disposed(by: bag)
}
// call 'transferFrom(from, to, amount)' function in erc20
func erc20TransferFrom() {
    let contractAddress = ""
    let from = ""
    let to = ""
    let amount = BInt(1)
    OasisWalletAPI.getEvmService().erc20TransferFrom(contractAddress: contractAddress, from: from, to: to, amount: amount).subscribe { [weak self] _ in
        guard let self = self else { return }
        // handle result
    }.disposed(by: bag)
}
// call 'safeTransferFrom(from, to, tokenId)' function in erc721
func erc721SafeTransferFrom() {
    let contractAddress = ""
    let from = ""
    let to = ""
    let tokenId = ""
    OasisWalletAPI.getEvmService().erc721SafeTransferFrom(contractAddress: contractAddress, from: from, to: to, tokenId: tokenId).subscribe { [weak self] result in
        guard let self = self else { return }
        // handle result
    }.disposed(by: bag)
}
// call 'safeTransferFrom(from, to, id, amount, data)' function in erc1155
func erc1155SafeTransferFrom() {
    let contractAddress = ""
    let from = ""
    let to = ""
    let id = ""
    let amount = BInt(0)
    let data: [UInt8] = []
    OasisWalletAPI.getEvmService().erc1155SafeTransferFrom(contractAddress: contractAddress, from: from, to: to, id: id, amount: amount, data: data).subscribe { [weak self] result in
        guard let self = self else { return }
        // handle result
    }.disposed(by: bag)
}

<!-- Objective-C -->
// call 'transfer(to, amount)' function in erc20
- (void)erc20Transfer {
    NSString *contractAddress = @"";
    NSString *to = @"";
    NSString *amount = @"";
    [[OasisWalletAPI getEvmService] erc20TransferWithContractAddress:contractAddress to:to amount:amount successHandler:^(NSString * result) {
            // handle result
    } failureHandler:^(NSError * error) {
        // handle error
    }];
}

// call 'approve(spender, amount)' function in erc20
- (void)erc20Approve {
    NSString *contractAddress = @"";
    NSString *spender = @"";
    NSString *amount = @"";
    [[OasisWalletAPI getEvmService] erc20ApproveWithContractAddress:contractAddress spender:spender amount:amount successHandler:^(NSString * result) {
            // handle result
    } failureHandler:^(NSError * error) {
        // handle error
    }];
}

// call 'transferFrom(from, to, amount)' function in erc20
- (void)erc20TransferFrom {
    NSString *contractAddress = @"";
    NSString *from = @"";
    NSString *to = @"";
    NSString *amount = @"";

    [[OasisWalletAPI getEvmService] erc20TransferFromContractAddress:contractAddress from:from to:to amount:amount successHandler:^(NSString * result) {
            // handle result
    } failureHandler:^(NSError * error) {
        // handle error
    }];
}

// call 'safeTransferFrom(from, to, tokenId)' function in erc721
- (void)erc721SafeTransferFrom {
    NSString *contractAddress = @"";
    NSString *from = @"";
    NSString *to = @"";
    NSString *tokenId = @"";

    [[OasisWalletAPI getEvmService] erc721SafeTransferFromContractAddress:contractAddress from:from to:to tokenId:tokenId successHandler:^(NSString * result) {
            // handle result
    } failureHandler:^(NSError * error) {
        // handle error
    }];
}

// call 'safeTransferFrom(from, to, id, amount, data)' function in erc1155
- (void)erc1155SafeTransferFrom {
    NSString *contractAddress = @"";
    NSString *from = @"";
    NSString *to = @"";
    NSString *tokenId = @"";
    NSString *amount = @"";
    NSArray *data = [[NSArray alloc] init];

    [[OasisWalletAPI getEvmService] erc1155SafeTransferFromContractAddress:contractAddress from:from to:to id:tokenId amount:amount data:data successHandler:^(NSString * result) {
        // handle result
    } failureHandler:^(NSError * error) {
        // handle error
    }];
}
```

**Create Transaction**

```
<!-- Swift -->
/// Create a transaciton
/// - Parameters:
///   - from: From address
///   - to:If you send a erc20, erc721, erc1155 or interact with a contract, this is the contract address, if you send native, this is receiver address.
///   - contractParams: Acontract parameters
///   - value: Native value, default is nil
///   - type: TxData type, 0x2 is EIP1155, 0x1 is EIP2930, 0x0 is legacy.
///   - nonce: Default value "0x0", Oasis auth manage nonce without cancel or speed transaction.
///   - gasFeeLevel: Default is medium, transaction gas fee level.
///   - action: Default is normal, means send, if you cancel/speed tracsaction, set the vaule
/// - Returns: A transacion
public func createTransaction(from: String, to: String, value: String? = nil, contractParams: ContractParams? = nil, type: String = "0x2", nonce: String = "0x0", gasFeeLevel: GasFeeLevel = .medium, action: Action = .normal) -> Single<String>


func sendNativeEVM() {
    showLoading()
    // firstly, make sure current user has some native token for test there methods
    // send 0.0001 native from self to receiver
    let sender = OasisAuthService.getAddress()
    let receiver = "0xAC6d81182998EA5c196a4424EA6AB250C7eb175b"
    let amount = BDouble(0.0001 * pow(10, 18)).rounded()

    OasisWalletAPI.getEvmService().createTransaction(from: sender, to: receiver, value: amount.toHexString()).flatMap { transaction -> Single<String> in
        print(transaction)
        return OasisAuthService.signAndSendTransaction(transaction)
    }.subscribe { [weak self] result in
        guard let self = self else { return }
        switch result {
        case .failure(let error):
            print(error)
        case .success(let signature):
            print(signature)
        }
        self.hideLoading()
    }.disposed(by: self.bag)
}

func sendErc20Token() {
    showLoading()
    // firstly, make sure current user has some native token and erc20 token for test there methods
    // send 0.0001 erc20 token from self to receiver
    let from = OasisAuthService.getAddress()
    let to = "0xa36085F69e2889c224210F603D836748e7dC0088"
    let amount = BDouble(0.0001 * pow(10, 18)).rounded()
    let contractAddress = "0xa36085F69e2889c224210F603D836748e7dC0088"
    let receiver = "0xAC6d81182998EA5c196a4424EA6AB250C7eb175b"
    let contractParams = ContractParams.erc20Transform(contractAddress: contractAddress, to: receiver, amount: amount)

    // because you want to send erc20 token, interact with contact, 'to' should be the contract address.
    // and value could be nil.
    OasisWalletAPI.getEvmService().createTransaction(from: from, to: to, value: nil, contractParams: contractParams).flatMap { transaction -> Single<String> in
        print(transaction)
        return OasisAuthService.signAndSendTransaction(transaction)
    }.subscribe { [weak self] result in
        guard let self = self else { return }
        switch result {
        case .failure(let error):
            print(error)
        case .success(let signature):
            print(signature)
        }
        self.hideLoading()
    }.disposed(by: self.bag)
}

<!-- Objective-C -->
/// Create a transaciton
/// - Parameters:
///   - from: From address
///   - to:If you send a erc20, erc721, erc1155 or interact with a contract, this is the contract address, if you send native, this is receiver address.
///   - contractParams: Acontract parameters
///   - value: native value, default is nil, expressed as a hex string.
///     for example:
///     100000000000000 is “0x5AF3107A4000”
///     3000 is “0xBB8”
///   - type: TxData type, 0x2 is EIP1155, 0x1 is EIP2930, 0x0 is legacy.
///   - nonce: Default value "0x0", Oasis auth manage nonce without cancel or speed transaction.
///   - gasFeeLevel: Default is medium, transaction gas fee level.
///   - action: Default is normal, means send, if you cancel/speed tracsaction, set the vaule
/// - Returns: A transacion
- (void)createTransactionFrom:(NSString * _Nonnull)from to:(NSString * _Nonnull)to value:(NSString * _Nullable)value contractParams:(ContractParams * _Nullable)contractParams type:(NSString * _Nonnull)type nonce:(NSString * _Nonnull)nonce gasFeeLevel:(enum GasFeeLevel)gasFeeLevel action:(enum Action)action successHandler:(void (^ _Nonnull)(NSString * _Nonnull))successHandler failureHandler:(void (^ _Nonnull)(NSError * _Nonnull))failureHandler;

// Reference cases in github demo.
- (void)sendNativeEVM {
    [self showobjLoading];

    // firstly, make sure current user has some native token for test there methods
    // send 0.0001 native from self to receiver
    // 0.0001 native expressed as a hex string is "0x5AF3107A4000"
    NSString *sender = [OasisAuthService getAddress];
    NSString *receiver = @"0xAC6d81182998EA5c196a4424EA6AB250C7eb175b";
    NSString *amount = @"0x5AF3107A4000";
    __weak APIReferenceViewController *weakSelf = self;
    [[OasisWalletAPI getEvmService] createTransactionFrom:sender to:receiver value:amount contractParams: nil type:@"0x2" nonce:@"0x0" gasFeeLevel:GasFeeLevelMedium action:ActionNormal successHandler:^(NSString * transaction) {
        NSLog(@"%@", transaction);

        [OasisAuthService signAndSendTransaction:transaction successHandler:^(NSString * signature) {
            NSLog(@"%@", signature);
            [weakSelf hideLoading];
            } failureHandler:^(NSError * error) {
                NSLog(@"%@", error);
                [weakSelf hideLoading];
            }];

    } failureHandler:^(NSError * error) {
        NSLog(@"%@", error);
        [weakSelf hideLoading];
    }];
}


- (void)sendErc20Token {
    [self showLoading];

    // firstly, make sure current user has some native token and erc20 token for test there methods
    // send 0.0001 erc20 token from self to receiver
    // 0.0001 erc20 token expressed as a hex string is "0x5AF3107A4000", because the token decimals is 18.
    NSString *from = [OasisAuthService getAddress];
    NSString *to = @"0xa36085F69e2889c224210F603D836748e7dC0088";
    NSString *amount = @"0x5AF3107A4000";
    NSString *contractAddress = @"0xa36085F69e2889c224210F603D836748e7dC0088";
    NSString *receiver = @"0xAC6d81182998EA5c196a4424EA6AB250C7eb175b";
    ContractParams *contractParams = [ContractParams erc20TransferWithContractAddress:contractAddress to:receiver amount:amount];

    // because you want to send erc20 token, interact with contact, 'to' should be the contract address.
    // and value could be nil.
    __weak APIReferenceViewController *weakSelf = self;
    [[OasisWalletAPI getEvmService] createTransactionFrom:from to:to value:nil contractParams:contractParams type:@"0x2" nonce:@"0x0" gasFeeLevel:GasFeeLevelMedium action:ActionNormal successHandler:^(NSString * transaction) {
            NSLog(@"%@", transaction);
            [OasisAuthService signAndSendTransaction:transaction successHandler:^(NSString * signature) {
                NSLog(@"%@", signature);
                [weakSelf hideLoading];
                } failureHandler:^(NSError * error) {
                    NSLog(@"%@", error);
                    [weakSelf hideLoading];
                }];
        } failureHandler:^(NSError * error) {
            NSLog(@"%@", error);
            [weakSelf hideLoading];
        }];
}
```

You can create contractParams object by these ContractParamsstatic methods

- ContractParams.erc20Transfer()
- ContractParams.erc20Approve()
- ContractParams.erc20TransferFrom()
- ContractParams.erc721SafeTransferFrom()
- ContractParams.erc1155SafeTransferFrom()
- ContractParams.customAbiEncodeFunctionCall()

**Read Contract**

```
// Reference cases in github demo.
func readContract() {
    let from = OasisAuthService.getAddress()
    let to = "0xAC6d81182998EA5c196a4424EA6AB250C7eb175b"
    let data = "0x"
    let txData = ReadContractData(from: from, to: to, data: data)

    // Integer block number, or the string 'latest', 'earliest' or 'pending'
    let quantity = "latest"

    OasisWalletAPI.getEvmService().rpc(method: "eth_call", params: [txData, quantity]).subscribe { response in
        print(response)
    }.disposed(by: self.bag)
}

struct ReadContractData: Codable {
    let from: String
    let to: String
    let data: String
}
```

#### Wallet UI Reference

##### Open Wallet

```
<!-- Swift -->
PNRouter.navigator(routhPath: .wallet)

<!-- Objective-C -->
[PNRouter navigatorWalletWithDisplay:DisplayToken];
```

##### Open Send Token

```
<!-- Swift -->
//open send token
let tokenSendConfig = TokenSendConfig(tokenAddress: nil, toAddress: nil, amount: nil)
PNRouter.navigatorTokenSend(tokenSendConfig: tokenSendConfig)

//open send default token by chain name
PNRouter.navigator(routhPath: .tokenSend)

<!-- Objective-C -->
//open send token
TokenSendConfig *config = [[TokenSendConfig alloc] initWithTokenAddress:nil toAddress:nil amountString:nil];
[PNRouter navigatorTokenSendWithTokenSendConfig:config];
```

TokenSendConfig has three parameters:

- tokenAddress: token mint address(optional)
- toAddress: receiver address (optional)
- amount: send token amount, token minimum unit (optional)

##### Open Receive Token

Display your address QR code

```
<!-- Swift -->
PNRouter.navigator(routhPath: .tokenReceive)

<!-- Objective-C -->
TokenReceiveConfig *config = [[TokenReceiveConfig alloc] initWithTokenAddress:nil];
[PNRouter navigatorTokenReceiveWithTokenReceiveConfig:config];
```

##### Open Transaction Records

```
<!-- Swift -->
// open token transaction records
let tokenTransactionRecordsConfig = TokenTransactionRecordsConfig(tokenAddress: tokenAddress)
PNRouter.navigatorTokenTransactionRecords(tokenTransactionRecordsConfig: tokenTransactionRecordsConfig)

//open default token transaction records by chain name
PNRouter.navigator(routhPath: .tokenTransactionRecords)

<!-- Objective-C -->
// open token transaction records
NSString *tokenAddress = @"";
TokenTransactionRecordsConfig *config = [[TokenTransactionRecordsConfig alloc] initWithTokenAddress:tokenAddress];
[PNRouter navigatorTokenTransactionRecordsWithTokenTransactionRecordsConfig:config];
```

##### Open NFT Details

```
<!-- Swift -->
// open nft details page
// in solana, tokenId should be an empty string, address is the nft mint address.
// in evm, address is the nft contract address.
let address = ""
let tokenId = ""
let config = NFTDetailsConfig(address: address, tokenId: tokenId)
PNRouter.navigatorNFTDetails(nftDetailsConfig: config)

<!-- Objective-C -->
// open nft details page
// in solana, tokenId should be an empty string, address is the nft mint address.
// in evm, address is the nft contract address.
NSString *mintAddress = @"";
NSString *tokenId = @"";
NFTDetailsConfig *config = [[NFTDetailsConfig alloc] initWithAddress:mintAddress tokenId:tokenId];
[PNRouter navigatorNFTDetailsWithNftDetailsConfig:config];
```
