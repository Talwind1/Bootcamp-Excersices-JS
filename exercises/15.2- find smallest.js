function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmalest(52, 66, 2);

//In line 10 there was a reference error (typo)
// I use the debbuger and I saw the red line under the function name
// there was a typo mistake- the function didn't spelled right.
// my fix:

function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);
