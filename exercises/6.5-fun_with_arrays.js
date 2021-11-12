let sister = new Array(100);
let lior = {};
sister.fill(lior);

let arr100 = Array.from({ length: 100 }, (v, k) => k + 1); //arr fill with 1-100

let person = {
  name: "Tal",
  age: 28,
  city: "Tlv",
};

let values = Object.values(person); //convert Obj values to array

let newObj = Object.assign({}, values); //convert array to an Object
console.log(newObj);

Array.isArray(values); // check if it's Array

let sisters = ["Carmit", "Tal", "Lior"];
const nameArrCopy = Array.from(sisters); // copy from another Array! a different prototype
let copySisters = sisters; // creating a copy the influences the original
