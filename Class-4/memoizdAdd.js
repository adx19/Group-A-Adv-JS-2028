function MemoizedAdd() {
    let cache = {};

    return function(n){
      if(cache[n]) return cache[n]

      cache[n] = n+n
      return cache[n]
    }
}

let add = MemoizedAdd()
console.log(add(5))
console.log(add(10))
console.log(add(5))