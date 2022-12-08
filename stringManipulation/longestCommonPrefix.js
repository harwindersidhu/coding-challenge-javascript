/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

const longestCommonPrefix = function (strs) {
  let prefix = "";
  let i = 0;

  /**
   //One Way to solve this
  let charAtI = strs[0].charAt(0);
  let commonCharacter = true;
  while (commonCharacter) {
    let char = "";
    for (const word of strs) {
      char = word.charAt(i);
      if (char !== charAtI) {
        commonCharacter = false;
      }
    }
    if (commonCharacter) {
      prefix += char;
      i++;
      charAtI = strs[0].charAt(i);
    }

  }

  */

  //Other way to solve this
  while (strs[0][i] && strs.every(word => word[i] === strs[0][i])) i++;

  prefix = strs[0].substr(0, i);

  return prefix;

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));