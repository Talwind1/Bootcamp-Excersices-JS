let sisters = new Array(100);
let lior = {};
sisters.fill(lior);

let person = {
  name: "Tal",
  age: 28,
  city: "Tlv",
};
let values = Object.values(person);

Array.isArray(values);

const arr = (values) => {
  for (let item of values) {
    arr[item] = values[item];
  }
  return arr;
};
console.log(arr);
