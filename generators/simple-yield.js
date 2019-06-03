function* generateSequence() {
  yield(1);
  yield(1); 
  yield(1); 
  yield(1);
}


// iterating over the generator
let generator = generateSequence(); //iterable object called generator
while(true){
  let g  = generator.next();
  if(g.done){
    break;
  }
  // console.log(g.value)
}

// using the spread operator
let spread = generateSequence();
console.log([...spread])


// more elegant generate sequence implementation using iterator
function *generateSequence(start, end){
  for(let i=start; i<=end; i++){
    yield(i);
  }
}

console.log([...generateSequence(1, 5)])
