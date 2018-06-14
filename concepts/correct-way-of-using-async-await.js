//AWAIT ONLY WORKS INSIDE ASYNC FUNCTION 
const wes = await axios.get("https://swapi.co/api/people/1");
console.log(wes);
// wont work

you should be doing something like
async function getData(){
	const wes = await axios.get("https://swapi.co/api/people/1");
	console.log(wes);
}







const getDetails = async function() {
	const wes = await axios.get("https://swapi.co/api/people/1");
	const scot = await axios.get("https://swapi.co/api/people/2");

	const html = `
		<h1>wes.name</h1>
		<h1>scot.name</h1>
	`
}


----------slow approach----------
but thats slow why has scot got to wait for wes to finish

const getDetails = async function() {
	const wes = await axios.get("https://swapi.co/api/people/1");
	const scot = await axios.get("https://swapi.co/api/people/2");

	const html = `
		<h1>wes.name</h1>
		<h1>scot.name</h1>
	`
}





--------------
// fast approach

const getDetails = async function() {
	const wesPromise =  axios.get("https://swapi.co/api/people/1");
	const scotPromise = axios.get("https://swapi.co/api/people/2");


	//now it waits for both of them to complete without them waiting for it
	const [wes, scot] = await Promise.all([wesPromise, scotPromise]);
	const html = `
		<h1>wes.name</h1>
		<h1>scot.name</h1>
	`
}
