--DESCRIPTION:
--to hexYou have access to a table of monsters as follows:
--monsters table schema
--id
--name
--legs
--arms
--characteristics
--Your task is to turn the numeric columns (arms, legs) into equivalent hexadecimal values.

--SOLUTION:

SELECT TO_HEX(legs) as legs, TO_HEX(arms) as arms
FROM monsters;