  // Polyfill for apply method
  // Complete it => H.W
Function.prototype.myApply = function (context, ...args) {
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

sayHello.myApply(null, "mumbai", "India");
