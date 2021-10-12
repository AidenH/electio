const Caller = artifacts.require("Caller")

contract("Caller", () => {
    // createElection()
    it("caller should return address", async() => {
        const inst = await Caller.deployed()
        const result = await inst.createElection()

        console.log("LOG:", result)
        //assert.equal(a, 4)
    })
}) 