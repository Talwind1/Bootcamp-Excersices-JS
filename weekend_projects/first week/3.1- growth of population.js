function growth(p0, percent, aug, p) {
  let population = p0;
  let years = 0;
  while (population < p) {
    population = population + population * (percent / 100) + aug;
    years++;
  }
  return years;
}

console.log(growth(1000, null, 50, 1200));
