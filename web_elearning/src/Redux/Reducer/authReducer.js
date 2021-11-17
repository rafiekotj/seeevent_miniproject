import {SET_FIRSTNAME, SET_LASTNAME, SET_EMAIL, SET_PASSWORD, SET_CONFIRM_PASSWORD} from '../typeAction';
import React from 'react'

const initialState = {
    fisrtName: "",
    lastName: "",
    email= "",
    password= "",
    confirmPassword= ""
};

const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case SET_FIRSTNAME: {
            return {
                ...state,
                name: payload,
            };
        }
        case SET_LASTNAME: {
            return {
                ...state,
                name: payload,
            };
        }
        case SET_EMAIL: {
            return {
                ...state,
                name: payload,
            };
        }
        case SET_PASSWORD: {
            return {
                ...state,
                name: payload,
            };
        }
        case SET_CONFIRM_PASSWORD: {
            return {
                ...state,
                name: payload,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default authReducer;
