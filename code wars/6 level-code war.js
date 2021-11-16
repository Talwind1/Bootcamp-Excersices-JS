function arrayDiff(a, b) {
  const diffArr = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      diffArr.push(a[i]);
    }
  }
  a = diffArr;
}

const a = [1, 2];
const b = [1];
arrayDiff(a, b);
console.log(a);
