Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) { // ensures only existing indices
      result.push(callback.call(thisArg, this[i], i, this));
    }
  }

  return result;
};

const arr = [1, 2, 3];
const result = arr.myMap(function (x) {
  return x * 2;
});
console.log(result);
