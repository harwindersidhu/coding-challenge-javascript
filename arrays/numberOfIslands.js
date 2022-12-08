/**
 * Given an "m x n" 2D binary grid, grid, which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 */

const numIslands = function(grid) {
    //When we encounter '1' we will convert all area around it to '0'. Because we will not count all 1s that are top, below, left and right.
    let totalIslands = 0;
    for (let row=0; row<grid.length; row++) {
      for (let col=0; col<grid[row].length; col++) {
        if (grid[row][col] === "1") {
          totalIslands++;
          convertSurroundingsAndVisitedToWater(row, col, grid);
        }
      }
    }

    return totalIslands;
};

const convertSurroundingsAndVisitedToWater = function(row, col, grid) {
  if(grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === "0") return;
  
  grid[row][col] = "0";
  convertSurroundingsAndVisitedToWater(row+1, col, grid);
  convertSurroundingsAndVisitedToWater(row-1, col, grid);
  convertSurroundingsAndVisitedToWater(row, col+1, grid);
  convertSurroundingsAndVisitedToWater(row, col-1, grid);
}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));