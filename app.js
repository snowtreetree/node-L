var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/jsonp',function(req,res,next){  
    res.jsonp({status:'jsonp'});  
 });  
   
 app.get('/json',function(req,res,next){   
     res.jsonp({status:'json'});  
 });  

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('starting...');
});