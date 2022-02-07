// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Test {

  constructor() {}

  function test() public view returns(string memory) {
    console.log('gm');
    return 'test';
  }
}
