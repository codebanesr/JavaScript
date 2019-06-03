const author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ian Fleming',
  age: 50
});

author.save(function (err) {
  if (err) return handleError(err);

  const story1 = new Story({
    title: 'Casino Royale',
    author: author._id    // assign the _id from the person, can we not use this._id because this callback will go inside
    // author object
  });

  story1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
  });
});
