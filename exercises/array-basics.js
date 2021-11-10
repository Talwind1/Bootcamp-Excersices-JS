const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.shift();
people.pop();
people.unshift("Matt"); //add to the front of the array
people.push("Tal"); //add to the end of the array

let i = 0;
let name = people[i];
while (i < people.length) {
  console.log(name);
  if (name === "Mary") {
    break;
  }
  i++;
  name = people[i];
}

let copy = people.slice(indexOf("Mary") + 1);
let maryIndex = people.indexOf("Mary");
let fooIndex = people.indexOf("Foo");

let people1 = ["Greg", "Mary", "Devon", "James"];
let dev = people1.indexOf("Devon") + 1;
people1.splice(devonIndex, 1, "Elizabeth", "Artie");

let bob = ["Bob"];
let withBob = people.concat(bob);
