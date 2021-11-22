import axios from "axios";
import { useState } from 'react';

const API_URL = process.env.REACT_APP_BASE_API_URL
const currentToken = localStorage.getItem("token")

export const register = (
    data
) => async (dispatch) => {
    try {
        const res = await axios({
            method: "post",
            url: "https://timdevent.herokuapp.com/signup",
            data: data,
            header: {
                "Content-Type": "formdata"
            }
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

export const login = (data) => async (dispatch) => {
    try {
        const res = await axios.post(API_URL + "signin", {
            email: data.email,
            password: data.password,
        });
        localStorage.setItem("access_token", res.data.token);
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILED",
            payload: error,
        });
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

export const addComment = (post) => {
    return {
        type: 'ADD_COMMENT',
        post
    }
};

export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id
    }
};

// export const createComment = (data) => async (dispatch) => {
//     try {
//         const res = await axios.post({
//             method: 'delete',
//             url: `${API_URL}comment/${data.id}`,
//             headers: {
//                 access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiRGVuYSIsImxhc3ROYW1lIjoiZWthIiwiZW1haWwiOiJkZW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDZrSVJVYWh0WkxEQ3dCS3Q4Z2RqVmVXM1NLa0FFQUxwc2xlcnBpTnJlbDBaMTYvTzRWdTlxIiwiaW1hZ2UiOiJkMzQ2NWUzNDhhZjI0M2YwODhiOTI5MjNlZWE2OTU5Zi5KUEciLCJjcmVhdGVkQXQiOiIyMDIxLTExLTE1VDEwOjI3OjI3LjA1OVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTExLTE1VDEwOjI3OjI3LjA1OVoiLCJkZWxldGVkQXQiOm51bGwsImlhdCI6MTYzNjk3NDE5M30.ZQAjsZvKl_mROFn52DYQFom4XQmfYxiWh-xOpjZBdKU`
//             },
//             data: {
//                 comment: data.comment
//             }
//         });
//         dispatch(addComment(res.data))
//     } catch (error) {
//         console.log(error);
//     }
// };

