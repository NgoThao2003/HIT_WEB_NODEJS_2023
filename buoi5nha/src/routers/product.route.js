const express = require('express');

const router = express.Router();


const {
    getProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
} = require("../cotrollers/product.controller");


router.get("/products", getProducts);
router.get("/products/:productId", getProducts);
router.post("/products", createProduct);
router.get("/products/:productId", getProductById);
router.put("/products/:productId", updateProductById);
router.delete("/products/:productId", deleteProductById)

module.exports = router;