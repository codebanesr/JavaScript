let map = new Map();
map.set(1, "shanur");
map.set(2, "amit");
map.set(3, "vishnu");
map.set("Shanur", "Shanur writes code")


for(let key of map.keys()){
  console.log(key, map.get(key))
}

console.log("----------------------------m2-------------")
let iterator = map.entries()
console.log(iterator.next())
while(true){
  let entry = iterator.next();
  if(entry.done){
    break;
  }
  console.log(entry.value);
}


console.log("*********************************************************************");

map.forEach((value, key, entry)=>{
  console.log(key, value, entry)
  console.log("\n\n\n\n")
})
