# ![](https://user-images.githubusercontent.com/1838420/82833707-bec46580-9eb6-11ea-88d8-2dd033cc742d.png) POKE-API ![](https://user-images.githubusercontent.com/1838420/82833707-bec46580-9eb6-11ea-88d8-2dd033cc742d.png)
Esta Api consume la API de Pokemon [Poke-Api](https://pokeapi.co/)
<br>
Presione para ir a la [URL de Render](https://tp-api-pokemon.onrender.com)

## Pokemons
* Primer endpoint
     - Por defecto, trae los primeros 50 pokemones de la API, indicando su nombre y la URL para acceder a los mismos
       > [https://tp-api-pokemon.onrender.com/api/v1/pokemons/](https://tp-api-pokemon.onrender.com/api/v1/pokemons/)
       ```
       {
         "msg": "OK",
         "data": {
         "count": 1302,
         "next": "https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50",
         "previous": null,
         "results": [
         {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
          },
                 [...]
         {
          "name": "diglett",
          "url": "https://pokeapi.co/api/v2/pokemon/50/"
          }
  
       ```
     - En este endpoint, si le pasamos query params, va a filtrar y te va a traer dentro del rango establecido la cantidad de pokemones que deseemos, también indicando su nombre y la URL para acceder a los mismos
       > [https://tp-api-pokemon.onrender.com/api/v1/pokemons/?offset=1&limit=10](https://tp-api-pokemon.onrender.com/api/v1/pokemons/?offset=1&limit=10)
> [!NOTE]
> `offset` es en donde se tiene que poner a partir de que pokemon se muestra; 
> `limit` es la cantidad de pokemones que se quiere mostrar

       
        {
        "msg": "OK",
        "data": {
        "count": 1302,
        "next": "https://pokeapi.co/api/v2/pokemon/?offset=11&limit=10",
        "previous": "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1",
        "results": [
          {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
          },
                [...]
         {
          "name": "metapod",
          "url": "https://pokeapi.co/api/v2/pokemon/11/"
        }
       
<br> </br>
* Segundo endpoint
     - Este se utiliza con 'param id', si le pasamos un ID o el nombre del pokemon en específico, va a traer su ID, nombre, la experiencia por ganar un combate contra él y su sprite de frente
       > [https://tp-api-pokemon.onrender.com/api/v1/pokemons/1](https://tp-api-pokemon.onrender.com/api/v1/pokemons/1)
       ```
       {
          "msg": "OK",
          "data": {
          "id": 1,
          "name": "bulbasaur",
          "xp": 64,
          "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          }
        }
       ```
       ![](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png)
       <br> </br>
       > [https://tp-api-pokemon.onrender.com/api/v1/pokemons/pikachu](https://tp-api-pokemon.onrender.com/api/v1/pokemons/pikachu)
       ```
       {
          "msg": "OK",
          "data": {
          "id": 25,
          "name": "pikachu",
          "xp": 112,
          "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          }
        }
       ```
       ![](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)

<br>


## Habilidades
* El primer endpoint te trae los distintos movimientos de combate que pueden aprender los pokemones de distintos tipos
> https://tp-api-pokemon.onrender.com/movimientos/movimientos-totales
* El segundo endpoint filtra los ataques o movimientos por ID, te devuelve el nombre del movimientos, su id, y que pokemones pueden aprenderlo
> (https://tp-api-pokemon.onrender.com/movimientos/3)
* El tercer endpoint te filtra los ataques por tipo (agua, fuego, psiquico, etc...), te devuelve los ataques que aprenden los pokemones por tipo
> (https://tp-api-pokemon.onrender.com/movimientos/movimientos-tipo?type=fire)

<br>

