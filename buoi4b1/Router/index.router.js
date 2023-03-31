const express = require("express");

const router = express.Router();

const IndexController = require("../Controller/index.controller");

router.get("/header", IndexController.getHeader);

router.get("/footer", IndexController.getFooter);

router.get("/product", IndexController.getProduct);

router.get("/addproduct", IndexController.getAddProduct);

module.exports = router;
