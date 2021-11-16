function max(arr) {
  return arr.reduce((max, currval) => {
    if (currval > max) return currval;
    else return max;
  });
}

function sumOfEven(arr) {
  arr[0] = arr[0] % 2 === 0 ? arr[0] : 0;

  return arr.reduce((evensum, currval) => {
    if (currval % 2 === 0) evensum += currval;
    return evensum;
  });
}

function average(arr) {
  let total = arr.reduce((sum, currval) => {
    return sum + currval;
  });
  let size = arr.length;
  return total / size;
}
