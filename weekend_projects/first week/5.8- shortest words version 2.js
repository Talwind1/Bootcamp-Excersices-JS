function longestWord(text) {
  let words = text.split(" ");
  let sizes = [];
  for (let i = 0; i < words.length; i++) {
    sizes[i] = words[i].length;
  }
  let maxSize = Math.max.apply(Math, sizes);
  let maxInd = sizes.indexOf(maxSize, 0);
  let longestWord = words[maxInd];
  for (let i = maxInd + 1; i < sizes.length; i++) {
    let j = sizes.indexOf(maxSize, i);
    if (j != -1) {
      longestWord += ", " + words[j];
    }
  }
  return longestWord;
}
