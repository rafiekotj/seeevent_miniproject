import React, { Component } from 'react'
import {PostComment} from './PostComment'
import { useSelector } from 'react-redux'

export const CommentList = () => {
    const {posts} = useSelector(state => state);
    return (
        <div className="container">
            <div className="row">
                {posts && 
                posts.map((post) => <PostComment post={post} key={post.id} />)}
            </div>
        </div>
    )
}