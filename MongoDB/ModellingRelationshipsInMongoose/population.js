const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(()=> console.log("connected to MongoDB ..."))
  .catch(err=>console.err('Could not connect to MongoDB ...', err))
  
  
  
const Author = mongoose.model('Author', new mongoose.Schema({
  name:  String,
  bio: String,
  website: String
}));




//Only the properties defined will be persisted in the database
const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  //now we will add a reference to author for this course
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author' //name of the target collection
  }
}));


async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website
  })
  
  
  const result = await author.save();
  console.log(result);
}


async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    .select('name');
  console.log(courses);
}
