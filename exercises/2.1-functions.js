function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let israel = describeCountry("Israel", 9, "Jerusalem");
let france = describeCountry("France", 67, "Paris");
let spain = describeCountry("Spain", 47, "Barcelona");

console.log(israel);
console.log(france);
console.log(spain);
