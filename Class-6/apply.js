const user = {
  name: "Adam",
};

function greet(city, country) {
  console.log("Hello " + this.name + " " + city + " " + country);
}
let numbers = [10, 20, 50, 60]
let max = Math.max.apply(null, numbers)

greet.apply(user, ["Bengaluru", "India"])