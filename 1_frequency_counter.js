// ### --- Problem 1 ------- : ### //

/* Write a function that takes 2 arrays and returns true if 2nd array values are the exact  
      square values of the 1st array. or return false.
      eg: 
      1. same([2,3,6],[9,36,4]) would return true 
      2. same ([2,3,6], [4,25]) would return false
      */

// Naive or normal approach
function same_naive(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "not same";
  }

  for (i = 0; i <= arr1.length - 1; i++) {
    const idx = arr2.indexOf(arr1[i] ** 2);
    console.log(idx);
    if (idx === -1) {
      return false;
    }
    arr2.splice(idx, 1);
  }
  console.log(arr2);
  return true;
}
// OUTPUT
// console.log(same_naive([1, 2, 3], [4, 1, 9]));

function same_frequencyCounter(a1, a2) {
  // [2,4,5]
  const fc1 = {};
  const fc2 = {};
  for (let i of a1) {
    fc1[i] = (fc1[i] || 0) + 1;
  }
  for (let i of a2) {
    fc2[i] = (fc2[i] || 0) + 1;
  }

  for (let key in fc1) {
    if (!(key ** 2 in fc2)) {
      return false;
    }
    if (fc2[key ** 2] !== fc1[key]) {
      return false;
    }
  }
  return true;
}
// OUTPUT
// console.log(same_frequencyCounter([1, 2, 3], [1, 4]));

// ####### @@ PROBLEM 2 @@ : ########### //

/* Write a function that would determine if 2 strings are anagram of each other or not from 
given 2 strings 
Eg : 
1. 'cat', 'act' // Return true
2. 'hero', 'eorh'  // Return true
3. 'Hello', 'eHaaM' // Return false
*/

// Anagram Challenge

function isValidAnagram_FrequencyCounter(str1, str2) {
  const counter1 = {};
  const counter2 = {};
  for (i of str1) {
    counter1[i] = (counter1[i] || 0) + 1;
  }
  for (i of str2) {
    counter2[i] = (counter2[i] || 0) + 1;
  }
  console.log(counter1);
  console.log(counter2);
  if (Object.keys(counter1).length < 1 || Object.keys(counter2) < 1) {
    return false;
  }
  for (let key in counter1) {
    console.log("---", key);
    if (!(key in counter2)) {
      return false;
    }
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}
// OUTPUT
// isValidAnagram_FrequencyCounter('', 'aho')
