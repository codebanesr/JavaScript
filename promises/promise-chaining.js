let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(5200)
    }, 1000)
})

p.then(res=>{
  console.log(res)
  return res*2
}).then(res=>{
  console.log(res);
  return res*2
}).then(res=>{
  console.log(res);
});

//There is only one promise everywhere
