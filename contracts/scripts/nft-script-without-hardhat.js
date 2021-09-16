const { ethers } = require("ethers");
const contractJsonData = require("../artifacts/contracts/NFT.sol/NFT.json");
require('dotenv').config();


async function main () {
  const provider = ethers.getDefaultProvider(
    "ropsten",
    {
      infura: process.env.INFURA_PROJECT_ID,
      // alchemy: process.env.ALCHEMY_API_TOKEN,
      // etherscan: process.env.ETHERSCAN_API_TOKEN,
    }
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const NFT = new ethers.ContractFactory(contractJsonData.abi, contractJsonData.bytecode, wallet);
  const nft = await NFT.deploy();
  await nft.deployTransaction.wait([confirms = 2]);
  console.log(`nft deploy tx: https://ropsten.etherscan.io/tx/${nft.deployTransaction.hash}`);
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
  console.log(`mint 0 tx: https://ropsten.etherscan.io/tx/${mint0Tx.hash}`);
  
  // Assertion for token(tokenId = 0)
  console.log("totalSupply() = 1?", await deployedNftContract.totalSupply());
  console.log("tokenURI(0) = https://asia-northeast1-nft-survey.cloudfunctions.net/api/v1/tokens/0 ?", await deployedNftContract.tokenURI(0));
  console.log("ownerOf(0) = ↓", await deployedNftContract.ownerOf(0));
  console.log("wallet.getAddress() = ↑", await wallet.getAddress());
  console.log("balanceOf(await wallet.getAddress()) = 1?", await deployedNftContract.balanceOf(await wallet.getAddress()));
  
  // mint tokenId = 1
  const mint1Tx = await deployedNftContract.connect(wallet).mint(await wallet.getAddress());
  await mint1Tx.wait([confirms = 2]);
  console.log(`mint 1 tx: https://ropsten.etherscan.io/tx/${mint1Tx.hash}`);
  
  // transfer token(tokenId = 1) from await wallet.getAddress() to await secondWallet.getAddress()
  const secondWallet = new ethers.Wallet(process.env.SECOND_PRIVATE_KEY, provider);
  const transfer1FromWalletToSecondWalletTx = await deployedNftContract.connect(wallet).transferFrom(await wallet.getAddress(), await secondWallet.getAddress(), 1);
  await transfer1FromWalletToSecondWalletTx.wait([confirms = 2]);
  console.log(`transfer1FromWalletToSecondWalletTx tx: https://ropsten.etherscan.io/tx/${transfer1FromWalletToSecondWalletTx.hash}`);
  
  // burn token(tokenId = 0)
  const burn0Tx = await deployedNftContract.connect(wallet).burn(0);
  await burn0Tx.wait([confirms = 2]);
  console.log(`burn0 tx: https://ropsten.etherscan.io/tx/${burn0Tx.hash}`);
  
  // mint token(tokenId = 2)
  const mint2Tx = await deployedNftContract.connect(wallet).mint(await secondWallet.getAddress());
  await mint2Tx.wait([confirms = 2]);
  console.log(`mint 2 tx: https://ropsten.etherscan.io/tx/${mint2Tx.hash}`);
  
  // transfer token(tokenId = 2) from await secondWallet.getAddress() to await wallet.getAddress()
  const transfer2FromSecondWalletToWalletTx = await deployedNftContract.connect(secondWallet).transferFrom(await secondWallet.getAddress(), await wallet.getAddress(), 2);
  await transfer2FromSecondWalletToWalletTx.wait([confirms = 2]);
  console.log(`transfer2FromSecondWalletToWalletTx tx: https://ropsten.etherscan.io/tx/${transfer2FromSecondWalletToWalletTx.hash}`);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});