function mumble(str) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (i > 0) {
      s += "-";
    }
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        s += str[i].toUpperCase();
      } else {
        s += str[i].toLowerCase();
      }
    }
  }
  return s;
}
