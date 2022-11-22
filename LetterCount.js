/**
 * Have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number 
 * of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) 
 * and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated 
 * by spaces.
 */

function LetterCount(str) { 
  const wordsArray = str.split(" ");
  let result = -1;
  let repeat = 1;
  for (let word of wordsArray) {
    const maximumRepetition = countSameLettersOfWord(word);
    if (maximumRepetition > repeat) {
      repeat = maximumRepetition;
      result = word;
    }
  }
  // code goes here  
  return result; 

}

function countSameLettersOfWord(word) {
  const array = word.split("");
  let obj = {};
  for (const letter of array) {
    if(obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  const valuesOfObject = Object.values(obj);
  const sortedValuesDescending = valuesOfObject.sort().reverse();
  const maximumRepetition = sortedValuesDescending[0];
  return maximumRepetition;
} 
// keep this function call here 
console.log(LetterCount("Today, is the greatest day ever!"));