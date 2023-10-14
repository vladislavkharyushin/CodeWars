--DESCRIPTION:
--Given the following table 'decimals':
--decimals table schema
--id
--number1
--number2
--Return a table with two columns (abs, log) where the values in abs 
--are the absolute values of number1 and the values in log are values from number2 in logarithm to base 64.

--SOLUTION:

SELECT CASE WHEN number1 = null THEN 0 ELSE ABS(number1) END AS abs, LOG(64, number2) AS log
FROM decimals