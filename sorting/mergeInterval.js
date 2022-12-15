/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

const merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let i=0; i<intervals.length-1; i++) {
      if (overlap(result[result.length-1], intervals[i+1])) {
        const firstElement = [result[result.length-1][0], intervals[i+1][0]].sort((a, b) => a-b)[0];
        const secondElement = [result[result.length-1][1], intervals[i+1][1]].sort((a, b) => a-b)[1];
        result.splice(result.length-1);
        result.push([firstElement, secondElement]);
      } else {
        result.push(intervals[i+1]);
      }
    }
    return result;
};

const overlap = function(arr1, arr2) {
  if ((arr1[1] >= arr2[0] && arr2[1]  >= arr1[1]) || (arr2[1] >= arr1[0] && arr1[1]  >= arr2[1])) return true;
  return false;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,4],[0,4]]));
console.log(merge([[1,4],[0,0]]));
console.log(merge([[1,4],[0,1]]));
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));