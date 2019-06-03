// Populating multiple existing documents https://mongoosejs.com/docs/api.html#model_Model.populate
// populates a single object
User.findById(id, function (err, user) {
  var opts = [
    { path: 'company', match: { x: 1 }, select: 'name' },
    { path: 'notes', options: { limit: 10 }, model: 'override' }
  ];

  User.populate(user, opts, function (err, user) {
    console.log(user);
  });
});

// populates an array of objects
User.find(match, function (err, users) {
  var opts = [{ path: 'company', match: { x: 1 }, select: 'name' }];

  var promise = User.populate(users, opts);
  promise.then(console.log).end();
})

// imagine a Weapon model exists with two saved documents:
//   { _id: 389, name: 'whip' }
//   { _id: 8921, name: 'boomerang' }
// and this schema:
// new Schema({
//   name: String,
//   weapon: { type: ObjectId, ref: 'Weapon' }
// });

var user = { name: 'Indiana Jones', weapon: 389 };
Weapon.populate(user, { path: 'weapon', model: 'Weapon' }, function (err, user) {
  console.log(user.weapon.name); // whip
})

// populate many plain objects
var users = [{ name: 'Indiana Jones', weapon: 389 }]
users.push({ name: 'Batman', weapon: 8921 })
Weapon.populate(users, { path: 'weapon' }, function (err, users) {
  users.forEach(function (user) {
    console.log('%s uses a %s', users.name, user.weapon.name)
    // Indiana Jones uses a whip
    // Batman uses a boomerang
  });
});
// Note that we didn't need to specify the Weapon model because
// it is in the schema's ref
