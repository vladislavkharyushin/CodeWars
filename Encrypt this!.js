//DESCRIPTION:
//You want to create secret messages which can be deciphered by the 
//Decipher this! kata. Here are the conditions:
//Your message is a string containing space separated words.
//You need to encrypt each word in the message using the following rules:
//The first letter must be converted to its ASCII code.
//The second letter must be switched with the last letter
//Keepin' it simple: There are no special characters in the input.

//SOLUTION:

var encryptThis = function(text) {
  if(text === '') {
    return '';
    } else {
      let i = text.split(' ');
      let j = i.map(element => {
        let a = element.split('');
            a[0] = element.charCodeAt(0);
            [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
            return a.join('');});
      return j.join(' ');
    }
}