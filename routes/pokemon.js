const { Router } = require('express')
// eslint-disable-next-line spaced-comment
const { /*getPokemonAll, */ getPokemon } = require('../controllers/pokemon')

const rutas = Router()

// rutas.get('/', getPokemonAll)
// rutas.get('/api/v1/pokemons/:idPokemon', getPokemon)
rutas.get('/:idPokemon', getPokemon)

module.exports = rutas
