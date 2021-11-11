function sevenBoom(a) {
  let s = "";
  for (let i = 1; i < a; i++) {
    if (i.toString().indexOf("7") > -1 && i % 7 === 0) {
      s += "BOOM-BOOM" + ",";
    } else if (i % 7 == 0) {
      s += "BOOM" + ",";
    } else {
      s += i + ",";
    }
  }
  s += a;
  console.log(s);
}
