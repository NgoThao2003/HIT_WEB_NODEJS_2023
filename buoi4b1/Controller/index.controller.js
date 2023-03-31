const { log } = require("console");
const data = require("../Data/data");

const getHeader = (req,res) => {
    res.render("header");
}

const getFooter = (req,res) => {
    res.render("footer");
}

const getProduct = (req,res) => {
    console.log(data);
    res.render("product",{
        title: "My product",
        products: data,
    });
}

const getAddProduct = (req,res) => {
    console.log(data);
    res.render("add_product", {
        title: "Add product",
    });
}

module.exports = {
    getHeader,
    getFooter,
    getProduct,
    getAddProduct
}