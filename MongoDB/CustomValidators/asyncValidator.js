var userSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
       validator: function(v){
       //if you return a promise you dont have to call the callback;
           return new Promise(function(resolve, reject){
              setTimeout(()=>{
                resolve(false);
              }, 5)
           })
       },
       message: "My default message"
    }
  },
  
  phone: {
    type: String,
    validate:{
      isAsync: true,
      validator: function(v, callback){
        //callback should be called with two arguments, first is if validation is successful or not, second message
        setTimeout(()=>{
          callback(false, message);
        }, 10)
      }
    }
  }
})
