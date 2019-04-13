// parallel promises
let p1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("resolved1");
  }, 2000);
})



let p2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("resolved2");
  }, 3000);
})

Promise.all([p1, p2]).then(result=>console.log(result))
