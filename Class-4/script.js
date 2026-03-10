function outer(){
  let a = 10

  return function inner(){
        console.log(a)

  }

}

let in1 = outer()
in1()