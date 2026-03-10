function createMemoizedAdd() {
  cache = {}
  return function (n) {
    if(cache[n] !== undefined){
      return cache[n]
    }

    cache[n] = n+n
    return cache[n]
  };
}

const add = createMemoizedAdd();
console.log(add(5));
console.log(add(5));