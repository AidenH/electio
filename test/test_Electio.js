const assert = require("assert")

const ElectionCaller = artifacts.require("ElectionCaller")
const Election = artifacts.require("Election")

contract("ElectionCaller", () => {

    // Deploy contract
    it("Should deploy ElectionCaller contract", async() => {
        const isDeployed = await ElectionCaller.isDeployed()
        assert.equal(isDeployed, true)
    })

    // createElection()
    it("Should return address", async() => {
        const inst = await ElectionCaller.deployed()
        
        await inst.createElection()
        let varResult = await inst.createElection.call()

        assert.equal(varResult.substring(0,2), "0x")
    })
})

contract("Election", () => {

    // Deployment contract
    it("Should deploy Election contract", async() => {
        const isDeployed = await ElectionCaller.isDeployed()
        assert.equal(isDeployed, true)
    })
})