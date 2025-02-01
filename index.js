const express = require("express");
const  app = express();
const path = require("path");
const ejsMate = require("ejs-mate")
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"/public")));
app.engine("ejs",ejsMate);
app.listen(8080,()=>{
    console.log("stated");
})
app.get("/",(req,res)=>{
    res.send("welcome to teach me anything");
})
app.get("/home",(req,res)=>{
    res.render("home");
})