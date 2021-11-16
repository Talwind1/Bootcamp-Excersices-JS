function extractOnlyValue(arrObjects, key) {
  return arrObjects.reduce((previous, current) => {
    previous.push(current[key]);
    return previous;
  }, []);
}

function countOnlyVowels(str) {
  arrStr = str.split("");

  const vowels = arrStr.reduce((vowel, next) => {
    if (isVowel(next)) vowel[next] = (vowel[next] || 0) + 1;

    return vowel;
  }, {});
  return vowels;
}

function isVowel(char) {
  const vowels = ["a", "e", "u", "o", "i", "A", "E", "U", "O", "I"];
  return vowels.includes(char);
}
console.log(countOnlyVowels("TaAl"));

function addKeyAndValue(arr, key, value) {
  const newArr = arr.reduce((previous, current) => {
    current[key] = value;
    previous.push(current);
    return previous;
  }, []);
  return newArr;
}
