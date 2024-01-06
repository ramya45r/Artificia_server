const mongoose = require("mongoose");
const SubcategorySchema = new mongoose.Schema(
  {
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    subcategory: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const SubCategory = mongoose.model("SubCategory", SubcategorySchema);
module.exports = SubCategory;
