// Ployfill of bind method

Function.prototype.myBind = function (context, ...boundargs) {
  const originalFn = this;

  return function (...laterArgs) {
    return originalFn.apply(context, [...boundargs, ...laterArgs]);
  };
};

const user = {
  name: "Adam",
};

function greet(city, country) {
  console.log(`Hello ${this.name} ${city} ${country}`);
}

let greetFn = greet.myBind(user, "Mumbai");
greetFn("India")
