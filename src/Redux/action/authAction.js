import axios from 'axios'

// const API_URL = process.env.REACT_APP_BASE_API_URL

export const register = (
    data
) => async (dispatch) => {
    try {
        const res = await axios ({
            method: "post",
            url: "https://timdevent.herokuapp.com/signup",
            data: data,
            header: { "Content-Type" : "formdata" }
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