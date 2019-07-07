// Singleton design pattern


var Singleton = function Singleton(){
  var instance = null;
  createInstance = function(){
    instance = new Object();
    return instance;
  }

  return {
    getInstance: function(){
      if(!instance){
        return createInstance()
      }else{
        return instance;
      }
    }
  }
}


var creator = Singleton();
console.log(creator)
var obj1 = creator.getInstance();
var obj2 = creator.getInstance();

console.log(obj1 === obj2)
