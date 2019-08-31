class Ingredient {
    constructor() { }
    getIngredientId(name) {
        var map = {
            'Beterraga': '11080',
            'Papa Rosada': '11362',
            'Zanahorias': '11124',
            'Arvejas': '11304',
            'Huevos': '1123',
            'Vainitas': '11052',
            'Cebolla': '11282',
            'Limón': '9150',
            'Aji Amarillo': '11819',
            'Palta': '9037'
        }
        return map[name]

    }
}

module.exports = new Ingredient()