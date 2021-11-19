import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL

export const register = (
    data
) => async (dispatch) => {
    try {
        const res = await axios.post(API_URL + "signup", {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        });
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: "REGISTER_FAILED",
            payload: error,
        })
    }
};