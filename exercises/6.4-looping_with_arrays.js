let populations = [1000000, 20000000, 15000000, 6000000];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
function populationPercentages(populaions) {
  let percentages = [];
  for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populaions[i]));
  }
  return percentages;
}
