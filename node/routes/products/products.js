const router = require('express').Router()
const ProductModel = require("../../models/products")


router.get("/",(req,res)=>{
    res.sendFile(__dirname+"/products.html")
})

router.get("/api",async (req,res)=>{
    var p = await ProductModel.find().sort({createdAt:-1})
    res.json(p)
})

router.get("/new",(req,res)=>{
    res.sendFile(__dirname+"/productform.html")
})

router.get("/api/new",async (req,res)=>{
    var p = await ProductModel.create(req.query)
    res.redirect("/products")
})



// Delete Product API
router.get("/delete",async (req,res)=>{
    var p = await ProductModel.findByIdAndDelete(req.query.id)
    res.json({message:"Product Deleted Succefully!"})
})




module.exports = router