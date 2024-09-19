const axios = require('axios')
const { request, response } = require('express')

const getPokemon = (req = request, res = response) => {
  const { idPokemon = '' } = req.params
  console.log(idPokemon)

  // axios.get(`https://pokeapi.co/api/v2/pokemon/?idPokemon=${idPokemon}`) // por algun motivo me duvuelve todos en vez de uno solo (?
  axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
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

module.exports = {
  getPokemon
}
