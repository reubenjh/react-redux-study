const initialState = {
    isFethcing: false,
    isAuthenticated: false,
    user: null
} // does this need to be complex for thunk?

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                isFetching: true,
                isAuthenticated: false,
                user: null
            }
        case 'LOGIN_RECEIVED':
            return {
                isFetching: false,
                isAuthenticated: true,
                user: action.user
            }
        case 'LOGIN_ERROR':
            return {...initialState}
        case 'LOGOUT':
            return {...initialState}
        default:
            return state
    }
}