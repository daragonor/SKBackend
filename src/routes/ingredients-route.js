'use strict'

var express = require('express');
var repository = require('../repository/ingredient-repository');
var router = express.Router();

router.get('/ingredients/:name', (req, res) => {
    var name = req.params.name;
    repository.getIngredient(name, (error, resp) => {
        res.status(200).send({ resp })
    })
});


module.exports = router;