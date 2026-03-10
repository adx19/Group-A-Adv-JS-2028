// check balance
// deposit money
// withdraw money

class BankAccount{
  constructor(balance){
    this.balance = balance
  }

  deposit(amount){
    this.balance += amount
  }

  withdraw(amount){
    this.balance -= amount

  }

  #checkBalance(){
    console.log(`Your current balance is ${this.balance}`)
  }

  showDetails(){
    this.#checkBalance()
  }
}

let acc = new BankAccount(1000)
acc.showDetails()
