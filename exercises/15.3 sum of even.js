function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//in line 2 It trying to get out of the range (last index is 9)
//I console looged the function and I got NaN.
// It tried to get the a value which is not exist (this array's last index is 9).
//my fix:

function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8];
}
a = getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
