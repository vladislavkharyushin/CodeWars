--DESCRIPTION:
--You need to build a pivot table WITHOUT using CROSSTAB function.
--Having two tables products and details you need to select a pivot 
--table of products with counts of details occurrences (possible details values are ['good', 'ok', 'bad'].
--Results should be ordered by product's name.
--your query should return table with next columns
--name
--good
--ok
--bad
--Compare your table to the expected table to view the expected results.

--SOLUTION:

WITH good AS (SELECT p.id
  , p.name
  , detail AS good
  , COUNT(d.detail) AS good_count
FROM products AS p
JOIN details AS d
              ON p.id = d.product_id
WHERE detail = 'good'
GROUP BY p.id, p.name, detail
ORDER BY name
),
ok AS (SELECT p.id
  , p.name
  , detail AS ok
  , COUNT(d.detail) AS ok_count
FROM products AS p
JOIN details AS d
       ON p.id = d.product_id
WHERE detail = 'ok'
GROUP BY p.id, p.name, detail
ORDER BY name),
bad AS (SELECT p.id
  , p.name
  , detail AS bad
  , COUNT(d.detail) AS bad_count
FROM products AS p
JOIN details AS d
        ON p.id = d.product_id
WHERE detail = 'bad'
GROUP BY p.id, p.name, detail
ORDER BY name)
SELECT g.name
  , g.good_count AS good
  , o.ok_count AS ok
  , b.bad_count AS bad
FROM good AS g
LEFT JOIN ok AS o
ON g.id  = o.id
LEFT JOIN bad as b
ON o.id = b.id
ORDER BY g.name