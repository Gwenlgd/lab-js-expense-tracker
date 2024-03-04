// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    return `${this.amount} €`;
  };
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income"
  }

}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense"
  }

  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = []
  }

  addEntry(entry) {
    this.entries.push(entry)
  };

  getTotalIncome() {
    let sum = 0;

    this.entries.forEach((entrie) => {
      if (entrie.type === "income") {
        sum += entrie.amount;
      }
    });
    return sum;
  }
  getTotalExpense() {
    let totalExpense = 0;

    this.entries.forEach((entrie) => {
      if (entrie.type === "expense") {
        totalExpense += entrie.amount;
      }
    });
    return totalExpense;
  }

  getCurrentBalance() {
    const totalIncome = this.getTotalIncome();
    const totalExpense = this.getTotalExpense();
    return totalIncome - totalExpense;
  }
};
