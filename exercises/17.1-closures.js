var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
console.log(firstResult);
var result = firstResult(2);
console.log(result);
// firstResult sets to someFuncion with value of 9, so SomeFunction envokes and returns
//otherFunction, and it console logged it.
//Then, result equal to firstResult with value of 2. firstResult is equal to otherFunction so it's
//envoked with value of 2, and return b. b was changed when someFunction was envoked efore, and result
//equal to b which is 5.
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
//First b2 envokes. function a inside b2 is written so js knows it
//exist,but it sets to undefined (similar as var works) so a=10 set the
//function a to a variable which equal 10. so 10 is an inner variable
//which removed after the scope is removed. so the last console log takes
//the global variable a which equal to 1.

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

//js works a-synchrony, so while setTimeout is running/waiting, js continue
//with other script so it continues with for loop and i get to 3 till
//timeout get to 100, than it console log 3 times 3.
