import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL
const currentToken = localStorage.getItem("token")

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

export const createEvent = (
    data
) => async (dispatch) => {
    try {
        const res = await axios.post(API_URL + "event", {
            title: data.title,
            dateEvent: data.dateEvent,
            eventTime: data.eventTime,
            category: data.category,
            detail: data.detail
        });
        dispatch({
            type: "CREATEEVENT_SUCCESS",
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: "CREATEEVENT_FAILED",
            payload: error,
        })
    }
};

export const comment = (
    data
) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${API_URL}comment/${data.id}`,
            headers: {
                access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiRGVuYSIsImxhc3ROYW1lIjoiZWthIiwiZW1haWwiOiJkZW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDZrSVJVYWh0WkxEQ3dCS3Q4Z2RqVmVXM1NLa0FFQUxwc2xlcnBpTnJlbDBaMTYvTzRWdTlxIiwiaW1hZ2UiOiJkMzQ2NWUzNDhhZjI0M2YwODhiOTI5MjNlZWE2OTU5Zi5KUEciLCJjcmVhdGVkQXQiOiIyMDIxLTExLTE1VDEwOjI3OjI3LjA1OVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTExLTE1VDEwOjI3OjI3LjA1OVoiLCJkZWxldGVkQXQiOm51bGwsImlhdCI6MTYzNjk3NDE5M30.ZQAjsZvKl_mROFn52DYQFom4XQmfYxiWh-xOpjZBdKU`
            },
            data: {
                comment: data.comment
            }
        });
        console.log(res);
        // localStorage.setItem('token')
        dispatch({
            type: "COMMENT_SUCCESS",
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: "COMMENT_FAILED",
            payload: error,
        })
    }
};