import * as types from '../types'
import {baseService} from "../services";

export const addNewPost = (post) => {
    console.log(post, 'df8df')
    const newPost = {
        userId: post.userId,
        title: post.title,
        body: post.body
    }

    return async dispatch => {
        const post = await baseService().createPost(newPost)
        console.log(post)
        dispatch(addNewPostSuccess(post))
    }
}


export const addNewPostSuccess = (post) => {
    console.log('asu')
    return {
        type: types.ADD_NEWPOST,
        payload: post.data
    }
}

export const getNewPostsSuccess = (post) => {
    console.log('asu2')
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
