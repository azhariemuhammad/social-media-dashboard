import * as types from '../types'
import {baseService} from "../services";

export const getCommentsById = (id) => {
    return async dispatch => {
        const comments = await baseService().getCommentsByPostId(id)
        dispatch(getCommentsByIdSuccess(comments.data))
    }
}

export const getCommentsByIdSuccess = (comments) => {
    return {
        type: types.GET_COMMENTS_BY_ID,
        payload: comments
    }
}
