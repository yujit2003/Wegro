const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDatabase = () => {

    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb://localhost:27017/weegro", {
        useNewURLParser: true,
        useUnifiedTopology: true
    
    }).then((data => {
        console.log(`mongodb is connected to server: ${data.connection.host}`);
    })).catch((e) => {
        console.log(e);
    })

}

module.exports = connectDatabase