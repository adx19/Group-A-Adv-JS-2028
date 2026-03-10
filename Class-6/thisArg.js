// const user = {
//   name: "Adam",
//   sayHI(){
//     console.log("Hello", this.name);
//   }
// }

// user.sayHI();

// const user = {
//   message: "Hello"
// }

// const name = ["Adam", "Bob", "Charles"]

// name.map(function (name){
//   console.log(this.message,+ " " + name);
// }, user)

const calculator = {
  multiplier: 2, 
  number: [10, 20, 30],

  multiply(){
    return this.number.map((num) => {
      return this.multiplier * num;
    })
  }
}

console.log(calculator.multiply())

