const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.shift(); //remove  the front of the array
people.pop(); //remove to the end of the array
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

let copy = people.slice(2);
console.log(copy);
people.indexOf("Mary");
people.indexOf("Foo");

const people1 = ["Greg", "Mary", "Devon", "James"];
people1.splice(2, 1, "Elizabeth", "Artie"); //removes Devon using splice and adding two more names
let withBob = people1 + "Bob";
console.log(withBob);
