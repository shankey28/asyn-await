var express = require('express');
var bodyparser = require('body-parser');

var app = express();

var jsonparser = bodyparser.json();
var urlencodedparser = bodyparser.urlencoded({extended:false});

app.set('view engine','ejs');


app.get('/details',(req,res)=>{
    res.render('Details');
})

app.get('/username/:name',(req,res)=>{
    res.render('index',{Name:req.params.name,Addr:req.query.addr});
})

app.post('/person',urlencodedparser,(req,res)=>{
    res.render('person.ejs',{Name:req.body.name,Age:req.body.age});
})


app.listen(3003);