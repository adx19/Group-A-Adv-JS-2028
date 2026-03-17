const user = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
    function innerGreet(names) {
      console.log(names.name);

    }
    innerGreet(this);
  }
};

user.greet();