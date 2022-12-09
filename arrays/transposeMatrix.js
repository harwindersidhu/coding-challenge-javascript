/**
 * Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:
Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 */

const transpose = function(matrix) {
  let transposeMatrix = [];
    for (let r=0; r<matrix[0].length; r++) {
      const arr = [];
      for (let c=0; c<matrix.length; c++) {
        arr.push(matrix[c][r]);
      }
      transposeMatrix.push(arr);
    }

    return transposeMatrix;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transpose([[1,2,3],[4,5,6]]));