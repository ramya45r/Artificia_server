const expressAsyncHandler = require("express-async-handler");
const SubCategory = require("../models/Subcategory");

//Create subcategories
const createsubCategoryCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await SubCategory.findOne({
      Ecomsubcategory: req.body.subcategory,
    });
    if (subcategory) {
      return res.status(400).json({ error: "subcategory already exists" });
    }

    const newsubcategory = await SubCategory.create({
      category: req.body.category,
      subcategory: req.body.subcategory,
    });
    res.json(newsubcategory);
  } catch (error) {
    res.json(error);
  }
});

//fetch subcategory
const fetchsubCategoriesCtrl = expressAsyncHandler(async (req, res) => {
    try {
      const subcategory = await EcomsubCategory.find({}).populate("Ecomcategory");
  
      res.json(subcategory);
    } catch (error) {
      res.json(error);
    }
  });
module.exports = {
  createsubCategoryCtrl,
  fetchsubcategoriesCtrl,
};
