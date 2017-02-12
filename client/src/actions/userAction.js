import axios from 'axios';
import cookie from 'react-cookie';
import config from '../config';

export const ADMIN = "admin";
export const USER = "user";
export const SHOW_LOGGIN_MODAL = "showModal"
export const HIDE_LOGGIN_MODAL = "hideModal"

axios.defaults.xsrfHeaderName = "X-CSRFToken";


export function adminSignIn({username, password}) {
    return function (dispatch) {
        axios
            .post(config.SERVER + "/login/", {username, password}, {withCredentials: true})
            .then((response) => {
                dispatch({type: ADMIN, payload: response.data})
                dispatch({type: HIDE_LOGGIN_MODAL, payload: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function adminSignOut() {
    return function (dispatch) {
        axios
            .post(config.SERVER + "/logout/", {}, {withCredentials: true})
            .then((response) => {
                dispatch({type: USER, payload: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
