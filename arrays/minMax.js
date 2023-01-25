/* 
  Given five positive integers, find the minimum and maximum values that can be calculated 
  by summing exactly four of the five integers. Then print the respective minimum and maximum values 
  as a single line of two space-separated long integers. 
*/

function miniMaxSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  const minSUmArray = [...sortedArray];
  minSUmArray.pop();
  const minSum = minSUmArray.reduce((a, b) => a + b, 0);

  const maxSumArray = [...sortedArray];
  maxSumArray.shift();
  const maxSum = maxSumArray.reduce((a, b) => a + b, 0);

  console.log(minSum + " " + maxSum);
}

miniMaxSum([2, 1, 5, 3, 8]);
miniMaxSum([1, 2, 3, 4, 5]);
