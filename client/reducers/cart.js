import { beers } from '../../data/beers'

const initialState = []

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newBeer = beers.find(beer => (beer.id == action.id))
            let cartBeer = state.find(beer => (beer.id == action.id))
            if (cartBeer) { // beer already exists in cart
                cartBeer.quantity++
                return [...state]
            } else { // beer doesn't exist in cart
                newBeer.quantity = 1
                return [...state, newBeer]
            }

        case 'UPDATE_CART':
            return action.cart

        default:
            return state
    }
}