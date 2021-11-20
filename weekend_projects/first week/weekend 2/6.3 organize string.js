function organize(s1, s2) {
  let str = s1 + s2;
  let freq = stringFreq(str);
  let arr = Object.keys(freq);
  arr = arr.sort();
  let organizedStr = arr.toString().replaceAll(",", "");
  return organizedStr;
}

function stringFreq(str) {
  let letters = str.toLowerCase().split("");
  let freq = {};
  letters.forEach((char) => (freq[char] = (freq[char] || 0) + 1));
  return freq;
}
