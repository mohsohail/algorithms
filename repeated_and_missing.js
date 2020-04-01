const sum = data => {
  return data.reduce((a, b) => {
    return a + b;
  }, 0);
};

const func = A => {
  let setA = [...new Set(A)];
  let sumOfA = sum(A);
  let sumOfSetA = sum(setA);
  aRepeated = sumOfA - sumOfSetA;

  n = A.length;
  numTotal = (n * (n + 1)) / 2;

  bMissing = numTotal - sumOfSetA;
  console.log(aRepeated, bMissing);
  return [aRepeated, bMissing];
};
func([1, 2, 3, 3, 5]);
