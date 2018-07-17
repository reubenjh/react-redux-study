const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

// auth routes
server.use('/api/auth', require('./routes/auth'))

module.exports = server