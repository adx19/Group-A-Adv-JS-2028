function createBankAccount(initialBalance) {
  count = initialBalance
  return {
    deposit(amount) {
      return count += amount
    },
    withdraw(amount) {
      return count -= amount
    },
    getBalance() {
      return count
    }
  };
}

const acc = createBankAccount(1000);
console.log(acc.deposit(500));
console.log(acc.withdraw(200));
console.log(acc.getBalance());