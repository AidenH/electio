const assert = require("assert")

const ElectionCaller = artifacts.require("ElectionCaller")
const Election = artifacts.require("Election")

contract("ElectionCaller", () => {

    // Deploy contract
    it("should deploy ElectionCaller contract", async() => {
        const isDeployed = await ElectionCaller.isDeployed()
        assert.equal(isDeployed, true)
    })

    // createElection()
    it("should return address", async() => {
        const inst = await ElectionCaller.deployed()
        
        await inst.createElection()
        let varResult = await inst.createElection.call()

        assert.equal(varResult.substring(0, 2), "0x")
    })
})

contract("Election", () => {

    // Deploy contract
    it("should deploy Election contract", async() => {
        const eCaller = await ElectionCaller.deployed()
        const eAddr = await eCaller.createElection.call()
        const eInst = await Election.new(eAddr)

        let addr = await eInst.address
        
        assert.equal(addr.substring(0, 2), "0x")
    })

    // Test store candidate address
    it("should store candidate address in candidateList", async() => {
        const eCaller = await ElectionCaller.deployed()
        const eAddr = await eCaller.createElection.call()
        const eInst = await Election.new(eAddr)

        console.log(await eInst.candidateList.call())

        assert.equal(eInst, true)
    })
})