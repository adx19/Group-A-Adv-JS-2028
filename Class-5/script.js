//  Map -->
// callback
//  iteration
//  return the result in a new Array
//  THis exists inside the Array Prototype

// let arr = [1,2, 3, 4]

// let aquare = arr.map(function(num){
//   return num*num
// })

// console.log(aquare)
// console.log(arr)

//  Polyfill for Map

Array.prototype.myMap = function (callback) {
  if (this == null || this == undefined) {
    throw new Error("No array found");
  } else {
    if (Array.isArray(this)) {
      if (typeof callback != "function") {
        throw new Error("The callback given is not a function");
      }

      let result = [];

      for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
      }
      return result;
    } else {
      throw new Error("No array found");
    }
  }
};

let nums = [1, 2, 3, 4, 5];
let array = [];

let ans = array.myMap(function (num) {
  return num * num;
});
console.log(array);
console.log(nums);
console.log(ans);
