function tribonacci(arrStart, n) {
  let trib;
  if (Number.isInteger(n) && arrStart && arrStart.length > 2) {
    //n should be an integer and arr should be truthy
    if (n < 3) {
      trib = arrStart.slice(0, n);
    } else {
      trib = arrStart;
      let i;
      let nextItem;
      for (i = 3; i < n; i++) {
        nextItem = trib[i - 3] + trib[i - 2] + trib[i - 1];

        trib.push(nextItem);
      }
    }
  }

  return trib;
}
