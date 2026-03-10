class Shape {
  constructor(name) {
    this.name = name
  }

  describe() {
    return `Shape: ${this.name}`
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name)
    this.radius = radius
  }

  describe() {
    return `Circle: ${this.name}, radius ${this.radius}`
  }
}

const c = new Circle("Small", 5);
console.log(c.describe());