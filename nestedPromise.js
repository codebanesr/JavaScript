let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(5200)
    }, 1000)
})

p.then((result)=>{
  console.log(result);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(1000);
    }, 2000)
  })
}).then(result=>{
  console.log(result);
})
