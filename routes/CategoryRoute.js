const express = require("express");

const CategoryRoute = express.Router();
const {
    CategoryCtrl,fetchallCategoryCtrl
} = require("../controllers/CategortCtrl");

CategoryRoute.post("/",CategoryCtrl);
CategoryRoute.get("/",fetchallCategoryCtrl);


module.exports = CategoryRoute;
