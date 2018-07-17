import request from 'superagent'
import {saveUserToken} from '../utils/auth'



export const navigate = (target) => {
  return {
    type: "NAVIGATE",
    target
  }
}

export const beerAdd = (id) => {
  return {
    type: "ADD_TO_CART",
    id
  }
}

export const beerRemove = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    id
  }
}

export const updateCart = (cart) => {
  return {
    type: "UPDATE_CART",
    cart
  }
}

export const purchase = (cart) => {
  return {
    type: "PURCHASE",
    cart
  }
}

export const logout = () => {
  return {
    type: "LOGOUT",
  }
}

//// thunk time

export const loginUser = (user) => {
  return dispatch => {
    dispatch(requestLogin())

    return request.post('/api/auth/login')
      .send(user)
      .then(res => {
        if(res.ok) {
          const authUser = saveUserToken(res.body.token)
          dispatch(receiveLogin(authUser))
        } else {
          console.log('trialling handling weird error case with reject')
          return Promise.reject(res.body.message)
        }
      })
      .catch((err) => {
        const status =  err.message
        const message = err.response.body.message
        dispatch(loginError(status, message))
      })
  }
}

export const requestLogin = () => {
  return {
    type: 'LOGIN_REQUEST'
  }
} 

export const receiveLogin = (user) => {
  return {
    type: 'LOGIN_RECEIVED',
    user
  }
}

export const loginError = (status, message) => {
  return {
    type: 'LOGIN_ERROR',
    status,
    message
  }
}


