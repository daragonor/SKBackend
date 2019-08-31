'use strict'

var express = require('express');
var repository = require('../repository/ingredient-repository');
var router = express.Router();

router.get('/ingredients/:name', (req, res) => {
    var name = req.params.name;
    repository.getIngredient(name, (error, resp) => {
        res.status(200).send({
            'name': resp.name,
            'calories': resp.nutrition.nutrients[0].amount,
            'satured_fat': resp.nutrition.nutrients[2].amount,
            'carbohydrates': resp.nutrition.nutrients[3].amount,
            'sugar': resp.nutrition.nutrients[4].amount
        })
    })
});


module.exports = router;