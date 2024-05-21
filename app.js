var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//conectar a BD
//var connect = "postgres://macbook_fredy:123@localhost/foodMarket";

//MiddleWare 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extende: false}));

app.get('/',function(req,res){
    console.log('TEST');
});

//Servidor
app.listen(4000,function() { // (porta, hostname)
    console.log('Server Started on port 4000');
});