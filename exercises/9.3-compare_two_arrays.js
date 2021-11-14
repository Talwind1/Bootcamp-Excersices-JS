const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function arrCompare(food, food1) {
  const sameItems = [];
  for (item of food) {
    for (item1 of food1) {
      if (item === item1) {
        sameItems.push(item);
      }
    }
  }
  if (sameItems.length === 0) {
    return false;
  }
  return sameItems;
}
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.
console.log(arrCompare(food, food1));
