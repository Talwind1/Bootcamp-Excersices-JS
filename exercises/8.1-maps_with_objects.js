let sis1 = { name: "Tal" };
let sis2 = { name: "Lior" };
let sis3 = { name: "Carmit" };

const map1 = new Map();

map1.set(sis1, 28);
map1.set(sis2, 21);
map1.set(sis3, 31);
console.log(map1);

for (let [key, value] of map1) {
  console.log(key.name, value);
}
