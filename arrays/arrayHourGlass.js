/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * 
 * Example


const arr = [ -9 -9 -9  1 1 1 
               0 -9  0  4 3 2
              -9 -9 -9  1 2 3
               0  0  8  6 6 0
               0  0  0 -2 0 0
               0  0  1  2 4 0 ]

The  hourglass sums are:
-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18

The highest hourglass sum is 28 from the hourglass beginning at row 1 , column 2:
  0 4 3
    1
  8 6 6
 */

function hourglassSum(arr) {
  // Write your code here
  let maxSum = null;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let hourGlassSum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (hourGlassSum > maxSum || maxSum === null) maxSum = hourGlassSum;
    }
  }

  return maxSum;
}

console.log(
  hourglassSum([
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);

console.log(
  hourglassSum([
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7],
  ])
);
