function Book(title, author) {
  this.title = title
  this.author = author
}

Book.prototype.getInfo = function () {
  return `${this.title} by ${this.author}`
};

const b1 = new Book("Clean Code", "Robert Martin");
const b2 = new Book("JS Guide", "MDN");
console.log(b1.getInfo());
console.log(b2.getInfo());