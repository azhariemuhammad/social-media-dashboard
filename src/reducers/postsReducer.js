import * as types from '../types';

const posts = []
function postReducer( state = posts, {type, payload}) {
    console.log('bangke')
    console.log(type, payload)
    switch (type) {
        case types.GET_POSTS:
            state = payload
            return state
        case types.ADD_NEWPOST:
            console.log([...state, payload])
            return [...state, payload]
        default:
            return state
    }
}

export default postReducer
