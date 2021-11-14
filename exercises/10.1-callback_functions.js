//exersice 1
function isString(str, func) {
  if (typeof str === "string") {
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

function dashes(str) {
  let str1 = str.replaceAll(" ", "-");
  console.log(str1);
  return str1;
}

//exercise 3:
function questionMark(str) {
  return str + "?";
}

console.log(firstWordUpperCase("hi what's up", questionMark));
