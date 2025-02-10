const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI=process.env.MONGO_URI;

const connectDB = async () => {
    mongoose.connect(MONGO_URI, {

    }).then(() => {
        console.log("DB connection successful");
    }).catch((error)=>{
        console.log("Issue in DB connection");
        console.log(error);
        process.exit(1);
    })
}

module.exports = connectDB;