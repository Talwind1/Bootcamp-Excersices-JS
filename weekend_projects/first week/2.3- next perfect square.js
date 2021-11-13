function nextPerfectSquare(squaredNum) {
  let perfectSquare = -1;
  let perfectSqrt = Math.sqrt(squaredNum);
  if (perfectSqrt === Math.round(perfectSqrt)) {
    perfectSquare = Math.pow(perfectSqrt + 1, 2);
  }
  return perfectSquare;
}
