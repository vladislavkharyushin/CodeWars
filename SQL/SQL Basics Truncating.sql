--DESCRIPTION:
--Given the following table 'decimals':
--id
--number1
--number2
--Return a table with a single column towardzero where the values are the result of number1 + number2 truncated towards zero.
--SOLUTION:

SELECT TRUNC(number1+number2) AS towardzero
FROM decimals