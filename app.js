const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/mod_date.js")
const app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var newItems=["Dev","contests"];
app.get("/",function(req,res){
  // res.send("this too bitchhhh");
  var day=date();
  res.render("list",{day: day, newItems: newItems});
});

app.post("/",function(req,res){
  var newItem=req.body.new_list_item;
  newItems.push(newItem);
  // console.log(newItem);
  res.redirect("/");
});

app.listen(6969,function(req,res){
  // console.log("works bitchhh");
})
