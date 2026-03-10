// Classes
Object.prototype.aerve = function(){
  console.log(`This is a Pizza of ${this.size} size`) 

}
class Pizza{
  constructor(size, toppings, preference , crust){
    this.size = size;
    this.toppings = toppings;
    this.preference = preference;
    this.crust = crust;
  }

  serve(){
    console.log(`This is a Pizza of ${this.size} size`)
  }
}

class stuffedPizza extends Pizza{
  constructor(size, toppings, preference , crust, stuffing){
    super(size, toppings, preference , crust);
    this.stuffing = stuffing;
  }

  // serve(){
  //   console.log(`This is a Stuffed Pizza of ${this.size} size with ${this.stuffing} stuffing`)
  // }
}

let pizza1 = new Pizza("Medium", ["Pineapple", "Mushrooms"], "Veg", "Thin Crust");

console.log(pizza1);
pizza1.serve();

let pizza2 = new stuffedPizza("Large", ["Pepperoni", "Olives"], "Non-Veg", "Thick Crust", "Cheese");

console.log(pizza2);
pizza2.serve();


