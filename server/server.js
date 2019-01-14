var mongoose = require('./db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var {Todo} = require('./models/todo');

var app = new express();

app.use(bodyParser.json());

app.post('/todo',(req,res)=>{

  var newTodo = new Todo({
    text : req.body.text,
    completedAt : req.body.completedAt
  });

  newTodo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.send(doc);
  });

});

app.listen(3000,()=>{
  console.log('started on 3000');
})
