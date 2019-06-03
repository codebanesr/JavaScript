let range = {
  current: 5,
  end: 10,
  
  *[Symbol.iterator](){
    for(let i=this.current; i<=this.end;i++){
      yield(i);
    }
  }
}



console.log(...range)



let _range = {
  current: 1,
  end: 5,
  [Symbol.iterator]() {
    return {
      current: this.current,
      end: this.end,
      next(){
        if(this.current<=this.end){
          return {value: this.current++, done: false}
        }
        return {done: true}
      }
    }
  }
}

console.log(..._range)
