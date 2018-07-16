import { combineReducers } from 'redux'

import { navigationReducer as navigation } from './navigation'
import { cartReducer as cart } from './cart'
import { purchaseReducer as purchase } from './purchase'
import { authenticationReducer as isAuthenticated } from './auth'

export default combineReducers({
  navigation,
  cart,
  purchase,
  isAuthenticated
})

