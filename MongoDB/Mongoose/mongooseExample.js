const mongoose = require('mongoose');

//This is like defining an interface, so now we can have 
//models like nodeCouseModel which will implement this
const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean
})


//now we have a model(lets just think of it as a class)
const Course = mongoose.model('Course', courseSchema);



//This is like an object that can be pushed into the database, in mongodb this is called a document
const course = new Course({
  name: "Node.js course",
  author: "Shanur",
  tags:["node", "js"]
  isPublished: true
})
