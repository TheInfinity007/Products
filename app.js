var express = require("express");
var ejs = require("ejs");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

var  mainRoutes = require("./routes/index");

mongoose.set("useUnifiedTopology",  true);
mongoose.connect("mongodb://localhost/article", {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(mainRoutes);



app.listen(3000 , ()=>{
	console.log("The Server is running at 'localhost:3000'");
});