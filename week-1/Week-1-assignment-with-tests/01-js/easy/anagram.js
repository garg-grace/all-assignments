/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortedString(str){
  return str.toLowerCase().split("").sort().join();
}

function isAnagram(str1, str2) {
  if(sortedString(str1)===sortedString(str2)){
    return true;
  }
  return false;
}

isAnagram("hiii","byeeee");

module.exports = isAnagram;
