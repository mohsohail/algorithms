function solution(A, K) {
  const n = A.length;
  let rotatedArr = [];

  while (K > 0) {
    rotatedArr[0] = A[A.length - 1];

    for (let i = 0; i < n - 1; i++) {
      rotatedArr[i + 1] = A[i];
    }
    A = rotatedArr;
    rotatedArr = [];
    K--;
  }
  return A;
}

let A = [3, 8, 9, 7, 6];
let K = 3;

solution(A, K);
