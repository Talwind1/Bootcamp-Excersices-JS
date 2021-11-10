const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function letterCount(array) {
  const freq = {};
  for (let i = 0; i < array.length; i++) {
    let word = array[i].toLowerCase().replace(" ", "");
    for (let j = 0; j < word.length; j++) {
      if (freq[word[j]]) {
        freq[word[j]] += 1;
      } else {
        freq[word[j]] = 1;
      }
    }
  }
  return freq;
}
console.log(letterCount(array));
