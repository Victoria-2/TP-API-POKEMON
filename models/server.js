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
    this.app.use('/api/v1/pokemons', require('../routes/pokemon.js')) // 1er integrante - Maria Victoria

    this.app.use('/movimientos', require('../routes/habilidadesRoutes.js')) // 2do integrante - Emiliano
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando el el puerto: ${this.port}`)
    })
  }
}

module.exports = Server
