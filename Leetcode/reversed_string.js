var reverseString = function (s) {
  console.log(s.reverse());
  return s.reverse();
  let reversed = '';
  for (let character of s) {
    reversed = character + reversed;
  }
  console.log(reversed);
  return reversed;
};

reverseString(['h', 'e', 'l', 'l', 'o']);

function isPalindrome(A) {
  // let regex = /[\W_]/g;
  let smallStr = A.toLowerCase();

  let reversed = A.split('').reverse().join('');
  console.log(A);
  console.log(reversed);
  if (reversed === A) return 1;

  return 0;
}

isPalindrome('A man, a plan, a canal: Panama');
