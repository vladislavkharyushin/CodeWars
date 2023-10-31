//DESCRIPTION:
//Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//P. S. You can use \n in string to jump to the next line.
//Note: newlines should be added between rows, but there should be no trailing newline at the end. 
//If you're unsure about the format, look at the sample tests.

//SOLUTION:

function multiTable(number) {
  return [...Array(10)].map((_, i) => `${i + 1} * ${number} = ${number * i + number}`).join('\n');
}