function myNew(Constructor, ...args) {
  return new Constructor(...args)
}

function Person(name) {
  this.name = name;
}

const person = myNew(Person, "John");
console.log(person.name);
console.log(person instanceof Person);