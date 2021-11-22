import {REGISTER_SUCCESS,REGISTER_FAILED, CREATEEVENT_SUCCESS, CREATEEVENT_FAILED, ADD_COMMENT, DELETE_COMMENT } from '../typeAction';
import React from 'react'


const initialState = {
    posts: [
        {id: 1, title: 'post one', content: 'this is post one'},
        {id: 2, title: 'post two', content: 'this is post two'},
    ]
};

const authReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: payload,
            };

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
        case ADD_COMMENT:
            return {
                ...state,
                posts: [action.post, ...state.posts]
            }
        case DELETE_COMMENT:
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost
            }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default authReducer;