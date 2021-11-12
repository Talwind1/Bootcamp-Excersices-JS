function century(year) {
  if (year % 100 === 0) {
    return year / 100;
  } else {
    return (year - (year % 100)) / 100 + 1;
  }
}
