const express = require("express");

const SubcategoryRoute = express.Router();
const {
    CategoryCtrl,fetchallCategoryCtrl
} = require("../controllers/CategortCtrl");

SubcategoryRoute.post("/",CategoryCtrl);
SubcategoryRoute.get("/",fetchallCategoryCtrl);


module.exports = CategoryRoute;
