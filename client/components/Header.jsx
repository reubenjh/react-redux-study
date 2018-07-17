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
      {props.err.message && <p className='error'>{props.err.message}</p>}
      {!props.auth.isAuthenticated && <button onClick={props.goToLogin}>Login</button>}
      {!props.auth.isAuthenticated && <button onClick={props.goToRegister}>Register</button>}
      {props.auth.isAuthenticated && <button onClick={props.logoutUser}>Logout</button>}
    </div>
  )
}

const mapStateToProps = state => ({auth:state.auth, err:state.err})
const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(navigate('login')),
  goToRegister: () => dispatch(navigate('register')),
  logoutUser: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)


// import {loginUser} from '../actions'
// login: (user) => dispatch(loginUser(user))