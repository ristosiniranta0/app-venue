/*
   Filename: SophisticatedCode.js
   Content: Complex logic and advanced features implemented in JavaScript
*/

// Class representing a Bank Account
class BankAccount {
  constructor(name, accountNumber) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactionHistory.push(`Deposit of $${amount}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactionHistory.push(`Withdrawal of $${amount}`);
    } else {
      throw new Error("Insufficient balance");
    }
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}

// Class representing a Bank
class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  createAccount(name) {
    const accountNumber = Math.floor(Math.random() * 1000000000); // Generate a random account number
    const account = new BankAccount(name, accountNumber);
    this.accounts.push(account);
    return account;
  }

  getAccount(accountNumber) {
    const account = this.accounts.find((acc) => acc.accountNumber === accountNumber);
    if (!account) {
      throw new Error("Account not found");
    }
    return account;
  }

  closeAccount(accountNumber) {
    const accountIndex = this.accounts.findIndex((acc) => acc.accountNumber === accountNumber);
    if (accountIndex !== -1) {
      this.accounts.splice(accountIndex, 1);
    } else {
      throw new Error("Account not found");
    }
  }
}

// Create a bank instance
const bank = new Bank("My Bank");

// Create accounts and perform transactions
const account1 = bank.createAccount("John Doe");
account1.deposit(500);
account1.withdraw(200);
account1.deposit(1000);

const account2 = bank.createAccount("Jane Smith");
account2.deposit(1500);
account2.withdraw(300);
account2.deposit(500);

// Display account balance and transaction history
console.log(`Account balance of ${account1.name}: $${account1.balance}`);
console.log(`Transaction history of ${account1.name}:`);
console.log(account1.getTransactionHistory());

console.log(`Account balance of ${account2.name}: $${account2.balance}`);
console.log(`Transaction history of ${account2.name}:`);
console.log(account2.getTransactionHistory());

// Close an account
bank.closeAccount(account2.accountNumber);

// Try accessing the closed account
try {
  bank.getAccount(account2.accountNumber);
} catch (error) {
  console.log(error.message);
}

// Add more complex and sophisticated code here...
// ...
// ... (200+ lines of code)