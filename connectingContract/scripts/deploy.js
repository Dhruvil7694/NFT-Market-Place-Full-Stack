
const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.deployContract(
    "NFTMarketplace"
  );

  await NFTMarketplace.waitForDeployment();

  console.log(`Deployed to ${NFTMarketplace.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
