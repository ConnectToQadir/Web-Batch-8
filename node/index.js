const mongoose = require("mongoose")
const express = require("express")
const app = express()


// middlewares
app.use("/products",require("./routes/products"))


app.get("/",(req,res)=>{
    res.send("Home page")
})


async function dbConnect(){
    try {
        var con = await  mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-app")
        console.log("Connected!")
    } catch (error) {
        console.log("Not Connected!")
    }
}

dbConnect()

app.listen(4000)