const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  return candyStore.candies.find((candy) => {
    return candy.id === id;
  });
}

function getPrice(candyStore, id) {
  let candy = getCandy(candyStore, id);
  return candy.price;
}

console.log(getPrice(candyStore, "as12f"));
function addCandy(candyStore, id, name, price) {
  let candy = { name: name, id: id, price: price, amount: 1 };
  candyStore.candies.push(candy);
}

function buy(candyStore, id) {
  let price = getPrice(candyStore, id);
  candyStore.cashRegister += price;
  let candy = getCandy(candyStore, id);
  candy.amount = candy.amount - 1;
}

buy(candyStore, "blabla123");
console.log(candyStore.cashRegister);
