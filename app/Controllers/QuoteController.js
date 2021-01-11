import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function _drawQuote() {
    document.getElementById("quote").innerHTML = ProxyState.quote.Template
}

export default class QuoteController {
    constructor() {
        quoteService.getQuote();
        ProxyState.on("quote", _drawQuote)
    }

    cycle() {
        quoteService.getQuote();
    }
}