//sort function

function sortorder(a, b){
	return a-b;
}


arr = [1,2,3,21,1,11,2,4]

arr.sort(sortorder)
console.log(arr)



//map function

arr = arr.map(x=>x+1)
console.log(arr)


//filter function
arr = arr.filter(X=>{
	return X>11;
})

console.log(arr);



//reduce function
sum = arr.reduce((prev, next)=>{
	return prev+next;
}, 0)

console.log(sum)