function binaryNum(zeroOnes) {
  let binaryString = zeroOnes.toString().replaceAll(",", "");
  let binary = binaryString;
  let num = parseInt(binary, 2);
  return num;
}
