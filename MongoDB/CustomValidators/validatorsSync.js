var userSchema = mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: function(v){
         //v is the value of that field, return true or false based on the condition you apply on v
         return false;
      },
      message: props=> return `${props.value} is not a valid name`
    },
    required: [true, "Name is required"]
  }
})
