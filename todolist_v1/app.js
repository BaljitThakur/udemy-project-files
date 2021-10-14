const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
var items = ["Buy food", "Cook food", "Eat food"];
var workItems =[];

app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req, res){
    let day = date.getDate();
    res.render("list", {kindOfDay: day, newListItem: items});
});

app.get("/work", function(req, res){
    res.render("list", {kindOfDay: "Work", newListItem : workItems});
});

app.post("/", function(req, res){

    let item = req.body.nextitem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
