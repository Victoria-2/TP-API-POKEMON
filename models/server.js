const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  rutas () {
    this.app.use('/api/v1/pokemons', require('../routes/pokemonRoutes.js')) // este seria el primer integrante

    // manejo de errores
    this.app.use('*', (req, res) => {
      res.status(400).json({ msg: 'Error.' })
    })
    this.app.use('*', (req, res) => {
      res.status(404).json({ msg: 'Error. Pagina no encontrada' })
    })
    this.app.use('*', (req, res) => {
      res.status(500).json({ msg: 'Internal Server Error' })
    })
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando el el puerto: ${this.port}`)
    })
  }
}

module.exports = Server
