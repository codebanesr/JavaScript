let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values, no entries method for dictionary in javascript use Object.entries
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}



console.log("*******************IMPORTANT Object.entries does not occur for map; instead use map.entries");
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for(let [key, value] of user.entries()){
  console.log(key, value)
}
