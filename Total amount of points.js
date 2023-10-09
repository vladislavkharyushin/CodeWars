//DESCRIPTION:
//Our football team has finished the championship.
//Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//Points are awarded for each match as follows:
//if x > y: 3 points (win)
//if x < y: 0 points (loss)
//if x = y: 1 point (tie)
//We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
//Notes:
//our team always plays 10 matches in the championship
//0 <= x <= 4
//0 <= y <= 4

//SOLUTION:

function points(games) {
  let count = 0;
  games.forEach(item =>{
    if (item[0] > item[2]) count += 3;
  if (item[0] === item[2]) count += 1;
  })
  return count
}