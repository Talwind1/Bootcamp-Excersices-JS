const mycountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: 9000000,
  neighbours: ["Jordan", "Syria", "Egypt", "Lebanon"],
  describe: function () {
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they
    have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    this.isIsland = !this.neighbours.length;
  },
};

console.log(mycountry.describe());
