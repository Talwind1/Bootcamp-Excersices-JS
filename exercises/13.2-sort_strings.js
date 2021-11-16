const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//asc sort
foods.sort();

//decs sort
foods.sort((a, b) => {
  return b - a;
});

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

//asc sort with upper case
foodsWithUpperCase.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a == b) return 0;
  return a < b ? -1 : 1;
});

//decs sort with upper case
foodsWithUpperCase.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a == b) return 0;
  return a < b ? 1 : -1;
});
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

words.sort((a, b) => {
  return b.length - a.length;
});

const foodsWithUpperCase2 = [
  "falafel",
  "Sabich",
  "sbich",
  "hummus",
  "pizza with extra pineapple",
];
foodsWithUpperCase2.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a == b) return 0;
  return a < b ? -1 : 1;
});
