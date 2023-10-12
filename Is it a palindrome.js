//DESCRIPTION:
//Write a function that checks if a given string (case insensitive) is a palindrome.
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//SOLUTION:

function isPalindrome(x) {
  x=x.toLowerCase();
  let i=0;
  let j=x.length-1;
  while(i<=j) {
    if (x[i]!=x[j])
      return false;
      i++;
      j--;
  }
    return true
  }