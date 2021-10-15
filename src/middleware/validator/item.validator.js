const ItemValidator = {};
const { query, param, validationResult } = require('express-validator');

ItemValidator.SearchCheck = [
    query('q').isString().withMessage('the task must be of type string'),
    (req, res, next) => {
        // Validated ID
        if (!validationResult(req).isEmpty()) return res.status(422).json({ errors: validationResult(req).array() });
        
        // Continue process
        next();
    }
];

ItemValidator.ReadByIDCheck = [
    param('id').isString().withMessage('the task must be of type string'),
    (req, res, next) => {
        // Validated ID
        if (!validationResult(req).isEmpty()) return res.status(422).json({ errors: validationResult(req).array() });
        
        // Continue process
        next();
    }
];

module.exports = ItemValidator;