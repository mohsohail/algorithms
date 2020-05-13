function solution(num) {
  let steps = 0;

  while (num != 0) {
    if (num % 2 === 0) {
      num = parseInt(num / 2);
    } else {
      num = num - 1;
    }
    steps = steps + 1;
  }
  console.log(steps);
  return steps;
}

solution(14);
