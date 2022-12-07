/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
 * and removing all non-alphanumeric characters, it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "racaecar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

const validPalindrome = (s) => {
  let regexPattern = /[^A-Za-z0-9]/g;
  const palindrome = s.toLowerCase().replace(regexPattern, "");
  if (palindrome === palindrome.split("").reverse().join("")) return true;
  return false;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));
console.log(validPalindrome(" "));