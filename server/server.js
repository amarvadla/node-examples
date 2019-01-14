var mongoose = require('./db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var {Todo} = require('./models/todo');

var app = new express();

app.use(bodyParser.json());

app.post('/todo',(req,res)=>{

  var newTodo = new Todo({
    text : req.body.text,
    completedAt : req.body.completedAt,
    completed : req.body.completed
  });

  newTodo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.send(doc);
  });

});

app.get('/todo',(req,res)=>{

  Todo.find().then((data)=>{
    res.send({data});
  },(error)=>{
    res.status(400).send(error);
  });

});

app.listen(3000,()=>{
  console.log('started on 3000');
})
