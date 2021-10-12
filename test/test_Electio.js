const ElectionCaller = artifacts.require("ElectionCaller")
const Election = artifacts.require("Election")

contract("ElectionCaller", () => {
    // createElection()
    it("caller should return address", async() => {
        const inst = await ElectionCaller.deployed()
        const result = await inst.createElection.call()

        console.log("LOG:", result)
        //assert.equal(a, 4)
    })
}) 