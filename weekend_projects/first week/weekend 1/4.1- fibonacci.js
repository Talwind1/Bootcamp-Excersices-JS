function fibonacci(startNum, n) {
  const fib = [startNum, 1];
  let i;
  let nextItem;
  for (i = 2; i <= n; i++) {
    // Next fibonacci number = previous + one before previous
    nextItem = fib[i - 2] + fib[i - 1];
    fib[i] = nextItem; //fib.push(nextItem);
  }

  return nextItem;
}
