import * as types from '../types';

const initialState = {
    comments: [],
    selected: {}
}
function commentReducer( state = initialState, {type, payload}) {
    console.log('bangke comments')
    console.log(type, payload)
    switch (type) {
        case types.GET_COMMENTS_BY_ID:
            return {...state, comments: payload}
        // case types.ADD_NEWPOST:
        //     return [...state, payload]
        // case types.GET_POSTS_BY_ID:
        //     return {...state, selected: payload}
        default:
            return state
    }
}

export default commentReducer
