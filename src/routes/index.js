const express = require('express');
const router = express.Router();

// Controllers
const ItemCotroller = require('../api/controllers/ItemsControllers');

// Import Middleware
const ItemValidator = require('../middleware/validator/item.validator');

module.exports = app => {
    
    // Routes Items
    router.get('/items', [ItemValidator.SearchCheck], ItemCotroller.Search);
    router.get('/items/:id', [ItemValidator.ReadByIDCheck], ItemCotroller.ReadByID);

    app.use('/api', router);
}