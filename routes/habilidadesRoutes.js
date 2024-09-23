/* eslint-disable */
import { Router } from "express";
import { getMoveById, getMoves, getMoveByType } from "../controllers/pokemonControllers.js";

const rutas= Router();

rutas.get('/movimientos-totales', getMoves);
rutas.get('/movimientos-tipo', getMoveByType)
rutas.get('/:id', getMoveById);

export default rutas;
