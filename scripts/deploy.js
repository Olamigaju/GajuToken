const ethers = require("ethers");
async function main() {
  const GajuToken = await ethers.getContractFactory("GajuToken");
  const gajuToken = await GajuToken.deploy();

  await gajuToken.deployed();

  console.log(`deployed to ${gajuToken.address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
