/** 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.

Example:

arr = [1, 1, 0, -1, -1];

There are 5 elements, two positive, two negative and one zero. Their ratios are 2/5, 2/5 and 1/5. Results are printed as:

0.400000
0.400000
0.200000
*/

function plusMinus(arr) {
  // Write your code here
  let positiveNumbers = arr.filter((num) => num > 0);
  let negativeNumbers = arr.filter((num) => num < 0);
  let zeros = arr.filter((num) => num === 0);

  console.log((positiveNumbers.length / arr.length).toFixed(6));
  console.log((negativeNumbers.length / arr.length).toFixed(6));
  console.log((zeros.length / arr.length).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
