function fibonacci(startNum, n) {
  let item = 1;
  let itemNext = startNum + item;
  let i = 3;
  while (i < n) {
    item += itemNext;
    itemNext += item;
    i++;
  }
  return item;
}
console.log(fibonacci(0, 5));
