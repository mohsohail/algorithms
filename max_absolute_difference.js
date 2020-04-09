const A = [1, -3, 1];

const max_absolute_difference = (A) => {
  let max1 = 0,
    min1 = 0,
    max2 = 0,
    min2 = 0;
  let n = A.length;
  for (let i = 0; i < n; i++) {
    max1 = Math.max(max1, A[i] + i);
    min1 = Math.min(min1, A[i] + i);
    max2 = Math.max(max2, A[i] - i);
    min2 = Math.min(min2, A[i] - i);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, Math.abs(max1 - (A[i] + i)));
    ans = Math.max(ans, Math.abs(min1 - (A[i] + i)));
    ans = Math.max(ans, Math.abs(max2 - (A[i] - i)));
    ans = Math.max(ans, Math.abs(min2 - (A[i] - i)));
  }
  console.log(ans);
  return ans;
};
max_absolute_difference(A);
