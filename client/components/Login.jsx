import React from 'react'
import { connect } from 'react-redux'

const Login = () => {
    return (
        <form>
            <label>
                Username: 
                <input type="text"/>
            </label>
            <label>
                Password: 
                <input type="text"/>
            </label>
            <input type="submit"/>
        </form>
    )
}

// needs onSubmit

export default connect()(Login)