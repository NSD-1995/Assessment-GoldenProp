const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('HomeTransaction', function () {
  it('returns the deposit to the buyer when the deal is withdrawn', async function () {
    const [realtor, seller, buyer] = await ethers.getSigners();
    const HomeTransaction = await ethers.getContractFactory('HomeTransaction');

    const contract = await HomeTransaction.deploy(
      '123 Main St',
      '10001',
      'Springfield',
      100,
      1000,
      realtor.address,
      seller.address,
      buyer.address
    );

    await contract.deployed();

    await contract.connect(seller).sellerSignContract();
    await contract.connect(buyer).buyerSignContractAndPayDeposit({ value: 100 });
    await contract.connect(realtor).realtorReviewedClosingConditions(true);

    const tx = await contract.connect(buyer).anyWithdrawFromTransaction();
    const receipt = await tx.wait();
    const refundEvent = receipt.events.find((event) => event.event === 'DepositRefunded');

    expect(refundEvent).to.not.equal(undefined);
    expect(refundEvent.args.beneficiary).to.equal(buyer.address);
    expect(refundEvent.args.amount.toString()).to.equal('100');
  });
});
