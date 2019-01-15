var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var id = '5c3cb128a6a6431f70b0aea8'


// Todo.find({
//   _id : id
// }).then((res)=>{
//     console.log(res);
// },(e)=>{
//   console.log(e);
// });
//
// Todo.findOne({
//   completed : false
// }).then((res)=>{
//     console.log(res);
// },(e)=>{
//   console.log(e);
// });

Todo.findById(id).then((res)=>{
  console.log(res);
},(e)=>{
  console.log(e);
});
