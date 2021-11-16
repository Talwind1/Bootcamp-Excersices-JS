const numbers = [1, -5, 666, 2, 400, 11];

function acsSort(numbers) {
  numbers.sort((a, b) => a - b);
}

function decsSort(numbers) {
  numbers.sort((a, b) => b - a);
}
