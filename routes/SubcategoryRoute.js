const express = require("express");

const SubcategoryRoute = express.Router();
const {
    createsubCategoryCtrl,fetchsubcategoriesCtrl
} = require("../controllers/SubcategoryCtrl");

SubcategoryRoute.post("/",createsubCategoryCtrl);
SubcategoryRoute.get("/",fetchsubcategoriesCtrl);


module.exports = SubcategoryRoute;
