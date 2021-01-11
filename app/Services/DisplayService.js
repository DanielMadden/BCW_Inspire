import { displayController } from "../Controllers/DisplayController.js"
import { localService } from "./LocalService.js"

class DisplayService {
    constructor() {
        // displayController.load()
        this.status = {
            image: false,
            quote: false,
            todos: false,
            weather: false
        }
        let time = 0;
        let checkRate = 5;
        let testing = setInterval(() => {
            let check = Object.entries(this.status)
            let passes = 0
            check.forEach(arr => passes += arr[1] ? 1 : 0)
            if (passes == check.length) {
                console.log(`ALL DATA IS READY. Time: ${time}ms`)
                displayController.show()
                localService.save()
                clearInterval(testing)
            }
            time += checkRate
        }, checkRate)
    }
}

export const displayService = new DisplayService()