import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"

// https://splashbase.s3.amazonaws.com/unsplash/tumblr_n4ef69szs71st5lhmo1_1280.jpg
// https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_n6rzpcsMk41st5lhmo1_1280.jpg
// https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_n10n1wmxiS1st5lhmo1_1280.jpg
// https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_n6rzpcsMk41st5lhmo1_1280.jpg
// 

function _drawImage() {
    document.getElementById("body").style.background = `transparent url('${ProxyState.image}') no-repeat center center /cover`
}

export default class ImageController {

    constructor() {
        imageService.getImage()
        ProxyState.on("image", _drawImage)
    }

    cycle() {
        imageService.getImage()
    }
}