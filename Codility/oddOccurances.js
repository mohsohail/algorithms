function solution(A) {
  let obj = {};
  let val;
  for (let i = 0; i < A.length; i++) {
    if (obj[A[i]] || obj[A[i]] === 0) {
      obj[A[i]] = obj[A[i]] + 1;
    } else {
      obj[A[i]] = 0;
    }
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === 0) {
        val = key;
      }
    }
  }
  return val;
}

let A = [9, 3, 9, 3, 9, 7, 9];
solution(A);
