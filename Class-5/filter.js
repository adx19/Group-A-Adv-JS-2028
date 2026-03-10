// Filter -> 
// callback
//  iteration
//  return the result in a new Array
//  THis exists inside the Array Prototype
//  THis works with condiftions


Array.prototype.myFilter = function(callback){
  
  let result = []
  
  for(let i = 0; i<this.length; i++){
    if(callback(this[i])){
      result.push(this[i])
    }
  }

  return result
}

let arr = [1, 4, 6, 7, 8, 9]

let evens = arr.myFilter(function(num){
  return num%2==0
})

console.log(evens)
