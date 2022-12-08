/**
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 */

const reverseVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let vowelsArr = [];
  //Get all vowels in a given word
  for (let char of s.split("")) {
    if (vowels.includes(char)) {
      vowelsArr.push(char);
    }
  }

  let result = [];

  //Reverse vowels array
  vowelsArr.reverse();

  //Replace vowel with first vowel in reverse Array and remove that vowel from reverse array
  for (let char of s.split("")) {
    if (vowels.includes(char)) {
      result.push(vowelsArr[0]);
      vowelsArr.shift();
    } else {
      result.push(char);
    }
  }

  return result.join("");
    
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));