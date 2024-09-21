const { Router } = require('express')
// eslint-disable-next-line spaced-comment
const { getPokemonId, getPokemonName, getPokemonAllQuery } = require('../controllers/pokemon')

const rutas = Router()

rutas.get('/', getPokemonAllQuery) // todos con Query param
rutas.get('/:idPokemon', getPokemonId) // por un parametro
rutas.get('/:namePokemon', getPokemonName) // por un parametro

module.exports = rutas
