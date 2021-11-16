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
  const candy = candyStore.candies.find((candy) => {
    return candy.id === id;
  });

  return candy;
}

function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}

function addCandy(candyStore, id, name, price) {
  if (getCandy(candyStore, id)) {
    getCandy(candyStore, id).amount++;
  } else {
    const newCandy = { name: name, id: id, price: price, amount: 1 };
    candyStore.candies.push(newCandy);
  }
}

function buyCandy(candyStore, id) {
  const price = getPrice(candyStore, id);
  candyStore.cashRegister += price;
  const candy = getCandy(candyStore, id);
  if (candy.amount < 1) {
    console.log("Out of stock!");
  }
  candy.amount = candy.amount - 1;
  candyStore.cashRegister += price;
}
