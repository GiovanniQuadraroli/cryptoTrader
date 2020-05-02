const config = require('configuration')
const got = require('got')


const endpoint = config.get("POLONIEX")["PUBLIC_ENDPOINT"]


module.exports = {
    getTicker: async () => {
        try {
            const response = await got(endpoint+"?command=returnTicker",{responseType: "json"})
            return response;
        } catch (error) {
          console.log(error)  
        }
    },
    getCurrencies: async () => {
        try{
            const response = await got(endpoint+"?command=returnCurrencies",{responseType: "json"})
            return response;
        } catch (error) {
          console.log(error)  
        }
    }
}