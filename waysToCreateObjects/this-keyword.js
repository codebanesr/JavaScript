//give the function a name so that it can be used with new

function func(name2){
	this.name = "Shanur";
	this.score = 100;

	this.printName = function(){
		console.log(this.name);
	}
	this.printArgs = function(){
		console.log(name2);
	}
}

fnx = new func("Rahman");
fnx.printName()
fnx.printArgs()






//Another example
user = function(){
	this.name = "";
	this.life = 100;
	this.giveLife = function(targetPlayer){
		targetPlayer.life += 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}


Bucky = new user();
Bucky.name = "Bucky";

Lorry = new user();
Lorry.name = "Lorry";
Bucky.giveLife(Lorry);





//creating objects without method call, notice how this was never required because object is not being created using the new keyword
function createObject(name, age, badge){
	return{
		name:name,
		age:age,
		badge:badge,

		printDetails: function(){
			console.log(this.name+" "+this.age+" "+this.badge);
		}
	}
}


shanur = createObject("Shanur", 21, 'A')
shanur.printDetails()


