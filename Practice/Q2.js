const timer = {
  name: "Timer",
  start: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};

timer.start();