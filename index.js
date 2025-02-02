const express = require("express");
const  app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const customerInfo = require("./models/fromModel.js");
const mongoose = require("mongoose");



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
app.get("/home",(req,res)=>{
    
    res.render("home");
})

app.post("/filled_form",async(req,res)=>{
        const userInfo = req.body.userInfo;
        const newDat = new customerInfo(userInfo);
        await newDat.save();
        console.log(userInfo);
        res.redirect("home");
})

app.get("/projects",(req,res)=>{
    const review = req.body.review;
    console.log(review);
    res.render("projectPage.ejs");
})