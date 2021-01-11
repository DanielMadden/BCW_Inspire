import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";
import { displayService } from "./DisplayService.js";
import { localService } from "./LocalService.js";

let _quotes = [{
    body: "In every walk with nature one receives far more than he seeks.",
    author: "John Muir"
}, {
    body: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
}]

//TODO create methods to retrieve data and update the State
class QuoteService {
    async getQuote() {
        console.log("getting quote...")
        try {
            let res = await api.get("quotes")
            ProxyState.quote = new Quote(res.data.quote)
            this.ready()
        } catch (error) {
            console.error("Could not retrieve quote from API")
            try {
                ProxyState.quote = localService.load("quote")
                this.ready()
            } catch (error) {
                console.error("No quote in localStorage")

                ProxyState.quote = new Quote(_quotes[Math.floor(Math.random() * _quotes.length)])
                this.ready()
            }
        }

    }

    ready() {
        displayService.status.quote = true;
    }
}

const quoteService = new QuoteService();
export default quoteService;