import { ProxyState } from "../AppState.js";
import timeService from "../Services/TimeService.js";

let _12hr = true

function _drawTime() {
    document.getElementById("time").innerText = `${_12hr ? (ProxyState.time.hour + 11) % 12 + 1 : ProxyState.time.hour}:${ProxyState.time.min < 10 ? "0" + ProxyState.time.min : ProxyState.time.min}`
    document.getElementById("am-pm").innerText = `${_12hr ? ProxyState.time.hour > 12 ? "PM" : "AM" : ""}`
}

export default class TimeController {
    constructor() {
        _drawTime()
        ProxyState.on("time", _drawTime)
    }

    swapType() {
        _12hr ? _12hr = false : _12hr = true;
        _drawTime()
    }
}