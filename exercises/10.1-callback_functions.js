//exersice 1
function isString(str, func) {
  if (typeof str !== string) {
    throw new TypeError("str is not a string!")
  }
  if (typeof func !== function) {
    throw new TypeError("func is not a function!")
  }
  else{
    func(str);
  }

}

function print(str) {
  console.log(str);
}

//exersice 2
function firstWordUpperCase(str, func) {
  str = str[0].toUpperCase() + str.slice(1);

  return func(str);
}

//exersice 2
function firstWordUpperCase(str, func) {
  str = str[0].toUpperCase() + str.slice(1);

  return func(str);
}

function dashes(str) {
  let str1 = str.replaceAll(" ", "-");

  return str1;
}

//exercise 3:
function questionMark(str) {
  return str + "?";
}

console.log(firstWordUpperCase("hi what's up", questionMark));
