const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    title:String,
    price:Number,
    stock:Number
},{timestamps:true})


module.exports = mongoose.model("products",productsSchema)