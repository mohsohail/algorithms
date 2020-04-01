const arr = [1, 2, 3, 4, -10];

const maxSubArray = A => {
  let max_so_far = A[0];
  let max_ending_here = A[0];
  for (let i = 1; i < A.length; i++) {
    max_ending_here = Math.max(max_ending_here + A[i], A[i]);
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
  }
  return max_so_far;
};

maxSubArray(arr);
