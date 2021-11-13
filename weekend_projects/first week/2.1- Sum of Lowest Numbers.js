function sumMin(arrayNum) {
  let min1 = Math.min.apply(Math, arrayNum);
  let minInd = arrayNum.indexOf(min1);
  arrayNum.splice(minInd, 1);
  let min2 = Math.min.apply(Math, arrayNum);
  return min1 + min2;
}
console.log(sumMin([1, 2, 3, 4, 0]));
