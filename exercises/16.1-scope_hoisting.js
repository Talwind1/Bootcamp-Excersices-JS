//block 1
function funcA() {
  //right down the func was envoke so it's start running.
  console.log(a); //a declare later with var word so js knows it exist and
  //*undefined* is logged to the console.
  console.log(foo()); //foo envoke, return *2* so it's logged to the console
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

//Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //The method envoked from the object and the console log:
//*'Aurelio De Rosa'*
var test = obj.prop.getFullName;
console.log(test()); //Test is a var which its value is a function. when test envoked,
//it return this.fullName. Since 'this' is called from the global
//environment, it returns the full name that apear in the global:
//*'John Doe'*

//block 3:
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
//b is equal to 0 is a global variable(a variable declared without word such as:let,var or const)
//is a global parameter and there is an access to this from every place in the code.
// a is declared with the word let, so it's scope- hoisted and after the function runs it removes.

//Block 4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
//js firstly read the hole script and store varibles and functions.So it store the
//updated funcC - the second func declare.
// After that, js run the functions- the funC envoked so 2 is logged to the console.

//Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);
// d is a global variable so its logged to the console. e was define inside
//a function so
