import axios from "axios";
import routes from '../initData/routes'

export const SET_TOKEN = "SET_TOKEN";

export const fetchRegistrationUser = ({ username, password }) => dispatch => {
    axios
        .post(
            routes.loginUrl,
            {
                username,
                password
            }
        )
        .then(res => {
            if(res.data.success === true){
                dispatch(setToken(res.data.token))
                localStorage.setItem('token',res.data.token)
            }
        })
}

export const setToken = token => ({
    type:SET_TOKEN, payload: token
})