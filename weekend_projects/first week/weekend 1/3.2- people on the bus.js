function bus(arrBus) {
  let total = 0;
  for (let i = 0; i < arrBus.length; i++) {
    total = total + arrBus[i][0] - arrBus[i][1];
  }
  return total;
}
