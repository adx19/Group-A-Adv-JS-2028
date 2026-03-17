const calc = {
  base: 10,
  add: function (a, b) {
    return this.base + a + b;
  }
};

function bindBase(base) {
  // Return a function that takes (a, b) and returns base + a + b
  return function(a, b){
    return base + a + b
  }
}

const fn = bindBase(10);
console.log(fn(1, 2));