function leap(year) {
  let leap;
  if (year % 400 === 0) {
    leap = true;
  } else if (year % 4 === 0 && year % 100 === 0) {
    leap = false;
  } else if (year % 4 === 0) {
    leap = true;
  } else {
    leap = false;
  }
  return leap;
}
