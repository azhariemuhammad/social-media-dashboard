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
        case types.ADD_NEW_COMMENT:
            return {...state, comments: [...state.comments, payload]}
        case types.EDIT_COMMENT:
            return {...state, comments: state.comments.map(item => {
                    if (item.id !== payload.id) {
                        return item
                    }
                    return {...item, ...payload}
                })}
        case types.DELETE_COMMENT:
            return {...state, comments: state.comments.filter(({id}) => id !== payload)}
        default:
            return state
    }
}

export default commentReducer
