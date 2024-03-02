const mongoose = require("mongoose")


// Schema (Table Structure)
var productSchema = new mongoose.Schema({
    title:String,
    price:Number,
    stock:Number
})


// collection -> model
const ProductsModel = mongoose.model("products",productSchema)


module.exports = ProductsModel