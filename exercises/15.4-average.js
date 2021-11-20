function calcAverage(arr) {
  var sum;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);

//at line 2 the sum is not initialize and it equal to NaN.

//I used the browser debugger under scope section,
//and I saw that scope section that sun is equal to NaN
//and what we add numbers to NaN we get Nan :(
// my fix:

function calcAverage(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);
