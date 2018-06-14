let p1 = new Promise((resolve, reject)=>{
	setTimeout(()=>resolve("1st function completed after 2seconds"),2000)
})
let p2 = new Promise((resolve, reject)=>{
	setTimeout(()=>resolve("The second function resolved after 3 seconds"), 3000);
})


async function answer(){
	[p1obj, p2obj] = await Promise.all([p1, p2])
	console.log(p1obj+" \n"+p2obj);	
}



answer()