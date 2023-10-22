--DESCRIPTION:
--Given a payment table, which is a part of DVD Rental Sample Database, with the following schema
--produce a result set for the report that shows a side-by-side comparison of the number and total 
--amounts of payments made in Mike's and Jon's stores broken down by months.
--The resulting data set should be ordered by month using natural order (Jan, Feb, Mar, etc.).
--Note: You don't need to worry about the year component. Months are never repeated because the sample 
--data set contains payment information only for one year.
--The desired output for the report
--month - number of the month (1 - January, 2 - February, etc.)
--total_count - total number of payments
--total_amount - total payment amount
--mike_count - total number of payments accepted by Mike (staff_id = 1)
--mike_amount - total amount of payments accepted by Mike (staff_id = 1)
--jon_count - total number of payments accepted by Jon (staff_id = 2)
--jon_amount - total amount of payments accepted by Jon (staff_id = 2)

--SOLUTION:

SELECT EXTRACT(MONTH FROM payment_date) AS month,
COUNT(payment_id) AS total_count,
CAST(SUM(amount) as decimal) AS total_amount,
COUNT(CASE WHEN staff_id = 1 THEN payment_id
      ELSE NULL END) AS mike_count,
      CAST(SUM(CASE WHEN staff_id = 1 THEN amount
               ELSE NULL END) AS decimal) AS mike_amount,
               COUNT(CASE WHEN staff_id = 2 THEN payment_id
                     ELSE NULL END) AS jon_count,
                     CAST(SUM(CASE WHEN staff_id = 2 THEN amount
                              ELSE NULL END) AS decimal) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month ASC