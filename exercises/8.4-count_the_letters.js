const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function letterCount(array) {
  const dict = {};
  for (let i = 0; i < array.length; i++) {
    let word = array[i].toLowerCase().replace(" ", "");
    for (let j = 0; j < word.length; j++) {
      if (dict[word[j]]) {
        dict[word[j]] += 1;
      } else {
        dict[word[j]] = 1;
      }
    }
  }
  return dict;
}
console.log(letterCount(array));
