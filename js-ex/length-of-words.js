function stringLens(words) {
  let stringLens = [];
  for (let i = 0; i < words.length; i++) {
    stringLens.push(words[i].length);
  }
  return stringLens;
}
