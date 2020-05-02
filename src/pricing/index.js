const config = require('configuration')
const got = require('got')


const endpoint = config.get("POLONIEX")["PUBLIC_ENDPOINT"]


module.exports = {
    getTicker: async () => {
        try {
            const response = await got(endpoint+"?returnTicker",{responseType: "json"})
            return response;
        } catch (error) {
          console.log(error)  
        }
    }
}