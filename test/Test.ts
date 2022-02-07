import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Testing Test contract', function () {
  it('Testing test method', async function () {
    const Test = await ethers.getContractFactory('Test');
    const test = await Test.deploy();

    const res = await test.test();
    expect(res).to.be.equal('test');
  });
});
