// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const HappyCoin = await hre.ethers.getContractFactory("HappyCoin");
  const happycoin = await HappyCoin.deploy();
  const deployer = await hre.ethers.getSigner();
  console.log(deployer.address);
  await happycoin.deployed();

  console.log("HappyCoin deployed to:", happycoin.address);
  console.log(await happycoin.balanceOf(deployer.address));

//   console.log("---------");
//   const Happiness = await hre.ethers.getContractFactory("Happiness");
//   const happiness = await Happiness.deploy();
//   const deployerh = await hre.ethers.getSigner();
//   console.log(deployer.address);
//   await happiness.deployed();

//   console.log("Happiness deployed to:", happiness.address);
//   console.log(await happiness.balanceOf(deployerh.address));

//   console.log("-------------");
//   console.log(await happycoin.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"));
//   await happycoin.approve("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", BigInt(100*10**18));
//   await happycoin.transferFrom("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266","0x70997970c51812dc3a010c7d01b50e0d17dc79c8",BigInt(100*10**18) );
//   console.log(await happycoin.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"));
//   console.log(await happycoin.balanceOf("0x70997970c51812dc3a010c7d01b50e0d17dc79c8"));
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
