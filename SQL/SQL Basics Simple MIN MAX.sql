--DESCRIPTION:
--For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum ages out of all the people.

--SOLUTION:

SELECT MIN(age) AS age_min, MAX(age) AS age_max
FROM people