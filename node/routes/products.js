var ProductsModel = require("../models/products")
var router = require("express").Router()



router.get("/",async (req,res)=>{
    var pro = await ProductsModel.find()
    res.json(pro)
})

router.get("/create-product",(req,res)=>{
    res.send(`<form action="/products/save-product">
    <input type="text" name="title">
    <button>Submit</button>
</form>`)
})


router.get("/save-product",async (req,res)=>{
    var p = await ProductsModel.create(req.query)
    res.send("<h1>Product Created Successfully!</h1>")
})



module.exports = router