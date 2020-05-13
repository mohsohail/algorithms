function solution(s) {
  let arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  console.log(left, right);
  while (left < right) {
    console.log(arr[left], arr[right]);
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

solution('racecar');
// function solution(A) {
//   console.log(A);
//   let pointer = 0;
//   let count = 0;

//   for (let i = 0; i < A.length; i++) {
//     count++;
//     if (count % 2 === 1) {
//       if (A[i] === A[i + 2] && i + 2 < A.length) {
//       } else {
//         pointer++;
//       }
//     }
//     if (count % 2 === 0) {
//       if (A[i] === A[i + 2] && i + 2 < A.length) {
//       } else {
//         pointer++;
//       }
//     }

//   }

//   // let arr = [...A];
//   // let d = arr.splice(pointer);
//   // console.log(d.length);
//   console.log(Math.abs(pointer - A.length));
// }

// solution([3, 2, 3, 2, 3]);
