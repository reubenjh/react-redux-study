const initialState = {
    isAuthenticated: false
} // does this need to be complex for thunk?

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return state // to write
        default:
            return state
    }
}