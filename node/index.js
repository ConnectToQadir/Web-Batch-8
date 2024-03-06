const mongoose = require("mongoose")
const express = require("express")
const path = require('path')


// creating application from express
const app = express()


// middlewares
app.use("/products",require("./routes/products/products"))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})


async function dbConnect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-app')
        console.log("Database Connected!")
    } catch (error) {
        console.log("Not Connected!")
    }
}

dbConnect()

app.listen(4500,()=>{
    console.log("Server is running on port 4500 ...")
})