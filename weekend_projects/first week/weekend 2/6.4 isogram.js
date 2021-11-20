function isogram(str) {
  let freq = stringFreq(str);
  let arrValues = Object.values(freq);
  let arr = arrValues.filter((val) => {
    return val < 2;
  });
  return arr.length === arrValues.length;
}

function stringFreq(str) {
  let letters = str.toLowerCase().split("");
  let freq = {};
  letters.forEach((char) => (freq[char] = (freq[char] || 0) + 1));
  return freq;
}
