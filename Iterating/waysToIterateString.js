let s = "shanur writes code"
let iterator = s[Symbol.iterator]();
//on calling s[Symbol.iterator] we get the iterator, again imphasizing the fact that you need to call the function that is you need to put () after s[Symbol.iterator]


while(true){
  let next = iterator.next();
  if(next.done){
    break;
  }

  console.log(next.value)
}



-----------------------------------------------------M2---------------------------------------------------------------------
let s = "shanur writes code"


for(let c of s){
  console.log(c);
}
