'use strict'

const express = require('express');
const cors = require('cors');
// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
    // res.json({data: [1,2,3,4]})
    next()
});
app.use(express.json());
app.use(cors());

//Routes
app.use('/api', require('./routes/ingredients-route'));
//app.use('/api', artist_routes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


