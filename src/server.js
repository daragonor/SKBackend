'use strict'

const express = require('express');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

//Routes
app.use('/api', require('./routes/ingredients-route'));
//app.use('/api', artist_routes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


