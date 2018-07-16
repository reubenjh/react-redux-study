import React from 'react'
import {connect} from 'react-redux'
import { navigate, logout } from '../actions';

const Header = (props) => {
  return (
    <div>
      <h1>
        <span className='fa fa-beer' />
        {' '}Sweet As Beers{' '}
        <span className='fa fa-beer' />
      </h1>
      {!props.auth.isAuthenticated && <button onClick={props.goToLogin}>Login</button>}
      {!props.auth.isAuthenticated && <button onClick={props.goToRegister}>Register</button>}
      {props.auth.isAuthenticated && <button onClick={props.logoutUser}>Logout</button>}
    </div>
  )
}

const mapStateToProps = state => state.auth
const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(navigate('login')),
  goToRegister: () => dispatch(navigate('register')),
  logoutUser: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

// errors in here

// import {loginUser} from '../actions'
// login: (user) => dispatch(loginUser(user))