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
            console.log('submitRegistration',res.data)
            if(res.data.success === true){
                // setUsersToken(res.data.token)
                dispatch(setToken(res.data.token))
                localStorage.setItem('token',res.data.token)
            }

        })
}

export const setToken = token => ({
    type:SET_TOKEN, payload: token
})