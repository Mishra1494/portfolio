const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const ProjectInfo = new Schema({
    ProjectName : {
        type : String,
        required : true
    },
    ProjectDetail : {
        type : String,
        required : true
    },
    ProjectVideo : {
        type:String, 
        default:
            "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        set: (v) =>
            v === ""
              ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              : v,
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "projectReview"
        }
    ],
})


module.exports  = new mongoose.model("projectDetail","ProjectInfo")