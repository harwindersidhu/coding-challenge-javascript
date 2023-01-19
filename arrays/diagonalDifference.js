/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For Example = [
 *                [1, 2, 3],
                  [4, 5, 6],
                  [9, 8, 9]  
 *               ]
  Output: 2
 */

function diagonalDifference(arr) {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftDiagonalSum += arr[i][i];
    rightDiagonalSum += arr[i][arr.length - i - 1];
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
