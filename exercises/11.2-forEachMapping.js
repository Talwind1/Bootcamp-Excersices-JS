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
