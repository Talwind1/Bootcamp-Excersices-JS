console.time("stoper1");
obj1 = {};

for (let i = 0; i < 1000000; i++) {
  obj1[i] = i + 1;
}
console.timeEnd("stoper1");

console.time("stoper2");
map1 = new Map();

for (let i = 0; i < 1000000; i++) {
  map1[i] = i + 1;
}
console.timeEnd("stoper2");

//map is faster!!!!

//looking for a property
console.time("stoper1");

let a = obj1[12378];

console.timeEnd("stoper1");

console.time("stoper2");

let b = map1[12378];

console.timeEnd("stoper2");

//map is faster!!!!

//adding an entry

console.time("stoper1");
obj1["Tal"] = "Wind";
console.timeEnd("stoper1");

console.time("stoper2");
map1["Tal"] = "Wind";
console.timeEnd("stoper2");

//map is faster!!!!

//deleting an entry

console.time("stoper1");
delete obj1["Tal"];
console.timeEnd("stoper1");

console.time("stoper2");
delete map1["Tal"];
console.timeEnd("stoper2");
