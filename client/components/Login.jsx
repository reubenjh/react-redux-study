import React from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../actions'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        e.preventDefault()
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.dispatch(loginUser(this.state))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                <input type="text" name='username' onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                <input type="password" name='password' onChange={this.handleChange}/>
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default connect()(Login)