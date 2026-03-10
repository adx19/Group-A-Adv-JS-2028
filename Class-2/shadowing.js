let person = {
  name: "John",
  age: 30,
  phone: "1234567890",
}

let arr = [1,2,3,4,5]

console.log(person);
console.log(arr);

Array.prototype.map = function() {
  console.log("This is a map function")
}