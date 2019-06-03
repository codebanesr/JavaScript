// writing our custom [Symbol.iterator]()

// we will define range which will be an iterable object

// this is how we define an iterable

let range = {
  current: 1,
  end: 10,
  // following the es6 description of function
  [Symbol.iterator]() {
    return {
      // this.current refers to the current element in the object enclosing this object...
      current: this.current, end: this.end,
      next() {
        // this.current => look for current inside the current object
        if (this.current <= this.end) {
          return { value: this.current++, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}


console.log(...range)




// ***********************************************************************************
// lets define range object using generators
let rangeGen = {
  current: 1,
  end: 5,

  // you dont have to return a next function because iterator will return items every time it is called, if you remember your next function was called everytime and it returned {value: somevalue, done: false}


  // so you can remember yield as the next function
  // everytime you call next it gives you {value: val, next: false}


  // everytime you call a generator it gives you {value: val, next: false}
  // dont let the for loop distract you from the fact that this loop will not just go on
  // it will pause after every single call, after returning a value
  *[Symbol.iterator]() {
    for(let i=this.current; i<=this.end; i++){
      yield(i);
    }
  }
}


console.log(...rangeGen)
