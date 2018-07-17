const jwt = require('jsonwebtoken')
const expiry = {expiresIn: '1d'}

function issue(req, res) {
    const user = req.body
    const secret = process.env.JWT_SECRET
    const token = createToken(user, secret)
    res.status(200)
        .json({
            message: 'Authentication successful',
            token
        })
}

function createToken (user, secret) {
    return jwt.sign(
        user,
        secret,
        expiry
    )
}

module.exports = issue