import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class ImageService {
    async getImage() {
        let res = await api.get("images")
        ProxyState.image = res.data.url
        console.log(ProxyState.image)
    }
}

const imageService = new ImageService();
export default imageService;