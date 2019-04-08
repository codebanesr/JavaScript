var object = {
  firstName: "pika",
  lastName: "chu",
  
  getPokemonName: function(){
    let fullname = this.firstName+" "+this.lastName;
    return fullname;
  }
}

var pokemonEatingHabbits = function(snack1, snack2){
  console.log(this.getPokemonName() + " I choose you");
  console.log(this.getPokemonName() + " eats " + snack1 + " and " + snack2)
}



// First parameter defines the scope of the function and the second one provides the parameter. So its a way of attaching
// functionality to object
pokemonEatingHabbits.apply(object, ["cheeze", "onions"]);





// Example 2 .... No arguments to the functions
sayHello = function(){
  return "Hello"+this.name;
}

// lets define the context
let person = {
  name: "Shanur",
  age:24
}

// now attach this object or give a context to sayHello function
console.log(sayHello.call(person));
sayHello();


