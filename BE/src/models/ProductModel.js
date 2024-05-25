const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String, required: true, unique: true
        },
        image: {
            type: String, required: true
        },
        type: {
            type: String, required: true
        },
        price: {
            type: Number, required: true
        },
        size:{
            type: String, required: true
        }
    }, {
        timestamps: true
    }

);

const Product = new mongoose.model("Product",productSchema);

module.exports = Product;