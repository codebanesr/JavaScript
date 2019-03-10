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



pokemonEatingHabbits.apply(object, ["cheeze", "onions"]);
