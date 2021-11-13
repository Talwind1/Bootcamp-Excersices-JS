function tribonacci(arrStart, n) {
  let trib = [];
  if (n < 3) {
    trib = arr.arrStart.slice(0, n);
  } else {
    trib = arrStart;
    let i;
    let nextItem;
    for (i = 3; i <= n; i++) {
      // Next fibonacci number = previous + one before previous + two before previous
      nextItem = trib[i - 3] + trib[i - 2] + trib[i - 1];

      trib.push(nextItem);
    }
  }
  return trib;
}
console.log(tribonacci([0, 0, 1], 10));
