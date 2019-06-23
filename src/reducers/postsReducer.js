import * as types from '../types';

const initialState = {
    posts: [],
    selected: {}
}
function postReducer( state = initialState, {type, payload}) {
    console.log('bangke')
    console.log(type, payload)
    switch (type) {
        case types.GET_POSTS:
            return {...state, posts: payload}
        case types.ADD_NEWPOST:
            return [...state, payload]
        case types.GET_POSTS_BY_ID:
            return {...state, selected: payload}
        default:
            return state
    }
}

export default postReducer
