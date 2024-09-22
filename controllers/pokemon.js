const axios = require('axios')
const { request, response } = require('express')

const getPokemonAllQuery = (req = request, res = response) => {
  const { offset = '', limit = '' } = req.query
  console.log(offset, limit)

  /* if (isNaN(Number(offset)) || isNaN(Number(limit)) || Number(offset) < 1 || Number(limit) < 1 || !(Number.isInteger(offset)) || !(Number.isInteger(limit))) {
    return res.status(400).json({ msg: 'Debe ingresar numeros validos para los limites!' })
  } */

  const filtro1 = (offset) ? `?offset=${offset}` : '?offset=0'
  const filtro2 = (limit) ? `&limit=${limit}` : '&limit=50' // muestra 50 pokemon

  axios.get(`https://pokeapi.co/api/v2/pokemon/${filtro1}${filtro2}`)
    .then((response) => {
      const { data } = response
      console.log(data)
      res.status(200).json({
        msg: 'OK',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

const getPokemonId = (req = request, res = response) => {
  const { idPokemon = '' } = req.params
  console.log(idPokemon)

  if (typeof idPokemon === 'number') {
    if (isNaN(Number(idPokemon)) || Number(idPokemon) < 0 || !(Number.isInteger(idPokemon))) {
      return res.status(400).json({ msg: 'Debe ingresar un numero valido positivo para buscar el Pokemon!' })
    }
  }

  axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((response) => {
      const { data } = response
      console.log(data)
      res.status(200).json({
        msg: 'OK',
        data: {
          id: data.id,
          name: data.name,
          xp: data.base_experience,
          sprite: data.sprites.front_default
        }
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        msg: 'Error, pokemon no encontrado',
        error
      })
    })
}

module.exports = {
  getPokemonAllQuery,
  getPokemonId
}
