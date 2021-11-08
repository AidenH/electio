const Election = artifacts.require("Election")
const ElectionCaller = artifacts.require("ElectionCaller")

module.exports = (deployer) => {
    // deployer.deploy(Election)
    deployer.deploy(ElectionCaller)
}
