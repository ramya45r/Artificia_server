const Category = require("../models/Category");
const expressAsyncHandler = require("express-async-handler");

const CategoryCtrl = expressAsyncHandler(async (req, res, next) => {
  try {
    const category = await Category.findOne({ category: req.body.category });
    console.log('gggggg');
    if (category) {
      // If the category already exists
      return res.status(400).json({ error: "Category already exists" });
    }
    const newCategory = await Category.create({
      category: req.body.category,
    });

    res.json(newCategory);
  } catch (error) {
    res.json(error);
  }
});
const fetchallCategoryCtrl= expressAsyncHandler(async(req,res)=>{
  try {
      const allEcomcategory = await Category.find({});
      res.json(allEcomcategory);
    } catch (error) {
      res.json(error);
    }
})
module.exports = {
    CategoryCtrl,fetchallCategoryCtrl
};
