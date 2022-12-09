/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]
Output: [0]
 */

const sortArrayByParity = function(nums) {
   const evenArray = [];
   const oddArray = [];
   
   for (const num of nums) {
    if (num%2 === 0) {
      evenArray.push(num);
    } else {
      oddArray.push(num);
    }
   }

   return evenArray.concat(oddArray);
};

//We can solve same problem using filter method
const sortArrayByParityFilterMethod = function(nums) {
  const evenArray = nums.filter(x => x%2 === 0);
  const oddArray = nums.filter(x => x%2 !== 0);

  return evenArray.concat(oddArray);
};

console.log(sortArrayByParity([3,1,2,4]));
console.log(sortArrayByParity([0]));

console.log(sortArrayByParityFilterMethod([3,1,2,4]));
console.log(sortArrayByParityFilterMethod([0]));