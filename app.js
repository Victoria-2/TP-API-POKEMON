require('dotenv').config()

const Server = require('./models/server')

const Servidor = new Server()
Servidor.listen()
