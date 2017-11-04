// importing modules
const express = require("express");

// app is a instance of express 
// to run express on top of nodejs need to run app instance 
const app = express();

// basic http get request on '/' 
app.get('/', function(req, res) {
    res.send("Hello World!");
});

// server port listen on 8080
app.listen(8080, function() {
    console.log('Server is running on port 8080');
});