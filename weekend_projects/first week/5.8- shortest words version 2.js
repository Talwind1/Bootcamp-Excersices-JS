function longestWord(text) {
  let words = text.split(" ");
  let sizes = [];
  for (let i = 0; i < words.length; i++) {
    sizes[i] = words[i].length;
  }
  let maxSize = Math.max.apply(Math, sizes);
  let maxInd = sizes.indexOf(maxSize, 0);
  let maxWord = words[maxInd];
  while (sizes.indexOf(maxSize, maxInd) !== -1) {
    maxInd = sizes.indexOf(maxSize, maxInd);
    maxWord += ", " + words[maxInd];
  }

  return maxWord;
}

console.log(longestWord("heloooo ma kore"));
