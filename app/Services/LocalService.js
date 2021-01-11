import { ProxyState } from "../AppState.js"

class LocalService {
    save() {
        let data = Object.entries(ProxyState);
        data.shift();
        window.localStorage.setItem("data.inspire", JSON.stringify(data));
    }

    load(prop) {
        return JSON.parse(window.localStorage.getItem("data.inspire")).find(arr => arr[0] == prop)[1];
    }
}


export const localService = new LocalService()