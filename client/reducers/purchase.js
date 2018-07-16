const initialState = []

export const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PURCHASE':
            return action.cart
        default:
            return state
    }
}