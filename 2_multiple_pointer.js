// 2. Multiple Counter

// ####### @@ PROBLEM 1 @@ : ########### //

/* 🧩 Problem: Find Two Numbers That Sum to Zero

You are given a sorted array of numbers (numbers are arranged from smallest to largest).

Your task is to find the first pair of numbers whose sum is 0.

If such a pair exists, return those two numbers as an array.
If no such pair is found, return undefined.
💡 Important Notes:
The array is already sorted.
const inputArr = [-4, 
    
🧩 Problem: Find Two Numbers That Sum to Zero

You are given a sorted array of numbers (numbers are arranged from smallest to largest).

Your task is to find the first pair of numbers whose sum is 0.

If such a pair exists, return those two numbers as an array.
If no such pair is found, return undefined.
💡 Important Notes:
The array is already sorted.-3, -2, 0, 1, 2, 3, 4, 5, 22, 28];
*/
function sumZero() {
  const left = 0;
  const right = inputArr.lengt - 1;

  while (left < right) {
    let sum = inputArr[left] + inputArr[right];
    if (sum === 0) {
      return [inputArr[left], inputArr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
