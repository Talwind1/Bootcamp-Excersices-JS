function toWeirdCase(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i = i + 2) {
    str =
      str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i + 1);
  }
  return str;
}
