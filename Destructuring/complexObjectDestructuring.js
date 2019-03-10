// use object destructuring for objects
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

// whats written below will not work
// List desctructuring is to be done only for iterables
// let [a,b,c] = options
// console.log(a,b,c)




let options1 = {
  title1: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title1} = options1;

// width -> w
// height -> h
// title1 -> title1

console.log(title1);  // Menu
console.log(w);      // 100
console.log(h);      // 200
