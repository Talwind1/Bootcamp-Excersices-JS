let myFamily = [
  { name: "Dani", age: 62, married: true },
  { name: "Rachel", age: 58, married: true },
  { name: "Carmit", age: 31, married: false },
  { name: "Tal", age: 28, married: false },
  { name: "Lior", age: 21, married: false },
];

//filter the married people:
let married = myFamily.filter((person) => {
  return person.married;
});

//logging myFamily names
myFamily.forEach((person) => {
  console.log(person.name);
});

//calculating ages in five years
let agesInFiveYears = myFamily.map((person) => (person.age += 5));

//mimic the methods:
//filter
function findMarried(myFamily) {
  let married = [];
  for (let i = 0; i < myFamily.length; i++) {
    if (myFamily[i].married) married.push(myFamily[i]);
  }
  return married;
}

//forEach

function loggingNames(myFamily) {
  for (let i = 0; i < myFamily.length; i++) {
    console.log(myFamily[i].name);
  }
}

//map

function calculAges(myFamily) {
  let ages = [];
  for (let i = 0; i < myFamily.length; i++) {
    let age = myFamily[i].age + 5;
    ages.push(age);
  }
  return ages;
}
