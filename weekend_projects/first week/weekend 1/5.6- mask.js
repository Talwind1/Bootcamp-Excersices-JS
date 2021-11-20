function maskify(string) {
  let answer = "";
  if (string.length > 4) {
    let i = 0;
    while (i < string.length - 4) {
      answer = answer + "#";
      i++;
    }
    answer = answer + string.substring(string.length - 4);
  } else {
    answer = string;
  }
  return answer;
}
