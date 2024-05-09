/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function transfrom(str){
  let ans="";
  for(let i=0;i<str.length;i++){
    if(str[i]===" " || str[i]==="," || str[i]==="?" || str[i]==="!" || str[i]==="."){

    }else{
      ans+=str[i];
    }
  }
  return ans;
}
function isPalindrome(str) {
  str = str.toLowerCase();
  str = transfrom(str);
  let low=0;
  let high=str.length-1;
  while(low<high){
    if(str[low]!=str[high]) return false;

    low++;
    high--;
  }
  return true;
}

module.exports = isPalindrome;
