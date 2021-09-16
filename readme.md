# ディレクトリ作成・Node.jsプロジェクトとして初期化
<!-- <img src="home.png"> -->

# "/"ディレクトリとcontractsディレクトリ直下にnode_modulesをインストールしてください
# contractsディレクトリ直下に.envを作成してください
```bash
cd contrasts
touch .env
```
- INFURA_PROJECT_ID=*****
- PRIVATE_KEY=****

> 参考資料:https://zenn.dev/cauchye/articles/ethereum-contract-helloworld-local  

# Node.jsプロジェクトを作成

> 参考資料:https://zenn.dev/cauchye/articles/ethereum-contract-helloworld-local   

```bash
# package.jsonを生成
npm init
# node_modulesとpackage-lock.jsonを生成
npm install  express --save
```

```bash
# expressパッケージをインストール
npm install  express --save
```

- "/"ディレクトリにindex.jsファイルを作成する  
> 以下を記述（テスト用）  
```js
//モジュールのインポート
const http = require('http');
const express = require('express');

//expressオブジェクトの生成
const app = express();

//getでリクエスト時に処理するコールバック関数指定
app.get("/", function(req, res){
    return res.send("Hello World");
});

//サーバの設定
const server = http.createServer(app);
server.listen(3000);
```

- node.jsの実行

```bash
# node.jsの実行
node index.js
```
> 以下にアクセス  
> http://localhost:3000/   

- Node.jsプロジェクトを作成は終わり

```bash
# フォルダを作成
mkdir contracts
# ディレクトリ移動
cd contracts
# package.jsonを生成
npm init -y
```

# hardhatでコントラクト開発環境を構築

> コントラクトのサンプルと、それをローカル開発用ネットワークへデプロイしたりテストするために必要なリソースが一気に作成されます。必要なパッケージ等もインストールされます。   

```bash
# hardhatパッケージをインストール
npx hardhat init
# 結果
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.6.4 👷‍

✔ What do you want to do? · Create a basic sample project
✔ Hardhat project root: · /Users/Masa/Desktop/test/contracts
✔ Do you want to add a .gitignore? (Y/n) · y
✔ Do you want to install this sample project's dependencies with npm (hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers)? (Y/n) · y
```


# コントラクトをコンパイルしてバイトコードを生成
```bash
# contracts/artifacts/contracts/Greeter.sol/Greeter.jsonというファイルが生成
npx hardhat compile
```

# コントラクトの単体テスト

```bash
# 自動テストが実行
npx hardhat test
# 結果
  Greeter
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to 'Hola, mundo!'
    ✓ Should return the new greeting once it's changed (464ms)


  1 passing (465ms)
```


# ローカル開発用ネットワークを明示的に指定してコントラクトをテスト

```bash
# ローカル開発用ブロックチェーンネットワーク上で開発用のETHの残高があるアカウントのアドレスと秘密鍵の情報が一覧で表示された後、待機状態になります。
npx hardhat node
# 結果
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========
Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

Account #2: 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc (10000 ETH)
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

Account #3: 0x90f79bf6eb2c4f870365e785982e1f101e93b906 (10000 ETH)
Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

Account #4: 0x15d34aaf54267db7d7c367839aaf71a00a2c6a65 (10000 ETH)
Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a

Account #5: 0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc (10000 ETH)
Private Key: 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba

Account #6: 0x976ea74026e726554db657fa54763abd0c3a0aa9 (10000 ETH)
Private Key: 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e

Account #7: 0x14dc79964da2c08b23698b3d3cc7ca32193d9955c (10000 ETH)
Private Key: 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356

Account #8: 0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f (10000 ETH)
Private Key: 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97

Account #9: 0xa0ee7a142d267c1f36714e4a8f75612f20a79720 (10000 ETH)
Private Key: 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6

Account #10: 0xbcd4042de499d14e55001ccbb24a551f3b954096 (10000 ETH)
Private Key: 0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897

Account #11: 0x71be63f3384f5fb98995898a86b02fb2426c5788 (10000 ETH)
Private Key: 0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82

Account #12: 0xfabb0ac9d68b0b445fb7357272ff202c5651694a (10000 ETH)
Private Key: 0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

Account #13: 0x1cbd3b2770909d4e10f157cabc84c7264073c9ec (10000 ETH)
Private Key: 0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd

Account #14: 0xdf3e18d64bc6a983f673ab319ccae4f1a57c7097 (10000 ETH)
Private Key: 0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa

Account #15: 0xcd3b766ccdd6ae721141f452c550ca635964ce71 (10000 ETH)
Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

Account #16: 0x2546bcd3c84621e976d8185a91a922ae77ecec30 (10000 ETH)
Private Key: 0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0

Account #17: 0xbda5747bfd65f08deb54cb465eb87d40e51b197e (10000 ETH)
Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd

Account #18: 0xdd2fd4581271e230360230f9337d5c0430bf44c0 (10000 ETH)
Private Key: 0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0

Account #19: 0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199 (10000 ETH)
Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e
```

- 次に、別のターミナルを立ち上げて、npx hardhat test --network localhostコマンドを実行する

```bash
# コントラクトのデプロイや、コントラクト内の関数の呼び出し等のログが出力
npx hardhat test --network localhost
# 結果
  Greeter
    ✓ Should return the new greeting once it's changed (305ms)


  1 passing (306ms)
```

- vscodeターミナルに戻ってみると表示が追加されている

```bash
# ...省略
web3_clientVersion (2)
eth_chainId
eth_accounts
eth_blockNumber
eth_chainId (2)
eth_estimateGas
eth_getBlockByNumber
eth_feeHistory
eth_sendTransaction
  Contract deployment: Greeter
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0x56edad30f88035fca33d621cfa061dac5a78487e71b4e68e3c80c974441b5d93
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            497002 of 497002
  Block #1:            0x9cfc474d3ba7d1997257d8950fc370637b3aa39dad51c484c49fb1210743a788

  console.log:
    Deploying a Greeter with greeting: Hello, world!

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_call
  Contract call:       Greeter#greet
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3

eth_chainId
eth_estimateGas
eth_feeHistory
eth_sendTransaction
  Contract call:       Greeter#setGreeting
  Transaction:         0x94ec084ff3de7b6619e1f4a618181bbc8e882f7b61cf881c6f15b43f25ad0d49
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
  Value:               0 ETH
  Gas used:            35426 of 35702
  Block #2:            0xd142ebd191620cef185fbd6ffe791ef4205d16a7c8830966b53bb7b9959dd906

  console.log:
    Changing greeting from 'Hello, world!' to 'Hola, mundo!'

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_call
  Contract call:       Greeter#greet
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
```


# Ethereum コントラクト開発 Hello world テストネット

> 参考資料:https://zenn.dev/cauchye/articles/ethereum-contract-helloworld-testnet  

# node.jsで環境変数の設定方法

> 参考資料:https://qiita.com/kenboo/items/dba2f39130e1af155d01  

```bash
# "/"ディレクトリでdotenvをインストール
npm install dotenv --save
```
- .envファイルを作成
> .envファイルに格納したい変数を記述   
```text
INFURA_PROJECT_ID=****************
RIVATE_KEY=****************
```

# .envの呼び出し方
```js
require('dotenv').config();
console.log(process.env.):
// nodeを起動
```

# .envファイルはgitとにあげたら消滅するので気おつけよう！（.gitignore管理必須）

- hardhatを使わないコントラクトのデプロイ・呼び出し(hardhatを使った呼び出しができなかった)

- ファイルの作成

> contracts/scripts/sample-script-without-hardhat.jsを作成  

```js
const { ethers } = require("ethers");
const contractJsonData = require("../artifacts/contracts/Greeter.sol/Greeter.json");
require('dotenv').config();

async function main() {
  const provider = ethers.getDefaultProvider(
    "goerli",
    {
      infura: process.env.INFURA_PROJECT_ID,
      // alchemy: process.env.ALCHEMY_API_TOKEN,
      // etherscan: process.env.ETHERSCAN_API_TOKEN,
    }
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contractFactory = new ethers.ContractFactory(contractJsonData.abi, contractJsonData.bytecode, wallet);
  
  console.log("greeting contract deploy start with 'Hello, world!'");
  const contract = await contractFactory.deploy("Hello, world!");
  console.log(`greeting contract deploy tx hash: ${contract.deployTransaction.hash}`);
  console.log(`greeting contract deploy tx link: https://goerli.etherscan.io/tx/${contract.deployTransaction.hash}`);
  console.log("waiting for greeting contract deploy tx confirmed...");
  await contract.deployTransaction.wait([confirms = 1]);
  console.log("greeting contract deploy tx confirmed");
  const contractAddress = contract.address
  console.log(`greeting contract address: ${contractAddress}`);
  
  const deployedContract = new ethers.Contract(contractAddress, contractJsonData.abi, provider);
  
  console.log(`current greeting message is ${await deployedContract.greet()}`);
  
  console.log("send tx to call setGreeting")
  const setGreetingTx = await deployedContract.connect(wallet).setGreeting("Hola, mundo!");
  console.log(`setGreeting tx hash: ${setGreetingTx.hash}`);
  console.log(`setGreeting tx link: https://goerli.etherscan.io/tx/${setGreetingTx.hash}`);
  console.log("waiting for setGreeting tx confirmed...");
  await setGreetingTx.wait([confirms = 1]);
  console.log("setGreeting tx confirmed");
  
  console.log(`after changing, greeting message is ${await deployedContract.greet()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

```

# コマンドで対象ファイルを実行
```bash
# 実行コマンド
node scripts/sample-script-without-hardhat.js
# 結果

greeting contract deploy start with 'Hello, world!'
greeting contract deploy tx hash: 0x532185c0010da275d42bef56d2bc829610a1d8818043bb95d35a25e428dd7eca
greeting contract deploy tx link: https://goerli.etherscan.io/tx/0x532185c0010da275d42bef56d2bc829610a1d8818043bb95d35a25e428dd7eca
waiting for greeting contract deploy tx confirmed...
greeting contract deploy tx confirmed
greeting contract address: 0x105E67BD932058C39c6f5cd3B19eEe2d392d67FC
current greeting message is Hello, world!
send tx to call setGreeting
setGreeting tx hash: 0x3347aa722ed93fd6f5db3427b2405c60d82527c930c92804ff4628a78fa67f5d
setGreeting tx link: https://goerli.etherscan.io/tx/0x3347aa722ed93fd6f5db3427b2405c60d82527c930c92804ff4628a78fa67f5d
waiting for setGreeting tx confirmed...
setGreeting tx confirmed
after changing, greeting message is Hola, mundo!
```

# Ethereum コントラクト開発 ERC721編 
参考資料: https://zenn.dev/cauchye/articles/ethereum-contract-erc721

```bash
npm install -D @openzeppelin/contracts
```

# contracts/test/nft-test.jsを作成
```js
const { expect } = require("chai");

describe("NFT", async function () {
  it("should be able to mint, transferFrom, burn. And it should return appropriate name, symbol, totalSupply, tokenURI, ownerOf, balanceOf", async function () {
    const [signer, badSigner] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log(`nft deploy tx hash: ${nft.deployTransaction.hash}`);
    console.log(`greeter contract address: ${nft.address}`);

    // before initial minting
    expect(await nft.name()).to.equal("NFT Survey Proto");
    expect(await nft.symbol()).to.equal("NFTSP");
    expect(await nft.totalSupply()).to.equal(0);

    // mint tokenId = 0
    const mint0Tx = await nft.connect(signer).mint(signer.address);
    await mint0Tx.wait();
    console.log(`mint 0 tx hash: ${mint0Tx.hash}`);

    // Assertion for token(tokenId = 0)
    expect(await nft.totalSupply()).to.equal(1);
    expect(await nft.tokenURI(0)).to.equal("https://asia-northeast1-nft-survey.cloudfunctions.net/api/v1/tokens/0")
    expect(await nft.ownerOf(0)).to.equal(signer.address);
    expect(await nft.balanceOf(signer.address)).to.equal(1);

    // mint tokenId = 1
    const mint1Tx = await nft.connect(signer).mint(signer.address);
    await mint1Tx.wait();
    console.log(`mint 1 tx hash: ${mint1Tx.hash}`);

    // Assertion for token(tokenId = 1) and contract state
    expect(await nft.totalSupply()).to.equal(2);
    expect(await nft.tokenURI(1)).to.equal("https://asia-northeast1-nft-survey.cloudfunctions.net/api/v1/tokens/1")
    expect(await nft.ownerOf(1)).to.equal(signer.address);
    expect(await nft.balanceOf(signer.address)).to.equal(2);

    // transfer token(tokenId = 1) from signer.address to badSigner.address
    const transfer1FromSignerToAddressTx = await nft.connect(signer).transferFrom(signer.address, badSigner.address, 1);
    await transfer1FromSignerToAddressTx.wait();
    console.log(`transfer1FromSignerToAddressTx tx hash: ${transfer1FromSignerToAddressTx.hash}`);

    // Assertion for transferred token(tokenId = 1)
    expect(await nft.totalSupply()).to.equal(2);
    expect((await nft.ownerOf(1))).to.equal(badSigner.address);
    expect(await nft.balanceOf(signer.address)).to.equal(1);
    expect(await nft.balanceOf(badSigner.address)).to.equal(1);

    // burn token(tokenId = 0)
    const burn0Tx = await nft.burn(0);
    await burn0Tx.wait();
    console.log(`burn0 tx hash: ${burn0Tx.hash}`);

    // Assertion for burned token(tokenId = 0)
    expect(await nft.totalSupply()).to.equal(1);
    expect(nft.ownerOf(0)).to.revertedWith("ERC721: owner query for nonexistent token");
    expect(nft.tokenURI(0)).to.revertedWith("ERC721Metadata: URI query for nonexistent token");
    expect(await nft.balanceOf(signer.address)).to.equal(0);

    // mint token(tokenId = 2)
    const mint2Tx = await nft.mint(badSigner.address);
    await mint2Tx.wait();
    console.log(`mint 2 tx hash: ${mint2Tx.hash}`);

    // Assertion for re-minted token(tokenId = 0)
    expect(await nft.totalSupply()).to.equal(2);
    expect(await nft.ownerOf(2)).to.equal(badSigner.address);
    expect(await nft.tokenURI(2)).to.equal("https://asia-northeast1-nft-survey.cloudfunctions.net/api/v1/tokens/2");
    expect(await nft.balanceOf(badSigner.address)).to.equal(2);

    // transfer token(tokenId = 2) from badSigner.address to signer.address
    const transfer2FromBadSignerToSignerAddressTx = await nft.connect(badSigner).transferFrom(badSigner.address, signer.address, 2);
    await transfer2FromBadSignerToSignerAddressTx.wait();
    console.log(`transfer2FromBadSignerToSignerAddress tx hash: ${transfer2FromBadSignerToSignerAddressTx.hash}`);

    // Assertion for transferred token(tokenId = 2)
    expect(await nft.totalSupply()).to.equal(2);
    expect(await nft.ownerOf(2)).to.equal(signer.address);
    expect(await nft.balanceOf(signer.address)).to.equal(1);
    expect(await nft.balanceOf(badSigner.address)).to.equal(1);

    // Assertion fail to mint with badSigner who has not minter role
    expect(nft.connect(badSigner).mint(signer.address)).to.revertedWith("ERC721PresetMinterPauserAutoId: must have minter role to mint");
  });
});
```

- コマンドでコントラクトのテストを実行します。

```bash
# テスト実行
npx hardhat test test/nft-test.js
```

- ローカル開発用ネットワークを起動
```bash
npx hardhat node
```
- 別ターミナルでコマンド実行
```bash
npx hardhat test test/nft-test.js --network localhost
```


> もう一個別のアカウントを作成し、テスト用のETHの残高を少し送っておき、以下のような環境変数にそのアカウントの秘密鍵を設定し、contracts/hardhat.config.jsファイルに以下のように追記します。  

```js
  networks: {
    goerli: {
    url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    accounts: [process.env.PRIVATE_KEY, process.env.SECOND_PRIVATE_KEY] //この行追記
    }
  },
  solidity: "0.8.4",
};
```

> トランザクションの承認に時間がかかることを踏まえ、テストのタイムアウトを明示的に10分に設定  
- かくのめんどくさいので参考資料を確認してください

# 今回はGoerliではなくてropstenを使用するので全て変更
> すベテのgoerliをropstenに変更  

```bash
npx hardhat test test/nft-test.js --network ropsten

# 結果
  NFT
nft deploy tx: https://ropsten.etherscan.io/tx/0x8437da7f938eb3c4d009bd36925486e59c7462de7890d27961dcdc2ff8122585
greeter contract address: 0x572fae4853117EFF91B14AAB52169c981dc2cE55
mint 0 tx: https://ropsten.etherscan.io/tx/0x0e636a4bf201553175f4bf8a2990ebe7c89c11145fff6fa863398411a9adc0bf
mint 1 tx: https://ropsten.etherscan.io/tx/0x740acf8a8d38afe27fa26b06726a81cb98b1d002f862676d4d5588bb5df461b6
transfer1FromSignerToAddress tx: https://ropsten.etherscan.io/tx/0x53e37eb79d5e74665b05a195c4705c5e1323106bb41b0b94d791526913f57231
    1) should be able to mint, transferFrom, burn. And it should return appropriate name, symbol, totalSupply, tokenURI, ownerOf, balanceOf


  0 passing (3m)
  1 failing

  1) NFT
       should be able to mint, transferFrom, burn. And it should return appropriate name, symbol, totalSupply, tokenURI, ownerOf, balanceOf:
     ProviderError: transaction underpriced
      at HttpProvider.request (node_modules/hardhat/src/internal/core/providers/http.ts:49:19)
      at LocalAccountsProvider.request (node_modules/hardhat/src/internal/core/providers/accounts.ts:162:36)
      at runMicrotasks (<anonymous>)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at EthersProviderWrapper.send (node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)
```

# hardhatに依存せずに、Node.jsで同様の実装の動作検証

- contracts/scripts/nft-script-without-hardhat.jsファイルを作成
```js
const { ethers } = require("ethers");
const contractJsonData = require("../artifacts/contracts/NFT.sol/NFT.json");

async function main () {
  const provider = ethers.getDefaultProvider(
    "goerli",
    {
      infura: process.env.INFURA_PROJECT_ID,
      alchemy: process.env.ALCHEMY_API_TOKEN,
      etherscan: process.env.ETHERSCAN_API_TOKEN,
    }
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const NFT = new ethers.ContractFactory(contractJsonData.abi, contractJsonData.bytecode, wallet);
  const nft = await NFT.deploy();
  await nft.deployTransaction.wait([confirms = 2]);
  console.log(`nft deploy tx: https://goerli.etherscan.io/tx/${nft.deployTransaction.hash}`);
  console.log(`greeter contract address: ${nft.address}`);
  
  const contractAddress = nft.address;
  const deployedNftContract = new ethers.Contract(contractAddress, contractJsonData.abi, provider);
  
  // before initial minting
  console.log("name() = NFT Survey Proto?", await deployedNftContract.name());
  console.log("symbol() = NFTSP?", await deployedNftContract.symbol());
  console.log("totalSupply() = 0?", await deployedNftContract.totalSupply());
  
  // mint tokenId = 0
  const mint0Tx = await deployedNftContract.connect(wallet).mint(await wallet.getAddress());
  await mint0Tx.wait([confirms = 2]);
  console.log(`mint 0 tx: https://goerli.etherscan.io/tx/${mint0Tx.hash}`);
  
  // Assertion for token(tokenId = 0)
  console.log("totalSupply() = 1?", await deployedNftContract.totalSupply());
  console.log("tokenURI(0) = https://asia-northeast1-nft-survey.cloudfunctions.net/api/v1/tokens/0 ?", await deployedNftContract.tokenURI(0));
  console.log("ownerOf(0) = ↓", await deployedNftContract.ownerOf(0));
  console.log("wallet.getAddress() = ↑", await wallet.getAddress());
  console.log("balanceOf(await wallet.getAddress()) = 1?", await deployedNftContract.balanceOf(await wallet.getAddress()));
  
  // mint tokenId = 1
  const mint1Tx = await deployedNftContract.connect(wallet).mint(await wallet.getAddress());
  await mint1Tx.wait([confirms = 2]);
  console.log(`mint 1 tx: https://goerli.etherscan.io/tx/${mint1Tx.hash}`);
  
  // transfer token(tokenId = 1) from await wallet.getAddress() to await secondWallet.getAddress()
  const secondWallet = new ethers.Wallet(process.env.SECOND_PRIVATE_KEY, provider);
  const transfer1FromWalletToSecondWalletTx = await deployedNftContract.connect(wallet).transferFrom(await wallet.getAddress(), await secondWallet.getAddress(), 1);
  await transfer1FromWalletToSecondWalletTx.wait([confirms = 2]);
  console.log(`transfer1FromWalletToSecondWalletTx tx: https://goerli.etherscan.io/tx/${transfer1FromWalletToSecondWalletTx.hash}`);
  
  // burn token(tokenId = 0)
  const burn0Tx = await deployedNftContract.connect(wallet).burn(0);
  await burn0Tx.wait([confirms = 2]);
  console.log(`burn0 tx: https://goerli.etherscan.io/tx/${burn0Tx.hash}`);
  
  // mint token(tokenId = 2)
  const mint2Tx = await deployedNftContract.connect(wallet).mint(await secondWallet.getAddress());
  await mint2Tx.wait([confirms = 2]);
  console.log(`mint 2 tx: https://goerli.etherscan.io/tx/${mint2Tx.hash}`);
  
  // transfer token(tokenId = 2) from await secondWallet.getAddress() to await wallet.getAddress()
  const transfer2FromSecondWalletToWalletTx = await deployedNftContract.connect(secondWallet).transferFrom(await secondWallet.getAddress(), await wallet.getAddress(), 2);
  await transfer2FromSecondWalletToWalletTx.wait([confirms = 2]);
  console.log(`transfer2FromSecondWalletToWalletTx tx: https://goerli.etherscan.io/tx/${transfer2FromSecondWalletToWalletTx.hash}`);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
```

```bash
node scripts/nft-script-without-hardhat.js
# 結果
# 色々コントラクトのデプロイやコントラクトの呼び出しが実行できていることが確認
```

