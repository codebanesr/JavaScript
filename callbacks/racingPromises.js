// if you want the result of whatever finishes first  use Promise.race, this will give a single output not an array
let p1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("resolved1");
  }, 2000);
})



let p2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // event though this is rejected because this is finishing 
    // late it wont be considered and node will give the output 
    // as resolved1
    reject(new Error("something went wrong"));
  }, 3000);
})

Promise.race([p1, p2]).then(result=>console.log(result)).catch(e=>{
  console.log(e)
})
