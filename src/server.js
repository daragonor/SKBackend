'use strict'

const express = require('express');
const cors = require('cors');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// CORS
app.use(cors());

//Routes
app.use('/api', require('./routes/ingredients-route'));
//app.use('/api', artist_routes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});