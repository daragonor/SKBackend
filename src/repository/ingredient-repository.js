const ingredentModel = require('../models/ingredient')
const request = require('request')

class IngredientRepository {
    getIngredient(name, handler) {
        //TODO verificar la base de datos
        const options = {
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/' + ingredentModel.getIngredientId(name) + '/information?amount=100&unit=gram',
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'X-RapidAPI-Key': 'b6c64246d6mshc0fd2135a5928cdp1393edjsn8cf2695d839d'
            }
        };
        try {
            request(options, function (_err, _res, body) {
                let json = JSON.parse(body)
                handler(null, json)
            });
        } catch (error) {
            handler(error, null)
        }

    }
}

module.exports = new IngredientRepository()