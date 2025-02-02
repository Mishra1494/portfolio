const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const ProjectReview = new Schema({
    name : String,
    comments : String,
    rating : {
        type : Number 
    }
}) 


module.exports = new mongoose.model("projectReview",ProjectReview);
