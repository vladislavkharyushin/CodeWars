//DESCRIPTION:
//Numbers ending with zeros are boring.
//They might be fun in your world, but not here.
//Get rid of them. Only the ending ones.
//Zero alone is fine, don't worry about it. Poor guy anyway

//SOLUTION:

function noBoringZeros(n) {
  let numArray = n.toString().split('');
  while(numArray[numArray.length - 1] === '0') {
    numArray.pop();
  }
  return +numArray.join('');
}