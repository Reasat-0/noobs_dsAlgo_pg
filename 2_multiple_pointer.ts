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
// function sumZero(inputArr: number[]): [number, number] | undefined {
//   let left = 0;
//   let right = inputArr.length - 1;

//   while (left < right) {
//     let sum = inputArr[left] + inputArr[right];
//     if (sum === 0) {
//       return [inputArr[left], inputArr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// 🧩 Problem: Find unique values from an array

/* You are given an array, it should be sorted. from that array you would need to find the 
 unique values.. eg: [-1, -1, -3, 2, 3 , 4] should return 5 */

// ROUGH
// function findUniqueCount(givenArr) {
//   let count = 0;
//   let j = 0;
//   for (let i = 0; i < givenArr.length; i++) {
//     if (givenArr[i] !== givenArr[j]) {
//       count++;
//       j = i;
//     }
//   }
//   return count;
// }

console.log("Hello....");

const input = [-3, -1, -1, 2, 3, 4, 6, 6, 6];

// i = 4, j = 5
// [ -1, -3, 2, 3, 4, 4 ]

function findUniqueCount(givenArr: number[]): number {
  if (givenArr.length === 0) return 0;
  let i = 0;
  for (var j: number = i + 1; j < givenArr.length; j++) {
    if (givenArr[i] !== givenArr[j]) {
      i++;
      givenArr[i] = givenArr[j]!;
    }
  }
  return i + 1;
}

console.log(findUniqueCount(input));
