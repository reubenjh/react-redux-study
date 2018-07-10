import { combineReducers } from 'redux'

import { navigationReducer as navigation } from './navigation'
import { cartReducer as cart } from './cart'

export default combineReducers({
  navigation,
  cart
})

