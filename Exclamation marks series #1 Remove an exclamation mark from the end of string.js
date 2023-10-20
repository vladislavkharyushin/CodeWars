//DESCRIPTION:
//Remove an exclamation mark from the end of a string. For a beginner kata, you can 
//assume that the input data is always a string, no need to verify it.

//SOLUTION:

function remove (string) {
  if (string[string.length - 1] === '!') {
    return string.slice(0, string.length - 1);
  }
  return string;
}