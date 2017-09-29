var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var terms = require("./yorsaTerms.json");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {

    console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)} `);
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