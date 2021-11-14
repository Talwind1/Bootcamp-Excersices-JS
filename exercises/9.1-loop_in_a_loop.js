const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let continent of listOfNeighbours) {
  for (country of continent) {
    console.log(`Neighbour: ${country}`);
  }
}
