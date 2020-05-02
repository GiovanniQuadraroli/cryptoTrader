const config = require("configuration")
const pricing = require("pricing")

const main = async () => {
    const tmp = config.get("POLONIEX")
    console.log(tmp["PUBLIC_ENDPOINT"])
    const ticker = await pricing.getTicker()
    console.log(ticker)
}

module.exports = {
    start : () => {
        main()
    }
}
