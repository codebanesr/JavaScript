const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter{
  constructor(){
    super();
  }

  emitData(){
    this.emit('data', {name:"Shanur", trial:1});
  }

  testAsynMethod(){
    let _this = this;
    setTimeout(function(){
      _this.emit('context', {name: "this context changed"})
    }, 1000);
  }
}


let customEmitterTest = new CustomEventEmitter();

customEmitterTest.on('data', function(data){console.log(data)})
customEmitterTest.on('context', function(data){
  console.log(data);
})

customEmitterTest.emitData();
customEmitterTest.testAsynMethod();
