function solution(s) {

  let arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  console.log(left, right)
  while (left < right) {
    console.log(arr[left], arr[right])
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++; right--;
  }
  return true;
}

solution('racecar');