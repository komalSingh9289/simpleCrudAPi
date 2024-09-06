const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/product.controller.js");

//get all products
router.get("/", getProducts);

//get single product
router.get("/:id", getSingleProduct);

//add a product
router.post("/", addProduct);

//update the product
router.put("/:id", updateProduct);

//delete the product
router.delete("/:id", deleteProduct);

module.exports = router;
