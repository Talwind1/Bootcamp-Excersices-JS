function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let isrealPercentage = percentageOfWorld1(9);
let usaPercentage = percentageOfWorld1(330);
let cyprusPercentage = percentageOfWorld1(1);

console.log(isrealPercentage);

console.log(usaPercentage);

console.log(cyprusPercentage);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

isrealPercentage = percentageOfWorld2(9);
usaPercentage = percentageOfWorld2(330);
cyprusPercentage = percentageOfWorld2(1);

console.log(isrealPercentage);

console.log(usaPercentage);

console.log(cyprusPercentage);
