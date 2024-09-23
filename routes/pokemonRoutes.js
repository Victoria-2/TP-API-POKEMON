const { Router } = require('express')
// eslint-disable-next-line spaced-comment
const { getPokemonId, getPokemonAllQuery } = require('../controllers/pokemonController')

const rutas = Router()

rutas.get('/', getPokemonAllQuery) // todos con Query param
rutas.get('/:idPokemon', getPokemonId) // por un parametro, numero o string

module.exports = rutas
