--DESCRIPTION:
--Given the following table 'decimals':
--id
--number1
--number2
--Return a table with two columns (number1, number2), the value in number1 should be rounded down and the value in number2 should be rounded up.

--SOLUTION:

SELECT FLOOR(number1) as number1, CEILING(number2) as number2
FROM decimals