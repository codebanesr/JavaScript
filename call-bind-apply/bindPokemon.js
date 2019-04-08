let obj = {
  firstname: "Dev",
  lastname: "kumar",
}

getFullName = function(lastname, lastname1){
  return this.firstname+" "+this.lastname+" "+lastname+" "+lastname1;
}

getFullName = getFullName.bind(obj);
getFullName("Upadhyay", "Shanur")
