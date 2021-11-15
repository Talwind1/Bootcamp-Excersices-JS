//exercise 1
function doubleValues(numbers) {
  const doubles = [];
  numbers.forEach(function (num) {
    if (exist(num, numbers) && !doubles.includes(num)) {
      doubles.push(num);
    }
  });
  return doubles;
}

function exist(num, arr) {
  let isExist = false;
  for (let i = 0; i < arr.length && !isExist; i++) {
    isExist = num === arr[i] && i !== arr.indexOf(num);
  }
  return isExist;
}

//exercise 2
function onlyEvenValues(numbers) {
  const evenNums = [];
  numbers.forEach((num) => {
    if (num % 2 === 0) evenNums.push(num);
  });
  return evenNums;
}

//exercise 3

function showFirstAndLast(arr) {
  const firstAndLast = [arr[0], arr[arr.length - 1]];
  const result = firstAndLast.filter((item) => {
    return typeof item === "string";
  });
  return result;
}

function vowelCount(str) {
  str = str.toLowerCase();
  arrStr = str.split("");
  console.log(arrStr);
  let vowels = {
    a: 0,
    u: 0,
    o: 0,
  };
  arrStr.forEach((char) => {
    switch (char) {
      case "a":
        vowels.a++;
        break;
      case "u":
        vowels.u++;
        break;
      case "o":
        vowels.o++;
        break;
    }
  });
  return vowels;
}

function capitalize(str) {
  return str.toUpperCase();
}

function shiftLetters(str) {
  const arr = str.split("");
  return arr.map((char) => {
    return codePointAt(char) + 1;
  });
}
console.log(shiftLetters("carmush111"));
