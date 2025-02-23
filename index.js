const express = require("express");
const  app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const customerInfo = require("./models/fromModel.js");
const mongoose = require("mongoose");
const ProjectInfoModel = require("./models/projectsDB.js");
const projectReview = require("./models/ProjectReviews.js");

app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"/public")));
app.engine("ejs",ejsMate);





app.listen(8080,()=>{
    console.log("stated");
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/PortFoliDB');
}

main().then(()=>{
    console.log("connected Succesfully");
}).catch((err)=>{
    console.log("error");
});













app.get("/",(req,res)=>{
    res.send("welcome to teach me anything");
})
app.get("/home",async (req,res,next)=>{
    const ProjectData = await ProjectInfoModel.find();
    console.log(ProjectData);
    res.render("home.ejs",{ProjectData});
})

app.post("/filled_form",async(req,res)=>{
        const userInfo = req.body.userInfo;
        const newDat = new customerInfo(userInfo);
        await newDat.save();
        console.log(userInfo);
        res.redirect("home");
})

app.post("/review/:id",async(req,res)=>{
    let {id} = req.params;
    let review = req.body.review;
    let Project = await ProjectInfoModel.findById(id);
    let newReview = new projectReview(review);
    console.log(newReview);
    Project.reviews.push(newReview);
    await Project.save();
    await newReview.save();
    console.log(newReview);
    res.redirect(`/projects/${id}`);
})
app.get("/projects/:id",async(req,res)=>{
    let {id} = req.params;
    console.log("-----------------------------------------------------------------------------");
    const project = await ProjectInfoModel.findById(id).populate("reviews");
    //console.log(project);
    res.render("projectPage.ejs",{project});
})

app.get("/addProject",(req,res)=>{

    res.render("FillProjectDetail.ejs");
})
app.post("/addProject" , async(req,res)=>{
    const ProjectInfo = req.body.ProjectInfo;
    console.log(ProjectInfo);
        const newProject = new ProjectInfoModel(ProjectInfo);
        await newProject.save();
        console.log(newProject);
        res.redirect("/home");
})


