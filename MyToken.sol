
//Using for starting point:
// SPDX-License-Identifier: MIT

//this contract creates a new ERC-20 token named "MyAwesomeToken" with the symbol "MAT."
//It mints an initial supply of 1,000,000 tokens (with 18 decimals) to the deployer's address.

//Functions
//getBalance:Function to get the balance of a specific address
//transferTokens: transfers tokens from deployer address to recipient

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyAwesomeToken", "MAT") {
        _mint(msg.sender, 1000000 * 10 ** 18);
    }


    function getBalance(address account) external view returns (uint256) {
        return balanceOf(account);
    }

    function transferTokens(address recipient, uint256 amount) external returns (bool) {
        return transfer(recipient, amount);
    }
}
