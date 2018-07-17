const initialState = "listing"

export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NAVIGATE':
            return action.target
        case 'ADD_TO_CART':
            return 'cart'
        case 'LOGIN_RECEIVED': 
            return 'listing'
        default:
            return state
    }
}