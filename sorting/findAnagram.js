/**
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
 * You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

const findAnagrams = function (s, p) {
  let result = [];
  for (let i = 0; i < s.length - p.length + 1; i++) {
    let subStr = s.substring(i, i + p.length);
    if (isAnagram(subStr, p)) {
      result.push(i);
    }
  }
  return result;
};

const isAnagram = function (a, b) {
  if (a.length != b.length) return false;
  const obj = {};

  for (let i = 0; i < a.length; i++) {
    if (!obj[a[i]]) {
      obj[a[i]] = 0;
    }
    obj[a[i]]++;
  }

  for (let j = 0; j < b.length; j++) {
    if (!obj[b[j]]) {
      return false;
    }
    obj[b[j]]--;
  }

  return true;
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));