const mongoose = require("mongoose")


async function dbConnect(){
    try {
        var con = await  mongoose.connect("mongodb://127.0.0.1:27017/college")
        console.log("Connected!")
    } catch (error) {
        console.log("Not Connected!")
    }
}

dbConnect()