const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectReview = new Schema({
    name : String,
    comments : String,
    rating : {
        type : Number ,
        min : 1,
        max : 5,
    },
}) 


module.exports = new mongoose.model("projectReview",ProjectReview);
