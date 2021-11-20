function shortestWord(text) {
  let words = text.split(" ");
  let sizes = new Array(words.length);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    sizes[i] = word.length;
  }
  return Math.min.apply(Math, sizes);
}
