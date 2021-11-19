function dupliCount(str) {
  let letters = str.toLowerCase().split("");
  let freq = {};
  letters.forEach((char) => (freq[char] = (freq[char] || 0) + 1));

  let arrValues = Object.values(freq);

  let duplicates = arrValues.filter((val) => {
    return val > 1;
  });
  return duplicates.length;
}
