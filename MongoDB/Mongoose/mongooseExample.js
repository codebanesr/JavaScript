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





// using async await to save the document to the database;
async function saveCourse(){
  //This is like an object that can be pushed into the database, in mongodb this is called a document
  const course = new Course({
    name: "Node.js course",
    author: "Shanur",
    tags:["node", "js"]
    isPublished: true
  })
  //   we moved the object creation part inside async function, because we can only use await inside of an async function
  //   now to create the object  and save it we need to call this function from outside;

  let result = await course.save();
  console.log(result);
}



async function getCourses(){
  //This is not a native mongodb query and i dont think it 
  //   will work there in mongo shell as such
  let courses = Course
     //     .find({name: "Mosh", isPublished: true})
     //     .find({author: /^Mosh/});   //using regex to find all documents where authors name starts with Mosh       
    .find()
    .or([{author: "Mosh"}, {isPublished: true}])
    .limit(10).sort({name: 1})
    .select({name: 1, tags: 1});
  console.log(courses);
}

//saveCourse();
getCourses();
