const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{

  if(err){
    return console.log(err);
  }

  var db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5c3238972f6f40dca8faefff')
  },{
    $set :{
    name : 'vicky'
  }
},{
  returnOriginal : false
}).then((result)=>{
  console.log(result);
});

  client.close();

});
