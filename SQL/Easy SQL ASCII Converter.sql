--DESCRIPTION:
--Given a demographics table in the following format:
--demographics table schema
--id
--name
--birthday
--race
--you need to return the same table where all text fields (name & race) are changed to the ascii code of their first byte.

--SOLUTION:

SELECT id, ASCII(name) AS name, birthday, ASCII(race) AS race
FROM demographics