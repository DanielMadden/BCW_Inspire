import { ProxyState } from "../AppState.js"

class TimeService {

    constructor() {
        let time = new Date()
        ProxyState.time = {
            hour: time.getHours(),
            min: time.getMinutes()
        }
        setInterval(this.checkForUpdate, 1000)
    }

    checkForUpdate() {
        if (new Date().getMinutes() > ProxyState.time.min) {
            setTime(new Date())
        }

        function setTime(time) {
            ProxyState.time = {
                hour: time.getHours(),
                min: time.getMinutes()
            }
        }
    }
}

const timeService = new TimeService()

export default timeService