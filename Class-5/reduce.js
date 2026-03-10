//  Reduce --> 
//  callback => Takes 2 parameters -> Accumulateor and current value
//  iterate
//  performs operations 


Array.prototype.myReduce = function(callback, initialValue){
  let acc;
  let firstIndex;

  if(arguments.length == 1){
    acc = this[0]
    firstIndex = 1
  }else{
    acc = initialValue
    firstIndex = 0
  }

  for(let i = firstIndex; i<this.length; i++){
    acc = callback(acc, this[i])
  }

  return acc
}


let arr = [1, 2, 3, 4, 5]

let ans = arr.myReduce(function(acc, curr){
  acc = acc+curr
  return acc
}, 0)

console.log(ans)