var mongoose = require('./db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var {Todo} = require('./models/todo');
var {ObjectId} = require('mongodb').ObjectId;
var app = new express();

const port = process.env.PORT || 3000;

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

app.get('/todo/:id',(req,res)=>{

  var id = req.params.id;

  if(!ObjectId.isValid(id)){
    return res.status(404).send("unable to fetch id");
  }

  Todo.findById(id).then((data)=>{
      if(!data){
        return res.status(404).send("can not fetch the id");
      }
      res.send({data});
  }).catch((e)=>{
    res.status(404).send("error occured")
  });

});


app.listen(port,()=>{
  console.log(`started up in ${port}`);
})
