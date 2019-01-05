const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {

if(err){
  return console.log("error connecting to mongodb");
}

  console.log("connected to mongodb");

var db = client.db('TodoApp');
  // db.collection("Todos").insertOne({
  //   text : 'gym session',
  //   completed : false
  // },(err,result)=>{
  //   if(err){
  //     return console.log("error inserting");
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name : 'vicky',
    age : 23,
    email : 'amarvadla27@gmail.com'
  },(err,result)=>{
    if(err){
      return console.log('error inserting');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  client.close();
});
