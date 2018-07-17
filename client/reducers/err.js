const initialState = {}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                status: action.status,
                message: action.message
            }
        default:
            return {...initialState}
    }
}

