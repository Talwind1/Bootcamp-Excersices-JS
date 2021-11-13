function findUniq(arrNum) {
  let i = 1;
  let uniq = 0;
  while (arrNum[i] === arrNum[0]) {
    i++;
  }
  uniq = arrNum[i];

  if (i === 1) {
    uniq = arrNum[2] === arrNum[1] ? arrNum[0] : arrNum[1];
  }
  return uniq;
}
