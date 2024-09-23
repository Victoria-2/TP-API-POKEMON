/* eslint-disable */
import axios from "axios";

const getMoves= async(req, res)=> {
    const url= 'https://pokeapi.co/api/v2/move?limit=50';

    try {
        const respuesta = await axios.get(url);
        const movimientos = respuesta.data.results;

        
        const movimientosTotales = movimientos.map(m => m.name);
        
        res.json(movimientosTotales);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg: "Error al obtener los movimientos",
            error: error.message
        });
    }
};


const getMoveById = async (req, res)=> {
    const { id } = req.params; 
    const url = `https://pokeapi.co/api/v2/move/${id}`;

    try {
        const respuesta = await axios.get(url);

        const ataqueNombre = respuesta.data.name;
        
        const pokemonLista = respuesta.data.learned_by_pokemon;

        const pokemonNombres = pokemonLista.map(p => p.name);

        res.json({
            id,
            ataqueNombre,
            pokemonNombres
        });

    } catch (error) {
        res.status(400).json({
            msg: "Error al obtener los pokemones",
            error: error.message
        });
    }
};

const getMoveByType = async (req, res) => {
    const { type } = req.query;
    const url = 'https://pokeapi.co/api/v2/move?limit=100';

    try {
        const respuesta = await axios.get(url);
        const movimientos = respuesta.data.results;

        
        const movimientosDetalles = await Promise.all(
            movimientos.map(async (mov) => {
                try {
                    const detalleMovimiento = await axios.get(mov.url);
                    return detalleMovimiento.data;
                } catch (error) {
                    console.error(`Error al obtener detalles del movimiento ${mov.name}:`, error.message);
                    return null;
                }
            })
        );

        
        const movimientosValidos = movimientosDetalles.filter(mov => mov !== null);

        const movimientosFiltrados = movimientosValidos.filter((mov) => {
            let coincide = true;
            if (type) coincide = coincide && mov.type.name.toLowerCase() === type.toLowerCase();
            return coincide;
        });

       
        const movimientosConDetalles = movimientosFiltrados.map(mov => ({
            name: mov.name,
            type: mov.type ? mov.type.name : 'No type',
        }));

        res.json(movimientosConDetalles);

    } catch (error) {
        res.status(400).json({
            msg: "Error al obtener los movimientos",
            error: error.message
        });
    }
};


export {
    getMoveById,
    getMoves,
    getMoveByType
};