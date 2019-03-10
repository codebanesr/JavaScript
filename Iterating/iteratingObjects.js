var obj = {
  "1": "Shanur",
  "2": "Rahman",
  "3": "Dev",
  "4": "Kailash",
  "5": "Prasad"
}


Object.keys(obj).forEach(key=>{
  console.log(key+" "+ obj[key]);
})

console.log("\n\n\n\n")
for(key in obj){
  console.log(key, obj[key])
}
