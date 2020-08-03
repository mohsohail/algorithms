var missingNumber = function (nums) {
  n = nums.length;
  sum = n * ((n + 1) / 2);
  arr_total = 0;
  for (let i = 0; i < n; i++) {
    arr_total += nums[i];
  }
  return sum - arr_total;
};

missingNumber([3, 0, 1]);
