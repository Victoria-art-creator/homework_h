"use strict";

class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(depositAmount) {
    this.depositAmount = depositAmount;
    this.#balance = this.#balance + depositAmount;
  }

  withdraw(withdrawAmount) {
    this.withdrawAmount = withdrawAmount;
    this.#balance = this.#balance - withdrawAmount;
  }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300
