const obj = {
	name: "shanur",
	age: 25
}

function getUserDetails() {
	this.dob = "05/08/1995";
	this.name = "someoneelse"
	return {
		name: this.name,
		age: this.age,
		dob: this.dob
	}
}


The two lines will give exactly similar output, this gives us a way to remember bind functionality clearly
console.log(getUserDetails.bind(obj)());

Object.assign(obj, {name: "someoneelse"});
