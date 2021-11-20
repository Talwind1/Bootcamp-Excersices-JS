function repeatStr(count, str) {
  let answer = str;
  while (count > 1) {
    answer = answer + str;
    count--;
  }
  return answer;
}
