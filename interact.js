


const { ethers } = require("hardhat");

async function main() {
    
    const contractAddress = 'YOUR_CONTRACT_ADDRESS'; //Replace with the address from your deployment

    //Get the contract factory and attach to the deployed contract
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.attach(contractAddress);

    const [deployer, acc1, acc2] = await ethers.getSigners();

    //Get deployer balance
    const deployerBalance = await myToken.getBalance(deployer.address);
    console.log("Deployer's balance:", ethers.utils.formatEther(deployerBalance), "MAT");

    //Transfer tokens from deployer to acc1
    const tx = await myToken.transferTokens(acc1.address, ethers.utils.parseEther("100"));
    await tx.wait(); 

    //Get acc1 balance
    const acc1Balance = await myToken.getBalance(acc1.address);
    console.log("Account 1's balance:", ethers.utils.formatEther(acc1Balance), "MAT");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
