const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Import Routes
const routes = require('../routes');

module.exports = app => {
    let fileEnvPath = `${__dirname}/../../.env`;
    // Define File Path
    if (process.platform === "win32") fileEnvPath = `${__dirname}\\..\\..\\.env`;

    // Initialization DotEnv
    require('dotenv').config({path: fileEnvPath});

    // Settings
    app.set('port', process.env.PORT || 8080);

    // middlerware
    app.use(morgan('dev'));    
    app.use(cors()); // This is CORS enable for all Origin! 
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());


    // Router
    routes(app);

    return app;
}