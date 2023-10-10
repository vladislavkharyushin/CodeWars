//DESCRIPTION:
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

//SOLUTION:

function getCount(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        vowelsCount++;
        break;
        default:
        break;
    }
  }
  return vowelsCount;
}