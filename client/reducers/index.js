import { combineReducers } from 'redux'

import { navigationReducer as navigation } from './navigation'
import { cartReducer as cart } from './cart'
import { purchaseReducer as purchase } from './purchase'

export default combineReducers({
  navigation,
  cart,
  purchase
})

