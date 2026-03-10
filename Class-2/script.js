let pizza1 = {
  size : "medium",
  toppings: ['Cheese', 'Pepperoni', 'Mushrooms'],
  preference: "Non-veg",
  crust: "Thin crust"
}

let pizza2 = {
  size : "small",
  toppings: ['Cheese', 'Pepperoni'],
  preference: "Non-veg",
  crust: "Thick crust"
}

// Constructor Function

function Pizza(size, toppings, preference, crust) {
  this.size = size;
  this.toppings = toppings;
  this.preference = preference;
  this.crust = crust;
  console.log(this);


}

Pizza.prototype.serve = function() {
    console.log(`A ${this.size} ${this.preference} pizza with ${this.toppings.join(", ")} on ${this.crust} is served`);
  }
new Pizza("large", ['Cheese', 'Mushrooms', 'Capsicum'], "Veg", "Cheese burst")
new Pizza("medium", ['Cheese', 'Olives'], "Veg", "Thin crust")
let pizza = new Pizza("small", ['Cheese', 'Chicken'], "Non-veg", "Thick crust")
pizza.serve();

// 2nd Way

function createPizza(size, toppings, preference, crust) {
  let obj = {};
  obj.size = size;
  obj.toppings = toppings;
  obj.preference = preference;
  obj.crust = crust;
  obj.serve2 = function() {
    console.log("Pizza is served");
  }
  console.log(obj);
}

createPizza("large", ['Cheese', 'Mushrooms', 'Capsicum'], "Veg", "Cheese burst")
createPizza("medium", ['Cheese', 'Olives'], "Veg", "Thin crust")
createPizza("small", ['Cheese', 'Chicken'], "Non-veg", "Thick crust")
