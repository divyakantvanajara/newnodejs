var express = require("express");
var app = express();

//http://localhost:5000/add/10/3
app.get("/add/:num1/:num2",function(request,response){
    var num1 = request.params.num1;
    var num2 = request.params.num2;
    var result = num1 + num2;
    response.send("addition = " + result);
});

app.all("*",function(request,response){
    response.send("no such a route defined....");
});

var portno = 5000;
app.listen(portno);
console.log("ready to accept request on server");