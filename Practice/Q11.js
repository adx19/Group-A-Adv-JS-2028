class Validator {
  #isEmpty(str) {
    if(str.length == 0 || !str){
      return true
    }
    return false
  }

  validate(str) {
    if(this.#isEmpty(str)){
      return false
    }
    return true
  }
}

const v = new Validator();
console.log(v.validate(""));
console.log(v.validate("hello"));