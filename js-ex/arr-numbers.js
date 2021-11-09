const arr = [1, 7, 3, 0, -5, 7, 3, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

function arrayLength(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter++;
  }
  return counter;
}

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function arrayMulti(arr) {
  let multi = 1;
  for (let i = 0; i < arr.length; i++) {
    multi *= arr[i];
  }
  return multi;
}
