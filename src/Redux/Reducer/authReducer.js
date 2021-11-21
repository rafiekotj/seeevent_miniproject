import {REGISTER_SUCCESS,REGISTER_FAILED, CREATEEVENT_SUCCESS, CREATEEVENT_FAILED, COMMENT_SUCCESS, COMMENT_FAILED } from '../typeAction';
import React from 'react'


const initialState = {
    user: null,
    token: null
};


const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case REGISTER_SUCCESS: 
        return {
            ...state,
            user: payload
        }

        case REGISTER_FAILED:
            return {
                ...state,
                user: payload
            }
        case CREATEEVENT_SUCCESS: 
            return {
                ...state,
                user: payload
            }
    
        case CREATEEVENT_FAILED:
            return {
                ...state,
                user: payload
            }
        case COMMENT_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case COMMENT_FAILED:
            return {
                ...state,
                user: payload
            }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default authReducer;
