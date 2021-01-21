"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.json({ message: 'Docker is easy 🐳' });
});
var port = process.env.PORT || 8080;
app.listen(port, function () { return console.log("app is listening on http://localhost:" + port + "!"); });
