Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  let firstIndex;

  if(arguments.length == 1){
    acc = this[0];
    firstIndex = 1;
  }else{
    acc = initialValue;
    firstIndex = 0;
  }

  for(let i = firstIndex; i<this.length; i++){
    acc = callback(acc, this[i]);
  }

  return acc;
};

const arr = [1, 2, 3, 4, 5];
const sum1 = arr.myReduce((acc, curr) => acc + curr, 0);
const sum2 = arr.myReduce((acc, curr) => acc + curr);
console.log(sum1);
console.log(sum2);