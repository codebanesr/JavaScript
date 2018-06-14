let promise = new Promise(function(resolve, reject){
	setTimeout(()=>resolve("done"), 2000)
})


promise.then(
	resolve=>console.log(resolve), //dont forget the comma
	reject=>console.log(reject)
)



// in case of reject, the second method in the clause will be called lets see the output
promise2 = new Promise((resolve, reject)=>{
	setTimeout(()=>reject("Error encountered while running the second promise"), 2000)
})

promise2.then(
	resolve=>console.log(resolve),
	reject=> console.log(reject)
)



//but we can leave the reject part all together if we want to
promise3 = new Promise((resolve, reject)=>{
	setTimeout(()=>resolve("Just if it resolves should this be sent to the argument of then"), 3000)
})

promise3.then(function(resolve){
	console.log(resolve);
})


// or more stylystically this can also be written also                          if it resolves print the object
promise4 = new Promise(resolve=>setTimeout(()=>resolve("done styling "), 3000)).then(resolveobj=>console.log(resolveobj))