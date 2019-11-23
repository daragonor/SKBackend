'use strict';

var express = require('express');
var router = express.Router();
var repository = require('../repository/recetas-repository');
var dbConn = require('../db');

router.get('/', (req, res) => {
    var id = Math.floor(Math.random() * 7) + 1;
    dbConn.query('SELECT * FROM receta WHERE id = ?', [id], (error, result, fields) => {
        if (error) throw error;
        console.log(result);
        return res.status(200).send({ error: false, data: result, message: 'Receta random' });
    });
});

router.get('/:id/ingredientes', (req, res) => {
    var id = req.params.id;
    dbConn.query('SELECT t2.nombre, t1.cantidad, t1.medida FROM ingrediente_receta t1 JOIN ingrediente t2 ON t1.ingrediente_id = t2.id WHERE t1.receta_id = ?', [id], (error, result, fields) => {
        if (error) throw error;
        console.log(result);
        return res.status(200).send({ error: false, data: result, message: 'Lista de ingredientes' });
    });
});

router.get('/:id/pasos', (req, res) => {
    var id = req.params.id;
    dbConn.query('SELECT nro_paso, descripcion FROM pasos WHERE id = ?', [id], (error, result, field) => {
        if (error) throw error;
        console.log(result);
        return res.status(200).send({ error: false, data: result, message: 'Lista de pasos' });
    });
});

module.exports = router;