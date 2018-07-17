const express = require('express')
const {userExists} = require('../db/db')
const issue = require('../auth/jwt') 
const router = express.Router()

router.post('/login', login, issue)

function login(req, res, next) {
    let rawUser = req.body
    userExists(rawUser)
        .then((user) => {
            if (user) {
                req.body = user // inserting user with id
                next()
            }
            else {
                res.status(403)
                    .json({
                        message: 'Failed login'
                    })
            }
        })
        .catch(err => {
            res.status(400)
                .json({
                    errorType: 'DATABASE_ERROR',
                    message: err.message
                })
        })
}

module.exports = router