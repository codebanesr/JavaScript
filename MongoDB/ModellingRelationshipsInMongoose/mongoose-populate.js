// define personSchema and storySchema
let personSchema = mongoose.Schema({
  name: string,
  id: mongoose.Types.ObjectId,
  story: {type: mongoose.Types.ObjectId, ref: 'Story'}
})


let storySchema = mongoose.Schema({

  name: string,
  author: {type: mongoose.Types.ObjectId, ref:'Person'}
})

let Story = mongoose.model('Story', storySchema);
let Person = mongoose.model('Person', personSchema);


// there will never be a story without author, save  author take result and then
// create a story
async function saveAuthor(){
  // create an author object;
  let author = new Person({name: "Shanur", id: new mongoose.Schema.ObjectId()});
  author = await author.save();

  let story = new Story({name: "Some story", author: author._id});
  story = await story.save();
}


async function fetch(){
  Story.findOne({name:"shanur"}).populate('author').exec(function(err, data){

  });
}



const author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ian Fleming',
  age: 50
});

author.save(function (err) {
  if (err) return handleError(err);

  const story1 = new Story({
    title: 'Casino Royale',
    author: author._id    // assign the _id from the person
  });

  story1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
  });
});



Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });


// populate using options, path refers to the object to be populated
Story.
  find(...).
  populate({
    path: 'fans',
    match: { age: { $gte: 21 }},
    // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
    select: 'name -_id',
    options: { limit: 5 }
  }).
  exec();
