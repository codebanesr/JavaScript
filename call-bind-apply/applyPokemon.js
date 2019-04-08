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
