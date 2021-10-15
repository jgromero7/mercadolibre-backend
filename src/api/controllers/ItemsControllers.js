const ItemController = {}

// Import Services
const MercadoLibreService = require('../../services/mercadolibre.service');

// Handle Search
ItemController.Search = async (req, res) => {
    // Get Q Query
    const { q: query} = req.query;

    // Search Item
    const data = await MercadoLibreService.Search(query);

    // Return Data
    return res.status(200).send(data);
}

// Get Item By ID
ItemController.ReadByID = async (req, res) => {
    // Get ID Param
    const { id } = req.params;

    // Get Data Item
    const data = await MercadoLibreService.ReadByID(id);

    // Return 404 ID Not Found
    if (data === null) return res.status(404).send(`Item with id ${id} not found`);

    // Return Data
    return res.status(200).send(data);
}


module.exports = ItemController;