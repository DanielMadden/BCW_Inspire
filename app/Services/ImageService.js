import { ProxyState } from "../AppState.js";
import { api, apiSmush } from "./AxiosService.js";
import { displayService } from "./DisplayService.js";
import { localService } from "./LocalService.js";

let _images = [
    "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mrran4OzSm1st5lhmo1_1280.jpg",
    "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_n6rzpcsMk41st5lhmo1_1280.jpg"
]

class ImageService {
    async getImage() {
        console.log("getting image...")
        try {
            let bigImg = await api.get("images");
            // try {
            //     await apiSmush.post(`ws.php?img=${bigImg.data.url}`, bigImg.data.url)
            //     let smushImg = await apiSmush.get(`ws.php?img=${bigImg.data.url}`)
            //     ProxyState.image = smushImg.data.dest;
            //     displayService.status.image = true;
            // } catch (error) {
            // console.error("Image optimization API failed. Using unoptimized image instead.")
            ProxyState.image = bigImg.data.url;
            displayService.status.image = true;
            // }
        } catch (error) {
            console.error("Unable to retrieve image from API. Checking localStorage...")
            try {
                ProxyState.image = localService.load("image");
                displayService.status.image = true;
            } catch (error) {
                console.error("Unable to retrieve image from localStorage. Using preset images.")
                ProxyState.image = _images[Math.floor(Math.random() * _images.length)];
                displayService.status.image = true;
                localService.save()
            }
        }
        // console.log(ProxyState.image);
    }
}

const imageService = new ImageService();
export default imageService;