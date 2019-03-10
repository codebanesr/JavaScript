
let s = new Set();
s.add("shanur")
s.add("vishnu");
s.add("amit");
s.add("dev");
s.add("kumar")

// console.log(s.entries())
for(let item of s){
  console.log(item)
}

console.log("----------m2-------")
s.forEach(element=>{
  console.log(element)
})
