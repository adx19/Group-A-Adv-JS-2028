function sayHi() {
  console.log("Hello ", this.name);
}

const user = {
  name: "Adam",

  greet(city, country) {
    console.log("Hello " + this.name + " " + city + " " + country);
  },
};
const user2 = {
  name: "Steve",
};
user.greet.call(user2, "Bangalore", "India");
