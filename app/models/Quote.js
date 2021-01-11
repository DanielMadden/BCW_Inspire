export default class Quote {
    constructor(data) {
        this.quote = data.body
        this.author = data.author
    }

    get Template() {
        return /*html*/`
        <span>${this.quote}</span>
        <span id="quote-author" >${this.author}</span>
        `
    }
}