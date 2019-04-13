function getUser(obj){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(obj.name)
    }, 2000)
  });
}

function getUserDetails(name){
  console.log("got username", name)
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(`Getting details for ${name}`)
    }, 2000)
  })
}

getUser({name: "Shanur"})
.then(name=>getUserDetails(name))
.then(detail=>console.log(detail))
.catch(error=>{
  console.log(error);
});
