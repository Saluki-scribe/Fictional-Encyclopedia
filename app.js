var express = require("express");
var cors = require("cors");
var terms = require("./yorsaTerms.json");
var app = express();

console.log(terms);


app.use(function(req, res, next) {

    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use(express.static("./public"));

//Any domain can make request for yorsa api

app.use(cors());

app.get("/yorsa-api", function(req, res) {

    res.json(terms);

});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;