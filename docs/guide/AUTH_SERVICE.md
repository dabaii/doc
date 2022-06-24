# AUTH SERVICE

## Introduction

Oasis Meta also provides MPC (Multi-Party Computation)-based threshold signatures.

---

#### What is Oasis Auth？

Oasis Auth is a pluggable auth infrastructure for Web3.0 wallets and applications. We support mobile number and email login, providing users with a simple operating experience. Their login account is then associated with a blockchain wallet, which is secured with a "Threshold Signatures vault".

![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-5cbaec450170089afd937e45445f06960137237b%2F%E9%A3%9E%E4%B9%A620220513-175911.gif?alt=media)

---

#### What does Oasis Auth do?

By integrating Oasis Auth into your project, your users can experience the following services:

- **Email/Mobile number logins and passwordless flows:** users can register with a mobile phone number or email address, then log in using a verification code. This shortens the login process while maintaining a secure login. In the future, mainstream social media logins will also be made available.
- **Provide MPC (Multi-Party Computation)-based threshold signatures:** With threshold signatures, each of the parties creates a key independently. Then, they forge the vault’s lock together, in a modular way, in which each party shapes a part of the lock that corresponds to its key.

![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-06f303a354ea6fcbe481f17d76c6d11666651243%2F952qs-wk47v.gif?alt=media)

---

#### What Are Oasis Auth's features?

- **Speedy logins:** the log-in process is no different from that of a Web2.0 login, which greatly lowers the barriers to entry and improves user experience.
- **Non-custodial private key infrastructure:** the user is always in control of ownership and access to their cryptographic key pair. Login services only ever have access to one share, and it is therefore impossible for the provider to retrieve the user's private key on their own.
- **Whitelabel:** customize Oasis Auth's UI so that it blends directly into your application.
- **Signature:** a full signature service.

![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-ce5dc40f5a6c9c8e0a0e01f646c5fcb06dad3cd8%2Fsign.jpg?alt=media)
Approve & Sign

---

#### How Do I Integrate Oasis Auth?

Oasis Auth comes with simple SDKs that can be integrated in multiple ways to provide the best experience for your users. We support all the available chains out there, with special providers available for EVM and Solana.

#### 👉 Auth SDKs

- [👉 Server API]()
- [👉 Android]()
- [👉 iOS]()
- [👉 Web]()
- 👉 Unity: coming soon
- 👉 Flutter: coming soon

## SDKs

### Server API

The Server API provides useful APIs to support application use. It follows a JSON-RPC 2.0 standard.

---

#### Endpoint

The Server RPC URL is: https://api.Oasis.network/server/rpc

---

#### Authentication

[👉 Check Authentication]()

---

#### Methods

##### getUserInfo

> Obtain user info by uuid and token

Use this API to integrate Oasis Auth into your user ID system

**Parameters:**

- <\[string]> - user uuid
- <\[string]> - user token

**Results:**

- <\[object]> - a JSON object array containing:
  - uuid: \<string>, user uuid
  - phone: \<string>, user phone number
  - email: \<string>, user email
  - wallets: \<[object]>, user wallets with public address

**Request example:**

- Javascript

```
const axios = require("axios");

(async () => {
  const response = await axios.post(
    "https://api.Oasis.network/server/rpc",
    {
      jsonrpc: "2.0",
      id: 0,
      method: "getUserInfo",
      params: ["Oasis Auth User Uuid", "Oasis Auth User Token"],
    },
    {
      auth: {
        username: "Your Project Id",
        password: "Your Project Server Key",
      },
    }
  );

  console.log(response.data);
})();
```

- Curl

```
 curl 'https://api.Oasis.network/server/rpc' \
--header 'Authorization: Basic YmEwNTA5ZTctZThiYi00MzY2LTg5YjctYjM5ZjAyYmNkMDg0OmNnZjE4YXNMbG9zSkJzZlZXbWxvNHNuZ2lFRVZzc1gzNHFlTUxmZzQ=' \
-X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":0,"method":"getUserInfo","params":["Oasis Auth User Uuid", "Oasis Auth User Token"]}
'
```

[👉 Sign up/log in and create your project now]()

**Response example:**

```
    {
        "jsonrpc": "2.0",
        "id": 1,
        "result": {
            "uuid": "2d7b1ff2-0791-4fd2-a26e-16fbcaefdf8a",
            "phone": null,
            "email": "U1gphy1mnU@Oasis.network",
            "createdAt": "2022-06-08T07:47:54.000Z",
            "updatedAt": "2022-06-08T07:47:55.000Z",
            "wallets": [
                {
                    "chain": "evm_chain",
                    "publicAddress": "0x6D5fCEd0C74F22a1B145ef48B25527Ce9BF829bF"
                },
                {
                    "chain": "solana",
                    "publicAddress": "3k61BRDo253SF1XuknbBSUh8FvFqJkcMYzmZuvMMhCC1"
                }
            ]
        }
    }
```

---

#### Errors

[👉 Check RPC errors]()

### Android

#### Add Auth Service to Your Android Project

##### Prerequisites

- Make sure that your project meets the following requirements:
  - Targets API Level 23 (Marshmallow) or higher
  - Uses Android 6.0 or higher
  - Uses [Jetpack (AndroidX)]()

##### Create a Oasis Project and App

Before you can add Auth Service to your Android app, you need to create a Oasis project to connect to your Android app. Visit [Oasis Dashboard]() to learn more about Oasis projects and apps.

[👉 Sign up/log in and create your project now]()

##### Add the Auth Service SDK to Your App

Declare them in your module (app-level) Gradle file (usually app/build.gradle).

- Kotlin

```
    repositories {
        google()
        mavenCentral()
        maven { setUrl("https://jitpack.io") }
        //...
    }
    dependencies {
        // Oasis Auth Service
        implementation("network.Oasis:auth-service${latest_version}")
        //...
    }
```

- Groovy

```
    repositories {
        google()
        mavenCentral()
        maven { url "https://jitpack.io" }
        //...
    }
    dependencies {
        // Oasis Auth Service
        implementation 'network.Oasis:auth-service${latest_version}'
        //...
    }
```

```
If you want to receive release updates, subscribe to our GitHub repository.
```

##### Add Configuration File

Declare them in you app AndroidManifest.xml (usually app/src/main/AndroidManifest.xml).

```
<application>
    <!--   Oasis Meta config start     -->
    <activity
            android:name="com.Oasis.network.controller.WebActivity"
            android:exported="true"
            android:launchMode="singleTask"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
            >
        <intent-filter>
            <data android:scheme="pn${pn_app_id}" />

            <action android:name="android.intent.action.VIEW" />

            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
        </intent-filter>
    </activity>

    <meta-data
            android:name="Oasis.network.project_id"
            android:value="${pn_project_id}"
            />
    <meta-data
            android:name="Oasis.network.project_client_key"
            android:value="${pn_project_client_key}"
            />
    <meta-data
            android:name="Oasis.network.app_id"
            android:value="${pn_app_id}"
            />
    <!--   Oasis Meta config end     -->
</application>

Replace pn_project_id, pn_project_client_key, pn_app_id with the new values created in your Dashboard.
```

---

#### API Reference

##### Initialize the SDK

Initialize the SDK by calling the OasisNetwork.init()method, passing the method a context. Do this as soon as your app starts, like in the onCreate()method of your Application.

- Kotlin

```
import com.Oasis.network.ChainId
import com.Oasis.network.ChainName
import com.Oasis.network.Env
import com.Oasis.network.OasisNetwork

class App : Application() {
    override fun onCreate() {
        super.onCreate()
        //init Oasis SDK for solana chain
        OasisNetwork.init(this, Env.DEV, SolanaChain(SolanaChainId.Mainnet))

        //init wallet service if you use wallet-service
        OasisWallet.init(this)
    }
}
```

- Javs

```
import com.Oasis.network.ChainId;
import com.Oasis.network.ChainName;
import com.Oasis.network.Env;
import com.Oasis.network.OasisNetwork;

public class App extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        //init Oasis SDK with solana chain info
        OasisNetwork.init(this, Env.DEV, new SolanaChain(SolanaChainId.Mainnet));

        //init wallet service if you use wallet-service
        OasisWallet.init(this);
    }
}
```

Oasis Meta support Solana and EVM chains, you can init with below chain info:

- EthereumChain
- BscChain
- PolygonChain
- AvalancheChain
- MoonbeamChain
- MoonriverChain
- HecoChain
- FantomChain
- ArbitrumChain
- HarmonyChain
- AuroraChain

##### Switch ChainInfo

```
<!-- Kotlin -->
OasisNetwork.setChainInfo(chainInfo: ChainInfo)

<!-- Java -->
OasisNetwork.setChainInfo(chainInfo: ChainInfo)
```

##### Login.

To auth login with Oasis, call OasisNetwork.login(...)with activity and callback. You can log in with your email or phone number by changing the loginType parameter. Your wallet is created when you log in successfully for the first time.

```
<!-- Kotlin -->
OasisNetwork.login(activity, LoginType.EMAIL, object : WebServiceCallback<LoginOutput> {
    override fun success(output: LoginOutput) {
        //login success, return user info in output
    }

    override fun failure(errMsg: WebServiceError) {
        //handle error
    }
})

<!-- Java -->
OasisNetwork.login(activity, LoginType.EMAIL, new WebServiceCallback<LoginOutput>() {
    @Override
    public void success(@NonNull LoginOutput output) {
        //login success, return user info in output
    }

    @Override
    public void failure(@NonNull WebServiceError errMsg) {
        //handle err
    }
});

warning: After log-in success, you can obtain user info by calling OasisNetwork.getUserInfo()
```

##### Logout

The SDK will delete users' account information in cache.

```
<!-- Kotlin -->
OasisNetwork.logout(activity, object : WebServiceCallback<WebOutput> {
    override fun success(output: WebOutput) {
        //logout success
    }

    override fun failure(errMsg: WebServiceError) {
        //handle error
    }
})

<!-- Java -->

OasisNetwork.logout(this, new WebServiceCallback<WebOutput>() {
    @Override
    public void success(@NonNull WebOutput output) {
        //logout success
    }

    @Override
    public void failure(@NonNull WebServiceError errMsg) {
        //handle error
    }
});
```

##### Is User Logged In

```
<!-- Kotlin -->
OasisNetwork.isLogin()

<!-- Java -->
OasisNetworkAuth.isLogin(OasisNetwork.INSTANCE)
```

##### Signatures

Use Oasis SDK to sign a transaction or message. The SDK provides three methods for signing:

1. signAndSendTransaction: sign and send the transaction with Oasis Node, then return the signature.
2. signTransaction: sign transaction, return signed message, only Solana blockchain support it.
3. signMessage: sign message, return signed message.
4. signTypedData : sign typed data，only EVM blockchain support it.

```
<!-- Kotlin -->
//solana transaction: base58 string.
//evm transcation:'0x' prefixed hex string.
OasisNetwork.signAndSendTransaction(activity, transaction, object : WebServiceCallback<SignOutput>{
    override fun success(output: SignOutput) {
        //sign and send transaction success
    }

    override fun failure(errMsg: WebServiceError) {
        // handle error
    }
})


//solana transaction: base58 string. evm not support this method.
OasisNetwork.signTransaction(activity, transaction, object : WebServiceCallback<SignOutput>{
    override fun success(output: SignOutput) {
        //sign transaction success
    }

    override fun failure(errMsg: WebServiceError) {
        // handle error
    }
})


//solana message: any string.
//evm message: '0x' prefixed hex string, use 'personal_sign' to sign.
OasisNetwork.signMessage(activity, message, object : WebServiceCallback<SignOutput>{
    override fun success(output: SignOutput) {
        //sign success
    }

    override fun failure(errMsg: WebServiceError) {
        // handle error
    }
})

//sign typed data, only evm support this method.
//message: '0x' prefixed hex string.
OasisNetwork.signTypedData(activity, message, version, object : WebServiceCallback<SignOutput>{
    override fun success(output: SignOutput) {
        //sign success
    }

    override fun failure(errMsg: WebServiceError) {
        // handle error
    }
})


<!-- Java -->
//transaction: base58 string
OasisNetwork.signAndSendTransaction(activity, transaction, new WebServiceCallback<SignOutput>() {

    @Override
    public void success(@NonNull SignOutput output) {
        //sign and send transaction success
    }

    @Override
    public void failure(@NonNull WebServiceError errMsg) {
        //handle error
    }
});


//transaction: base58 string
OasisNetwork.signTransaction(activity, transaction, new WebServiceCallback<SignOutput>() {

    @Override
    public void success(@NonNull SignOutput output) {
        //sign transaction success
    }

    @Override
    public void failure(@NonNull WebServiceError errMsg) {
        //handle error
    }
});


//sign any string
OasisNetwork.signMessage(activity, message, new WebServiceCallback<SignOutput>() {

    @Override
    public void success(@NonNull SignOutput output) {
        //sign success
    }

    @Override
    public void failure(@NonNull WebServiceError errMsg) {
        //handle error
    }
});
```

You can create `transaction` with TxData.There's an easy way to do this with [Wallet Service]()

##### Error

`WebServiceError` contains error details. You can check the information by printing the message attribute.

### iOS

#### Add Auth Service to Your iOS Project

##### Prerequisites

- Install the following:
  - Xcode 13.3.1
- Make sure that your project meets the following requirements:
  - Your project must target these platform versions or later:
    - iOS 12

##### Create a Oasis Project and App

Before you can add our Auth Service to your iOS app, you need to create a Oasis project to connect to your iOS app. Visit [Oasis Dashboard]() to learn more about Oasis projects and apps.

[👉 Sign up/log in and create your project now]()

##### Add the Auth Service SDK to Your App

Auth Service supports installation with [CocoaPods.]()

Auth Service's CocoaPods distribution requires Xcode 13.3.1 and CocoaPods 1.10.0 or higher. Here's how to install the Auth Service using CocoaPods:

1. Create a Podfile if you don't already have one. From the root of your project directory, run the following command:

```
    pod init
```

2. To your Podfile, add the Auth Service pods that you want to use in your app:

```
pod 'OasisAuthService'
```

3. Install the pods, then open your .xcworkspace file to see the project in Xcode:

```
pod install --repo-update
open your-project.xcworkspace
```

> If you want to receive release updates, subscribe to our GitHub repository.

**ARM64 Simulator support**

```
For everyone with an M1 (Silicon) device who want run their projects on a simulator, There are two solutions.
Set arm64 as excluding architecture for Any iOS Simulator SDK. add the following to Podfile
post_install do |installer|
  installer.pods_project.build_configurations.each do |config|
    config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
  end
end
1. Run Xcode with Rosetta.
```

##### Initialize Auth Service in your app

The final step is to add an initialization code to your application. You may have already done this as part of adding the Auth Service to your app. If you are using a [quickstart sample project](), this has been done for you.

1. Create a **OasisNetwork-Info.plist** into the root of your Xcode project
2. Copy the following text into this file:

```
<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        <key>PROJECT_UUID</key>
        <string>YOUR_PROJECT_UUID</string>
        <key>PROJECT_CLIENT_KEY</key>
        <string>YOUR_PROJECT_CLIENT_KEY</string>
        <key>PROJECT_APP_UUID</key>
        <string>YOUR_PROJECT_APP_UUID</string>
    </dict>
</plist>
```

3. Replace YOUR_PROJECT_UUID, YOUR_PROJECT_CLIENT_KEY, YOUR_PROJECT_APP_UUID with the new values created in your Dashboard
4. Import the OasisNetwork module in your UIApplicationDelegate

```
import OasisNetwork
```

5. Initialize OasisNetwork service, typically in your app's application:didFinishLaunchingWithOptions: method:

```
    let chainName = OasisNetwork.ChainName.ethereum(.mainnet)
    let devEnv = OasisNetwork.DevEnvironment.debug
    let config = OasisNetworkConfiguration(chainName: chainName, devEnv: devEnv)
    OasisNetwork.initialize(config: config)
```

6. Add the scheme URL handle in your app's application(\_:open:options:) method

```
return OasisNetwork.handleUrl(url)
```

7. Config your app scheme URL, select your app target in the info section, click to add the URL type, and pass your scheme in URL Schemes

- Your scheme URL should be "pn" + your project app uuid.
- For example, if you project app id is "63bfa427-cf5f-4742-9ff1-e8f5a1b9828f", your scheme URL is "pn63bfa427-cf5f-4742-9ff1-e8f5a1b9828f".

![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-94acbbba189a11a7e1d58d5513f6bc48cc6b7bc3%2Fimage.png?alt=media)

> You can dynamically switch the chainEnv by calling the OasisNetwork.setChainName() method. devEnv needs to be modified to be DevEnvironment.production for release.

---

#### API Reference

##### Login

To auth login with Oasis, call OasisNetwork.login(...)and subscribe. You can log in with your email or phone number by changing the LoginType parameter. Your wallet is created when you log in successfully for the first time.

```
<!-- Swift -->
OasisAuthService.login(type: .email).subscribe { [weak self] result in
    guard let self = self else { return }
    switch result {
    case .failure(let error):
        // handle error
    case .success(let userinfo):
        // login success, handle userinfo
    }
}.disposed(by: bag)

<!-- Objective-C -->
[OasisAuthService loginWithType:LoginTypeEmail successHandler:^(UserInfo * userInfo) {
    NSLog(@"%@", userInfo);
    [self showLogin:NO];
} failureHandler:^(NSError * error) {
    NSLog(@"%@", error);
}];
```

> After log-in success, you can obtain user info by calling OasisNetwork.getUserInfo()

##### Is User Logged In

Check that the user is logged in.

```
<!-- Swift -->
OasisAuthService.isUserLoggedIn()

Objective-C
[OasisAuthService isUserLoggedIn]
```

##### Logout

The SDK will delete users' account information in cache.

```
<!-- Swift -->
OasisAuthService.logout().subscribe { [weak self] result in
    guard let self = self else { return }
    switch result {
    case .failure(let error):
        // handle error
    case .success(let success):
        // logout success
    }
}.disposed(by: bag)

<!-- Objective-C -->
[OasisAuthService logoutWithSuccessHandler:^(NSString * result) {
    NSLog(@"%@", result);
    [self showLogin:YES];
} failureHandler:^(NSError * error) {
    NSLog(@"%@", error);
}];
```

##### Get userinfo, publicKey, address after login.

```
<!-- Swift -->
OasisAuthService.getUserInfo()
OasisAuthService.getPublicKey()
OasisAuthService.getAddress()

<!-- Objective-C -->
[OasisAuthService getUserInfo];
[OasisAuthService getAddress];
[OasisAuthService getPublicKey];
```

##### Signatures

Use the Oasis SDK to sign a transaction or message. The SDK provides three methods for signing:

1. signAndSendTransaction: sign and send the transaction with Oasis Node, then return the signature. support both solana and evm.
2. signTransaction: sign transaction, return signed message, only support solana.
3. signMessage: sign message, return signed message, support both solana and evm.
4. signTypedData: sign typed data, support v1, v3, v4 typed data, return signed message, only support evm.

```
<!-- Swift -->
//transaction: request base58 string in solana, or hex string in evm
OasisAuthService.signAndSendTransaction(transaction).subscribe {  [weak self] result in
    guard let self = self else { return }
    switch result {
    case .failure(let error):
        // handle error
    case .success(let signature):
        // handle signature
    }
}.disposed(by: bag)

//transaction: request base58 string in solana, not support evm
OasisAuthService.signtransaction(transaction).subscribe {  [weak self] result in
    guard let self = self else { return }
    switch result {
    case .failure(let error):
        // handle error
    case .success(let signedMessage):
        // handle signed message
    }
}.disposed(by: bag)

//sign string, any string in solana, request hex string in evm
OasisAuthService.signMessage(message).subscribe {  [weak self] result in
    guard let self = self else { return }
    switch result {
    case .failure(let error):
        // handle error
    case .success(let signedMessage):
        // handle signed message
    }
}.disposed(by: bag)


// sign typed data, request hex string in evm, not support solana.
\// support v1, v3, v4 typed data
OasisAuthService.signTypedData(message, version: .v1).subscribe { [weak self] result in
    switch result {
    case .failure(let error):
        // handle error
    case .success(let signed):
        // handle signed message
    }
}.disposed(by: bag)

<!-- Objective-C -->
//transaction: request base58 string in solana, or hex string in evm
[OasisAuthService signAndSendTransaction:transaction successHandler:^(NSString * signature) {
    NSLog(@"%@", signature);
} failureHandler:^(NSError * error) {
    NSLog(@"%@", error);
}];

 //transaction: request base58 string in solana, not support evm
[OasisAuthService signTransaction:transaction successHandler:^(NSString * signedTransaction) {
    NSLog(@"%@", signedTransaction);
} failureHandler:^(NSError * error) {
    NSLog(@"%@", error);
}];

//sign string, any string in solana, request hex string in evm
[OasisAuthService signMessage:message successHandler:^(NSString * signedMessage) {
    NSLog(@"%@", signedMessage);
} failureHandler:^(NSError * error) {
    NSLog(@"%@", error);
}];

// sign typed data, request hex string in evm, not support solana.
// support v1, v3, v4 typed data
[OasisAuthService signMessage:message successHandler:^(NSString * signedMessage) {
    NSLog(@"%@", signedMessage);
} failureHandler:^(NSError * error) {
    NSLog(@"%@", error);
}];
```

You can create transaction with TxData.There's an easy way to do this with [Wallet Service]()

##### Error

OasisNetwork.Error contains error details. The error will be logged in debug DevEnvironment.

### Web

This documentation for the Oasis Meta Javascript SDK will get you started in minutes!

Oasis Meta SDK allows you to easily integrate your app with the EVM blockchain, whether you already have a dApp integrated with web3 or are starting from scratch. Oasis Meta provides a smooth and delightful experience for both you and your app's users.

---

#### Demo

Live Demo: [https://web-demo.Oasis.network/]()

Github: [https://github.com/Oasis-Network/Oasis-web-demo]()

---

#### Get Started

##### Step 1: Include Oasis Meta SDK Script

Download Oasis Meta SDK to your project via NPM

```
npm i --save @Oasis-network/provider
```

##### Step 2: Setup Developer API Key

Before you can add Auth Service to your app, you need to create a Oasis project to connect to your app. Visit [Oasis Dashboard]() to learn more about Oasis projects and apps.

[👉 Sign up/log in and create your project now]()

```
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({
  projectId: "xx",
  clientKey: "xx",
  appId: "xx",
  chainName: "ethereum",
  chainId: 42,
});

window.web3 = new Web3(pn.getProvider());
window.web3.currentProvider.isOasisNetwork // => true
```

Your first Oasis Meta dApp! 🎉 You can implement web3 functionalities just like how you would normally with MetaMask.

---

#### Web3 Integration

##### Network Configuration

```
import { OasisNetwork } from "@Oasis-network/provider";

//ethereum Kovan test net
const pn = new OasisNetwork({
  projectId: "xx",
  clientKey: "xx",
  appId: "xx",
  chainName: "ethereum",
  chainId: 42, //mainnet 1
});

//bsc testnet
const pn = new OasisNetwork({
  projectId: "xx",
  clientKey: "xx",
  appId: "xx",
  chainName: "bsc",
  chainId: 97, // mainnet 56
});

//...
```

Oasis support more [EVM Chains.]()

---

##### [👉 ChainId And ChainName Configs]()

##### Get User Account

In order for web3 to work and grab the end-users' Ethereum wallet addresses, the users have to login first (similar to unlocking account in MetaMask). You can simply trigger the login for users with the web3 function call below

```
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

// Request user login if needed, returns current user account address
web3.currentProvider.enable();
```

User login modal can also be triggered through web3 accounts and coinbase functions.

```
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

// Async functions that triggers login modal, if user not already logged in
web3.eth.getAccounts((error, accounts) => {
  if (error) throw error;
  console.log(accounts); // ['0x...']
});
web3.eth.getCoinbase((error, coinbase) => {
  if (error) throw error;
  console.log(coinbase); // '0x...'
});
```

A modal will open to ask users to sign up for an account or login with their mobile phone number or email.

##### Send Transaction

If you have replaced your web3 provider with Oasis Meta provider, nothing needs to be changed for web3 send Ether transactions to continue working.

The Oasis Meta X modal will pop open and ask users to confirm their transaction once this web3 function is called on the client-side.

```
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

const txnParams = {
    from: "0xXX",
    to: toAddress,
    value: sendValue
};
window.web3.eth.sendTransaction(txnParams, (error, txnHash) => {
    if (error) throw error;
    console.log(txnHash);
});
```

##### User Signing

This is a relatively advanced use case. If you use the signed typed data JSONRPC endpoint, Oasis Meta will support this as well.

```
<!-- Personal Sign -->
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";
import { Buffer } from "buffer";
import { bufferToHex, toChecksumAddress } from "ethereumjs-util";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

const text = "Hello Oasis Meta!";
const accounts = await window.web3.eth.getAccounts();
const from = accounts[0];
const msg = bufferToHex(Buffer.from(text, "utf8"));
const params = [msg, from];
const method = "personal_sign";

window.web3.currentProvider
  .request({
    method,
    params,
    from,
  })
  .then((result) => {
    console.log("personal_sign", result);
  })
  .catch((error) => {
    console.error("personal_sign", error);
  });


<!-- Sign Typed Data v1 -->
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());


const accounts = await window.web3.eth.getAccounts();
const from = accounts[0];
const msg = [
    {
      type: "string",
      name: "fullName",
      value: "John Doe",
    },
    {
      type: "uint32",
      name: "userId",
      value: "1234",
    },
  ];
const params = [msg, from];
const method = "eth_signTypedData_v1";

window.web3.currentProvider
  .request({
    method,
    params,
    from,
  })
  .then((result) => {
    console.log("signTypedData result", result);
  })
  .catch((err) => {
    console.log("signTypedData error", err);
  });


<!-- Sign Typed Data v3 -->
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

const accounts = await window.web3.eth.getAccounts();
const from = accounts[0];
const payload = {
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "verifyingContract", type: "address" },
      ],
      Person: [
        { name: "name", type: "string" },
        { name: "wallet", type: "address" },
      ],
      Mail: [
        { name: "from", type: "Person" },
        { name: "to", type: "Person" },
        { name: "contents", type: "string" },
      ],
    },
    primaryType: "Mail",
    domain: {
      name: "Ether Mail",
      version: "1",
      verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    },
    message: {
      from: {
        name: "Cow",
        wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
      },
      to: {
        name: "Bob",
        wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
      },
      contents: "Hello, Bob!",
    },
  };
const params = [from, payload];
const method = "eth_signTypedData_v3";

window.web3.currentProvider
  .request({
    method,
    params,
    from,
  })
  .then((result) => {
    console.log("signTypedData_v3 result", result);
  })
  .catch((err) => {
    console.log("signTypedData_v3 error", err);
  });


<!-- Sign Typed Data v4 -->
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

const accounts = await window.web3.eth.getAccounts();
const from = accounts[0];
const payload = {
    domain: {
      name: "Ether Mail",
      verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
      version: "1",
    },
    message: {
      contents: "Hello, Bob!",
      from: {
        name: "Cow",
        wallets: [
          "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
          "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF",
        ],
      },
      to: [
        {
          name: "Bob",
          wallets: [
            "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
            "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",
            "0xB0B0b0b0b0b0B000000000000000000000000000",
          ],
        },
      ],
    },
    primaryType: "Mail",
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "verifyingContract", type: "address" },
      ],
      Group: [
        { name: "name", type: "string" },
        { name: "members", type: "Person[]" },
      ],
      Mail: [
        { name: "from", type: "Person" },
        { name: "to", type: "Person[]" },
        { name: "contents", type: "string" },
      ],
      Person: [
        { name: "name", type: "string" },
        { name: "wallets", type: "address[]" },
      ],
    },
  };
const params = [from, payload];
const method = "eth_signTypedData_v4";

window.web3.currentProvider
  .request({
    method,
    params,
    from,
  })
  .then((result) => {
    console.log("signTypedData_v4 result", result);
  })
  .catch((err) => {
    console.log("signTypedData_v4 error", err);
  });
```

##### Oasis Meta Native

**Login**

```
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

pn.auth.login().then(accounts => {
    console.log("login", accounts[0]);
})
```

**Logout**

```
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

pn.auth.logout().then(() => {
    console.log("logout");
})
```

**Is User Logged In**

```
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

//check user logged
pn.auth.isLogin()
```

**Get User Info**

```
import { OasisNetwork } from "@Oasis-network/provider";
import Web3 from "web3";

const pn = new OasisNetwork({...});
window.web3 = new Web3(pn.getProvider());

//get user info(token/address/uuid)
const info = pn.auth.userInfo();
```
