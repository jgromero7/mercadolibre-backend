const express = require('express');

// Config Server
const config = require('./src/server');

// Initialization Server Config
const app = config(express());

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});