const { ethers } = require("hardhat");

async function main() {
    // Compile and deploy the contract
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    await myToken.deployed();
    
    console.log("MyToken deployed to:", myToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});