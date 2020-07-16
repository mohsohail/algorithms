console.log('hello world');

const min_distance = (arr, x, y) => {
  let min_dist = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        ((x === arr[i] && y === arr[j]) || (x === arr[j] && y === arr[i])) &&
        min_dist > Math.abs(i - j)
      ) {
        min_dist = Math.abs(i - j);
      }
    }
  }
  console.log(min_dist);
  return min_dist;
};

let arr = [2, 5, 3, 5, 4, 4, 2, 3];
let x = 2;
let y = 3;
min_distance(arr, x, y);
