import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from "../typeAction";
import React from "react";

const initialState = {
    user: null,
    token: null,
};

const authReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: payload,
            };

        case REGISTER_FAILED:
            return {
                ...state,
                user: payload,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: payload,
            };

        case LOGIN_FAILED:
            return {
                ...state,
                user: payload,
            };

        default: {
            return {
                ...state,
            };
        }
    }
};

export default authReducer;