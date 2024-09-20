const axios = require('axios')
const { request, response } = require('express')

const getPokemonAll = (req = request, res = response) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50') // muestra 50 pokemon
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
        msg: 'Error',
        error
      })
    })
}

const getPokemonName = (req = request, res = response) => {
  const { namePokemon = '' } = req.params
  console.log(namePokemon)

  axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    .then((response) => {
      const { data } = response // tener que responda el nombre, el id, la vida y el tipo o algo asi
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
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getPokemonAll,
  getPokemonId,
  getPokemonName
}
