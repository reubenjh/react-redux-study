import { combineReducers } from 'redux'

import { navigationReducer as navigation } from './navigation'
import { cartReducer as cart } from './cart'
import { purchaseReducer as purchase } from './purchase'
import { authenticationReducer as auth } from './auth'
import { errorReducer as err } from './err'

export default combineReducers({
  navigation,
  cart,
  purchase,
  auth,
  err
})

