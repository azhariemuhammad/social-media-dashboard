import * as types from '../types'
import {baseService} from "../services";

export const addNewPost = (post) => {
    const newPost = {
        userId: post.userId,
        title: post.title,
        body: post.body
    }

    return async dispatch => {
        const posts = await baseService().createPost(newPost)
        dispatch(addNewPostSuccess(posts))
    }
}

export const getPostById = (id) => {
    return async dispatch => {
        const post = await baseService().getPostByPostId(id)
        dispatch(getPostByIdSuccess(post.data))
    }
}

export const getPostByIdSuccess = (post) => {
    return {
        type: types.GET_POSTS_BY_ID,
        payload: post
    }
}

export const addNewPostSuccess = (post) => {
    return {
        type: types.ADD_NEWPOST,
        payload: post.data
    }
}

export const getNewPostsSuccess = (post) => {
    return {
        type: types.GET_POSTS,
        payload: post.data
    }
}

export const getPostsByUserId = (userId) => {
    return async dispatch => {
        const posts = await baseService().getPostsByUserId(userId)
        dispatch(getNewPostsSuccess(posts))
    }
}
