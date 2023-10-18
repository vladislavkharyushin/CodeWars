//DESCRIPTION:
//Given a string of words, you need to find the highest scoring word.
//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//For example, the score of abad is 8 (1 + 2 + 1 + 4).
//You need to return the highest scoring word as a string.
//If two words score the same, return the word that appears earliest in the original string.
//All letters will be lowercase and all inputs will be valid.

//SOLUTION:

function high(x){
  let words_array = x.split(' ');
  let word_scores = words_array.map((item) => {
    return item.split("").reduce((x, y) => {
      return x + (y.charCodeAt(0) - 96)
    }, 0)
    })
  let best_score_index = word_scores.indexOf(Math.max(...word_scores));
  let best_score_word = words_array[best_score_index];
  return best_score_word;
  }