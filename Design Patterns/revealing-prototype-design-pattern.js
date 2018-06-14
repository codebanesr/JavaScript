var bike = function(){
	this.name = "I am some bike",
	this.wheels = "got two wheels only"
}



bike.prototype = function(){

	var brakes = function(){
		console.log("I will stop the bike");
	}


	var start = function(){
		console.log("I start the bike");
	}

	return{
		start: brakes,
		stop:stop
	}


}();
console.log(bike.prototype);


