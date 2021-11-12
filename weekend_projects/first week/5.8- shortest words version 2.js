function longestWord(text) {
  let words = text.split(" ");
  let sizes = new Array(words.length);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    sizes[i] = word.length;
  }
  let mac;
  return Math.max.apply(Math, sizes);
}
