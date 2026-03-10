const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

let result = people
  .filter(function (person) {
    return person.age >= 18;
  })
  .map(function (person) {
    return `${person.name} is adult`;
  })
  .reduce(function (acc, curr) {
    acc = acc + (acc ? "; " : "") + curr;
    return acc;

  }, "");
console.log(result);
