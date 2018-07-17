const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function userExists (user) {
    return db('users')
        .where(user)
        .first()
}

module.exports = {
    userExists
}