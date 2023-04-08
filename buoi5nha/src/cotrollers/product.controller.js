const { log } = require('console');
const data = require('../data/data');

const getProducts = (req, res) => {
    let products = data;

    const { price } = req.query;

    if( price ) {
        products = data.filter( product => product.price == price );
    }

    res.json({
        products
    })
}

const getProduct = (req, res) => {
    let products = data;
    const { productId } = req.params;

    let product = data.find( product => product.id == productId);

    res.json({
        product
    })
}

const createProduct = (req, res) => {
    let products = data;
    const product = req.body;
    //console.log(product);
    products.push(product);

    res.json({
        products: product,
    });
}

const getProductById = (req, res) => {
    let products = data;

   // console.log(req.params.productId);

    const product = products.find((item, index) => {
        return item.id == req.params.productId;
    });

    if(product) {
         res.json({
            product,
        });
    } else {
        res.json({
            msg: "no product",
        });
    }
}

const updateProductById = (req, res) => {
    const products = data;
    const { productId } = req.params;
    const newProduct = req.body;
    // console.log(productId);
    // console.log(req.body);

    const newProducts = products.map(item => {
        if(item.id == productId) {
            return newProduct;
        }
        return item;
    });

    res.json({
        pruduct: newProducts,
    })
}   

const deleteProductById = (req, res) => {
    let products = data;
    const { productId } = req.params; 
 
    products = products.filter(item => {
        return item.id != productId;
    })

    res.json({
        products: products
    })
} 

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
}

