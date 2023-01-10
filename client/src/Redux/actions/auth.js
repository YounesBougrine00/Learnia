import axios from 'axios'
import { USER_LOADED, LOGOUT, LOAD_USER } from '../types'


//Register user
export const register = ({ email, password, firstName, lastName }) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('https://learnia.dev/api/auth/signup', { email, password, firstName, lastName }, config)
        const { token } = res.data

        dispatch({
            type: USER_LOADED,
            payload: token
        })

    } catch (error) {
        console.log(error)
    }
}




//Login user
export const login = ({ email, password }) => async dispatch => {

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('https://learnia.dev/api/auth/login', { email, password }, config)

        const { token } = res.data


        dispatch({
            type: USER_LOADED,
            payload: token
        })


    } catch (error) {
        console.log(error)
    }
}



//Logout
export const logout = () => async dispatch => {
    try {
        dispatch({
            type: LOGOUT
        })

    } catch (error) {
        console.log(error)
    }
}



//Load user initially
export const loadUser = () => async dispatch => {
    try {
        dispatch({
            type: LOAD_USER
        })


    } catch (error) {
        console.log(error)
    }
}