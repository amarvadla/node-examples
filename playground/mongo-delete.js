const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{

  var db = client.db('TodoApp');

  db.collection('Users').deleteMany({age : 23}).then((result)=>{
    if(result)
      console.log(result);
  });

  client.close();
});
