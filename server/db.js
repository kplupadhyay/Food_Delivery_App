const mongoose = require("mongoose")

const MONGO_URI = "mongodb+srv://upadhyaykapil61:9310316463@food.cf79syw.mongodb.net/?retryWrites=true&w=majority"

const connectDb = async()=>{
    await mongoose.connect(MONGO_URI )
    console.log("connected to database ")
}

module.exports = connectDb;