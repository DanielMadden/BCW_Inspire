class DisplayController {
    constructor() {
        console.log("loading...")
        document.getElementById("loading").classList.remove("hide")
    }
    show() {
        console.log("showing...")
        document.getElementById("body").classList.remove("hide")
        document.getElementById("background-darken").classList.remove("dark")
        document.getElementById("loading").classList.add("hide")
        setTimeout(() => {
            document.getElementById("background").classList.remove("hide")
        }, 1000)
    }
}

export const displayController = new DisplayController()