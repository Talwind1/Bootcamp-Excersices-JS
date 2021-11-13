function toCamelCase(word) {
  word = word[0].toUpperCase() + word.substring(1, word.length);
  let i = 1;
  while (i < word.length) {
    if (word[i] === "-" || word[i] === "_") {
      word =
        word.slice(0, i) +
        word.slice(i + 1, i + 2).toUpperCase() +
        word.slice(i + 2);
      console.log(word);
    }
    i++;
  }
  return word;
}

console.log(toCamelCase("the-stealth-warrior"));
