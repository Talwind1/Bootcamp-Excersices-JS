let mikeAvg = (116 + 94 + 123) / 3;
let johnAvg = (89 + 120 + 103) / 3;

let winner;
if (mikeAvg > johnAvg) {
  winner = mikeAvg;
  console.log(`Mike's team win. Their average score is ${winner}`);
} else if (mikeAvg < johnAvg) {
  winner = johnAvg;
  console.log(`John's team win. Their average score is ${winner}`);
} 
else {
  console.log("There is a draw");
}
