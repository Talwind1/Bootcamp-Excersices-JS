function steps(N) {
  let s = "";
  for (let i = 0; i < N; i++) {
    s += " ";
  }
  for (let i = 0; i < N; i++) {
    s = s.slice(0, i) + "#" + s.slice(i + 1);
    console.log(s);
  }
}
