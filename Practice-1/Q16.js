function createMultiplier(factor) {
  return function (n) {
    return n*factor
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(7));
console.log(triple(7));