const { Router } = require('express')
// eslint-disable-next-line spaced-comment
const { getPokemonAll, getPokemonId, getPokemonName } = require('../controllers/pokemon')

const rutas = Router()

rutas.get('/', getPokemonAll) // todos
rutas.get('/:idPokemon', getPokemonId) // por un parametro
rutas.get('/:namePokemon', getPokemonName) // por un parametro
// rutas.get('/:idPokemon', getPokemon) //con query params

module.exports = rutas
