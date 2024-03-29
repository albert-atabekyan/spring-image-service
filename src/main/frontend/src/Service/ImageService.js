import {API_URL} from "../Constants/APIConst";
import axios from "axios";
import AuthenticationService from "./AuthenticationService";

class ImageService {

    postImage(formData) {
        const auth = AuthenticationService.getAuth();
        return axios.post(API_URL + '/image/add', formData, {

                auth: {
                    username: auth.user,
                    password: auth.pass
                }
            }
        )
    }

    getImages() {
        const auth = AuthenticationService.getAuth();
        return axios.get(API_URL + '/images', {
            auth: {
                username: auth.user,
                password: auth.pass
            }
        })
    }

    getImage(image_id) {
        const auth = AuthenticationService.getAuth();
        return axios.get(API_URL + "/image/" + image_id, {
            responseType: 'blob',
            auth: {
                username: auth.user,
                password: auth.pass
            }
        })
    }

    getImageInfo(image_id) {
        const auth = AuthenticationService.getAuth();
        return axios.get(API_URL + "/image/" + image_id + "/info", {
            auth: {
                username: auth.user,
                password: auth.pass
            }
        })
    }

    updateImageTitle(image_id, formData) {
        const auth = AuthenticationService.getAuth();
        return axios.post(API_URL + "/image/" + image_id + "/updateTitle", formData, {
            auth: {
                username: auth.user,
                password: auth.pass
            }
        })
    }

    deleteImage(image_id) {
        const auth = AuthenticationService.getAuth();
        return axios.delete(API_URL + "/image/" + image_id, { 
                auth: {
                    username: auth.user,
                    password: auth.pass
                }
            }
        )
    }
}

export default new ImageService()