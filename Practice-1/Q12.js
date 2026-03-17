class Temperature {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius

  }

  get celsius() {
    return this.#celsius
  }

  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32
  }
}

const t = new Temperature(25);
console.log(t.celsius);
console.log(t.fahrenheit);