//Example of modular design patter

var exposer = (function modular(){
	this.privatemethod1 = function(){
		console.log("private method of modular 1 called");
	}


	return{
		publicmethod : function(){
			console.log("Public method called here");
		}
	}
})();



exposer.publicmethod()





//Revealing modular design pattern in javascript
var Revealer = (function(){
	let privateMethod1 = function(){
		console.log("Private method of revealing design pattern1 called");
	}

	let privateMethod2 = function(){
		console.log("Private method of revealing design pattern2 called");	
	}

	return{
		method1 : privateMethod1,
		method2 : privateMethod2
	}
})();

Revealer.method1()
Revealer.method2()



// Modular design pattern should always be kept inside of an immediately invoked function expression IIFE