const dbConn = require('../db');
const request = require('request');

class RecetasRepository {
    getReceta(id) {
        dbConn.query('SELECT nombre from receta WHERE id = ?', [id], (error, result, fields) => {
            if (error) throw error;

            return result;
        });
    }

    getIngredientes(id) {
        // console.log(id);
        dbConn.query('SELECT t2.nombre, t1.cantidad, t1.medida FROM ingrediente_receta t1 JOIN ingrediente t2 ON t1.ingrediente_id = t2.id WHERE t1.receta_id = ?', [id], (error, result, fields) => {
            if (error) throw error;
            console.log(result);
            return result;
        });
    }

    getPasos(id) {

    }
}



module.exports = new RecetasRepository();