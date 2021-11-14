const populations = [9000000, 350000000, 38000000, 47000000];

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

function populationPercentages(populations) {
  const percentages = [];
  let i = 0;
  while (i < populations.length) {
    percentages[i] = percentageOfWorld(populations[i]);
    i++;
  }
  return percentages;
}
