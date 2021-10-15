const axios = require('axios');
const MercadoLibreService = {};

// Handle Search
MercadoLibreService.Search = async (query) => {
    // Initial Data
    let data = {
        author: {
            name: "",
            lastname: "",
        },
        categories: [],
        items: [],
    }

    // Handle Search - Api MercadoLibre
    return await axios.get(`${process.env.API_MERCADOLIBRE}/sites/MLA/search?q=${query}`).then(({data: {results = []}}) => {
        // Map Data Items
        data.items = results.map(({id = "", title = "", price: amount = 0.0, currency_id: currency, thumbnail: picture = "", address: {state_name = ""}, condition = "", shipping: { free_shipping = false} }) => {
            return {
                id,
                title,
                price: {
                    currency,
                    amount,
                    decimals: 16,
                },
                picture,
                state_name,
                condition,
                free_shipping,
            }
        })

        // Return Data Map
        return data;
    }).catch((err) => {
        console.error(`${new Date()} MercadoLibreService.Search: ${err}`)
        return data
    });

}

// Get Item By ID
MercadoLibreService.ReadByID = async (id) => {
    // Initial Data
    let data = {
        author: {
            name: "",
            lastname: "",
        },
        item: null
    }

    // Get Data Item By ID - Api MercadoLibre
    const getItemData = await axios.get(`${process.env.API_MERCADOLIBRE}/items/${id}`).then(({data}) => {
        return data;
    }).catch((err) => {
        console.error(`${new Date()} MercadoLibreService.ReadByID: ${err}`)
        return null
    });
    
    // Get Data Description By ID - Api MercadoLibre
    const getItemDataDescription = await axios.get(`${process.env.API_MERCADOLIBRE}/items/${id}/description`).then(({data}) => {
        return data;
    }).catch((err) => {
        console.error(`${new Date()} MercadoLibreService.ReadByID: ${err}`)
        return null
    });

    // Send Promise Request Api
    return Promise.all([getItemData, getItemDataDescription]).then(([itemData, itemDescription]) => {
        // Verify Exist Data
        if (!itemData) return null;

        // Map Data Item
        const { id = "", title = "", price: amount = 0.0, currency_id: currency, pictures = [], condition = "", shipping: { free_shipping = false}, sold_quantity = 0 } = itemData;
        const { plain_text: description } = itemDescription;
        data.item = {
            id,
            title,
            price: {
                currency,
                amount,
                decimals: 16,
            },
            picture: (pictures[0] && pictures[0].secure_url) || null,
            condition,
            sold_quantity,
            description,
        }

        // Return Data Map
        return data;
    }).catch((err) => {
        console.error(`${new Date()} MercadoLibreService.ReadByID: ${err}`)
        return data
    });
}



module.exports = MercadoLibreService;