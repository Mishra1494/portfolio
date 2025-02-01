const mongoose = require("mongoose");
const  Customer = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    message : {
        type : String,
    }
})

module.exports = new mongoose.model("customer",Customer);
 