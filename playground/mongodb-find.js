const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {

if(err){
  return console.log("error connecting to mongodb");
}

  console.log("connected to mongodb");

var db = client.db('TodoApp');


db.collection('Users').find({name : 'amar'}).toArray().then((data)=>{

console.log(JSON.stringify(data,undefined,2));

},(err)=>{
  console.log('unable to find',err);
});

db.collection('Users').count().then((count)=>{
  console.log(count);
},(err)=>{

});

client.close();
});
