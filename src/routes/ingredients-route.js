'use strict'

var express = require('express');
var repository = require('../repository/ingredient-repository');
var dbConn = require('../db');
var router = express.Router();

router.get('/:id', (req, res) => {
    var id = req.params.id;
    dbConn.query('SELECT * FROM ingrediente WHERE id = ?', [id], (error, result, field) => {
        if (error) throw error;
        console.log(result);
        return res.status(200).send({ error: false, data: result, message: 'Lista de ingredientes' });
    })
});

// router.get('/:name', (req, res) => {
//     var name = req.params.name;
//     repository.getIngredient(name, (error, resp) => {
//         res.status(200).send({ resp })
//     })
// });

// router.get('/users', (req, res) => {
//     dbConn.query('SELECT * FROM usuario', (error, result, fields) => {
//         if (error) throw error;

//         return res.status(200).send({ error: false, data: result, message: 'user list.' });
//     });
// });

// router.post('/recipe', (req, res) => {
//     var ing_1 = req.body.ing_1;
//     var ing_2 = req.body.ing_2;

//     dbConn.query('SELECT t1.receta_id FROM ingrediente_receta t1 JOIN ingrediente_receta t2 ON t1.receta_id = t2.receta_id WHERE t1.ingrediente_id = ' + ing_1 + ' AND t2.ingrediente_id = ' + ing_2, (error, result, fields) => {
//         if (error) throw error;
//         console.log(result);
//         return res.status(200)
//     })

//     console.log(ing_1, ing_2);

//     return res.status(200).send({});
// });

// router.get('/history/:id', (req, res) => {
//     var perfil_id = req.params.id;
//     dbConn.query('SELECT t2.nombre "nombre", t3.nombre "receta" FROM historial t1 , perfil t2, receta t3 WHERE t1.perfil_id = ' + perfil_id + ' AND t1.receta_id = t3.id', (error, result, fields) => {
//         console.log(result);
//         return res.status(200).send({ error: false, data: result, message: 'history list' });
//     });
// });



module.exports = router;