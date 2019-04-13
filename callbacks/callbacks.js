function printDetails(name, callback){
  callback(name);
}


function printMoreDetails(object, callback){
  callback(Object.keys(object));
}




printDetails("shanur",  function callback(name){
  console.log({name: name});
  printMoreDetails({name: "Shanur", age: 24}, function(keys){
    console.log(keys);
  });
})
