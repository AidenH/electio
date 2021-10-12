//const Election = artifacts.require("Election")
const Caller = artifacts.require("Caller")

module.exports = (deployer) => {
    //deployer.deploy(Election)
    deployer.deploy(Caller)
}