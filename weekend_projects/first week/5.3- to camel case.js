function toCamelCase(word) {
  word = word[0].toUpperCase() + word.substring(1, word.length - 1);
  let i = 1;
  while (i < word.length) {
    if (word[i] === "-" || word[i] === "_") {
      word =
        word.substring(0, i) +
        word.substring(i + 1, i + 2).toUpperCase() +
        word.substring(i + 2);
      console.log(word);
    }
    // else{
    //   word =
    // }
    i++;
  }
  return word;
}

console.log(toCamelCase("the-stealth-warrior"));
