var bike = function(){
	this.name = "I am some bike",
	this.wheels = "got two wheels only"
}


bike.prototype.brakes = function(){
	console.log("I will stop the bike");
}


bike.prototype.start = function(){
	console.log("I start the bike");
}

console.log(bike.prototype);






//better way to do the same thing
var car = function(){
	this.name = "I am some car",
	this.wheels = "got four wheels only"
}


car.prototype = {
	start: function(){
		console.log("start the car");
	},

	stop : function(){
		console.log("stop the car budd");
	}
}



console.log(car.prototype)