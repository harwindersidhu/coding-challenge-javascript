/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"
 */

const reverseWords = function(s) {
  const reverseStringArray = [];
  for (const word of s.split(" ")) {
    reverseStringArray.push(word.split("").reverse().join(""));
  }
  return reverseStringArray.join(" ");  
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));