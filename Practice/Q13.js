function createCounter(initial, step) {
  count = initial
  return {
    increment() {
      return count += step
    },
    decrement() {
      return count -= step
    },
    getCount() {
      return count
    }
  };
}

const c1 = createCounter(0, 2);
c1.increment();
console.log(c1.getCount());
c1.increment();
console.log(c1.getCount());
const c2 = createCounter(10, 1);
c2.decrement();
console.log(c2.getCount());