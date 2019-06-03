// Normal select when populating a single record 
Story.
  findOne({ title: /casino royale/i }).
  populate('author', 'name'). // populate author and only select the authors name, _id will come by default
  exec(function (err, story) {  //exec
    if (err) return handleError(err);

    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"

    console.log('The authors age is %s', story.author.age);
    // prints "The authors age is null'
  });





// advanced select and populate just like we do for custom validators in mongoose
// if we had multiple fields to populate for multiple records we can not go on chaining sort and limit because it will apply 
// to both populate, instead we can pass several different key value pairs to populate itself

Story.
  find(...).
  populate({
    path: 'fans', //which object are you referring to in the database
    match: { age: { $gte: 21 }},
    // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
    select: 'name -_id', //what fields you want to select
    options: { limit: 5 }
  }).
  exec();

