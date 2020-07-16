const solution = (nums) => {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    res.push(count);
  }
  console.log(res);
};

solution([6, 5, 4, 8]);
