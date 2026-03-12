// Polyfill for call method

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  context.tempFn = this;
  const result = context.tempFn(...args);
  delete context.tempFn;
  return result;
};
function sayHello(city, country) {
  console.log(`Hello ${this.name} ${city} ${country}`);
}
let ob1 = {
  name: "Steve",
};

sayHello.myCall(null, "mumbai", "India");
