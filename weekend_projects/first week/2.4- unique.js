function findUniq(arrNum) {
  let i = 1;
  while (arrNum[i] === arrNum[0]) {
    i++;
  }
  return arrNum[i];
}
console.log(findUniq([5, 0, 5, 5, 5]));
