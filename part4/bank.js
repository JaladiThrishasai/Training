let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];
function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}

function deposit(id, amount) {
    customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}


function withdraw(id, amount) {

    const customer = customers.find(customer => customer.id === id);

    if (customer.balance >= amount) {

        customers = customers.map((customer) => {
            if (customer.id === id) {
                return {
                    ...customer,
                    balance: customer.balance - amount,
                    transactions: [
                        ...customer.transactions,
                        {
                            type: "debit",
                            amount: amount,
                            date: Date.now(),
                        },
                    ]
                }
            } else {
                return customer;
            }
        });

    } else {
        console.log("Insufficient balance");
    }
}
function showTransactions(id) {
    const constumer = customers.find((customer) => customer.id == id);
    console.table(constumer.transactions);
}
export {checkBalance, deposit, withdraw, showTransactions}