/* eslint-disable */
const { Router } = require('express');
const { getMoveById, getMoves, getMoveByType } = require("../controllers/habilidadesController.js");

const rutas= Router();

rutas.get('/movimientos-totales', getMoves);
rutas.get('/movimientos-tipo', getMoveByType);
rutas.get('/:id', getMoveById);

module.exports = rutas;
