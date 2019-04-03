SELECT public.users.email, payments.users_subscriptions.stripe_subscription_id, public.users.created_at 
from public.users, payments.users_subscriptions 
where public.users.user_id = payments.users_subscriptions.user_id
and (payments.users_subscriptions.stripe_subscription_id != '')
and (payments.users_subscriptions.coupon !='PERSEUS2018')
and (email not like '%perseus.de') 
and (email not like '%vov.eu')
and (email not like '%finleap.com')
and (email not like '%test%')
--and (email not like '%signal-iduna.net')
and (email not like '%basler.de')
;

--WHERE email NOT LIKE??

-- Write a query to return the 10 earliest orders in the orders table. Include the id, occurred_at, and total_amt_usd.
SELECT id, occurred_at, total_amt_usd
FROM orders
ORDER BY occurred_at
LIMIT 10;


--Write a query to return the top 5 orders in terms of largest total_amt_usd. Include the id, account_id, and total_amt_usd.
SELECT id, account_id, total_amt_usd
FROM orders
ORDER BY total_amt_usd DESC
LIMIT 5;

--Write a query to return the bottom 20 orders in terms of least total. Include the id, account_id, and total.
SELECT id, account_id, total
FROM orders
ORDER BY total ASC
LIMIT 20;

--Write a query that displays the order ID, account ID, and total dollar amount for all the orders, sorted first by the account ID (in ascending order), and then by the total dollar amount (in descending order). 
SELECT id, account_id, total_amt_usd
FROM orders
ORDER BY account_id ASC, total_amt_usd DESC

--Now write a query that again displays order ID, account ID, and total dollar amount for each order, but this time sorted first by total dollar amount (in descending order), and then by account ID (in ascending order). 
SELECT id, account_id, total_amt_usd
FROM orders
ORDER BY total_amt_usd DESC, account_id ASC

--Compare the results of these two queries above. How are the results different when you switch the column you sort on first?
Ordering by accounts first makes more sense. The latter ordering is pointless.


--Pulls the first 5 rows and all columns from the orders table that have a dollar amount of gloss_amt_usd greater than or equal to 1000.
SELECT *
FROM orders
WHERE gloss_amt_usd >= 1000
LIMIT 5;

--Pulls the first 10 rows and all columns from the orders table that have a total_amt_usd less than 500.
SELECT *
FROM orders
WHERE gloss_amt_usd < 500
LIMIT 10;

--Filter the accounts table to include the company name, website, and the primary point of contact (primary_poc) just for the Exxon Mobil company in the accounts table.
SELECT name, website, primary_poc
FROM accounts
WHERE name = 'Exxon Mobil';

--Create a column that divides the standard_amt_usd by the standard_qty to find the unit price for standard paper for each order. Limit the results to the first 10 orders, and include the id and account_id fields. 
SELECT id, account_id, (standard_amt_usd/standard_qty) as new
FROM orders
LIMIT 10;
--Write a query that finds the percentage of revenue that comes from poster paper for each order. You will need to use only the columns that end with _usd. (Try to do this without using the total column.) Display the id and account_id fields also. NOTE - you will receive an error with the correct solution to this question. This occurs because at least one of the values in the data creates a division by zero in your formula. You will learn later in the course how to fully handle this issue. For now, you can just limit your calculations to the first 10 orders, as we did in question #1, and you'll avoid that set of data that causes the problem. 
SELECT id, account_id, (poster_qty/ (standard_qty+gloss_qty+poster_qty))*100 AS perc_poster
FROM orders
LIMIT 10;

--All the companies whose names start with 'C'. 
SELECT *
FROM accounts
WHERE NAME 
LIKE 'C%'
;

--All companies whose names contain the string 'one' somewhere in the name.
LIKE '%one%'

--All companies whose names end with 's'.
LIKE '%s'

--Use the accounts table to find the account name, primary_poc, and sales_rep_id for Walmart, Target, and Nordstrom.
SELECT name, primary_poc, sales_rep_id
FROM accounts
WHERE name IN ('Walmart', 'Target', 'Nordstrom')
;

--Use the web_events table to find all information regarding individuals who were contacted via the channel of organic or adwords.
SELECT *
FROM web_events
WHERE channel IN ('organic', 'adwords')
;

--Use the accounts table to find the account name, primary poc, and sales rep id for all stores except Walmart, Target, and Nordstrom.
SELECT name, primary_poc, sales_rep_id
FROM accounts
WHERE name NOT IN ('Walmart', 'Target', 'Nordstrom')
;

--Use the web_events table to find all information regarding individuals who were contacted via any method except using organic or adwords methods.
SELECT *
FROM web_events
WHERE channel NOT IN ('organic', 'adwords')
;

--All the companies whose names do not start with 'C'.

SELECT name
FROM accounts
WHERE name NOT LIKE ('C%')
;

--All companies whose names do not contain the string 'one' somewhere in the name.
SELECT name
FROM accounts
WHERE name NOT LIKE '%one%'
;

--All companies whose names do not end with 's'.
SELECT name
FROM accounts
WHERE name NOT LIKE '%s'
;


--Write a query that returns all the orders where the standard_qty is over 1000, the poster_qty is 0, and the gloss_qty is 0.
SELECT *
FROM orders
WHERE standard_qty > 1000 
and poster_qty = 0
and gloss_qty = 0

--Using the accounts table find all the companies whose names do not start with 'C' and end with 's'.
SELECT *
FROM accounts
WHERE name NOT LIKE ('C%') and LIKE ('%s')
;

--Use the web_events table to find all information regarding individuals who were contacted via organic or adwords and started their account at any point in 2016 sorted from newest to oldest.

SELECT *
FROM web_events
WHERE channel NOT IN ('organic', 'adwords')
and occurred_at	BETWEEN '2016.1.1' AND '2017.01.01'
;


--Find list of orders ids where either gloss_qty or poster_qty is greater than 4000. Only include the id field in the resulting table.
SELECT id
FROM orders
WHERE gloss_qty > 4000 
or poster_qty > 4000
;

--Write a query that returns a list of orders where the standard_qty is zero and either the gloss_qty or poster_qty is over 1000.

SELECT id
FROM orders
WHERE standard_qty = 0 
and (poster_qty > 1000 or gloss_qty > 1000)
;


--Find all the company names that start with a 'C' or 'W', and the primary contact contains 'ana' or 'Ana', but it doesn't contain 'eana'.

SELECT *
FROM accounts
WHERE (name LIKE 'C%' OR name LIKE 'W%') 
           AND ((primary_poc LIKE '%ana%' OR primary_poc LIKE '%Ana%') 
           AND primary_poc NOT LIKE '%eana%');


--Try pulling all the data from the accounts table, and all the data from the orders table.
SELECT accounts.*, orders.*
FROM accounts, orders
WHERE accounts.id = orders.account_id;

--Try pulling standard_qty, gloss_qty, and poster_qty from the orders table, and the website and the primary_poc from the accounts table.
SELECT 
accounts.website,
accounts.primary_poc,
orders.standard_qty,
orders.gloss_qty,
orders.poster_qty
FROM accounts, orders
WHERE accounts.id = orders.account_id;


--Provide a table for all web_events associated with account name of Walmart. There should be three columns. Be sure to include the primary_poc, time of the event, and the channel for each event. Additionally, you might choose to add a fourth column to assure only Walmart events were chosen. 

SELECT a.primary_poc, w.occurred_at, w.channel 
FROM web_events as w, accounts as a
WHERE w.account_id = a.id
AND a.name = 'Walmart'

--Provide a table that provides the region for each sales_rep along with their associated accounts. Your final table should include three columns: the region name, the sales rep name, and the account name. Sort the accounts alphabetically (A-Z) according to account name. 

SELECT r.name region, s.name rep, a.name account
FROM sales_reps s, region r, accounts a
WHERE s.region_id = r.id
AND  a.sales_rep_id = s.id
ORDER BY a.name;

--Provide the name for each region for every order, as well as the account name and the unit price they paid (total_amt_usd/total) for the order. Your final table should have 3 columns: region name, account name, and unit price. A few accounts have 0 for total, so I divided by (total + 0.01) to assure not dividing by zero.

SELECT r.name region_name, a.name account_name, 
		(o.total_amt_usd/(o.total+0.01)) unit_price
FROM region r, sales_reps s, accounts a, orders o
WHERE r.id = s.region_id
AND s.id = a.sales_rep_id
AND a.id = o.account_id

--Provide a table that provides the region for each sales_rep along with their associated accounts. This time only for the Midwest region. Your final table should include three columns: the region name, the sales rep name, and the account name. Sort the accounts alphabetically (A-Z) according to account name.

SELECT r.name region_name, s.name sales_r_name, a.name account_name
FROM region r
JOIN sales_reps s
ON r.id = s.region_id
JOIN accounts a
ON s.id = a.sales_rep_id
WHERE r.name = 'Midwest'
ORDER BY a.name;

--Provide a table that provides the region for each sales_rep along with their associated accounts. This time only for accounts where the sales rep has a first name starting with S and in the Midwest region. Your final table should include three columns: the region name, the sales rep name, and the account name. Sort the accounts alphabetically (A-Z) according to account name. 

SELECT r.name region_name, s.name sales_r_name, a.name account_name
FROM region r
JOIN sales_reps s
ON r.id = s.region_id
JOIN accounts a
ON s.id = a.sales_rep_id
WHERE r.name = 'Midwest'
AND s.name LIKE 'S%'
ORDER BY a.name;

--Provide a table that provides the region for each sales_rep along with their associated accounts. This time only for accounts where the sales rep has a last name starting with K and in the Midwest region. Your final table should include three columns: the region name, the sales rep name, and the account name. Sort the accounts alphabetically (A-Z) according to account name.

SELECT r.name region_name, s.name sales_r_name, a.name account_name
FROM region r
JOIN sales_reps s
ON r.id = s.region_id
JOIN accounts a
ON s.id = a.sales_rep_id
WHERE r.name = 'Midwest'
AND s.name LIKE 'K%'
ORDER BY a.name;

--Provide the name for each region for every order, as well as the account name and the unit price they paid (total_amt_usd/total) for the order. However, you should only provide the results if the standard order quantity exceeds 100. Your final table should have 3 columns: region name, account name, and unit price. In order to avoid a division by zero error, adding .01 to the denominator here is helpful total_amt_usd/(total+0.01). 

SELECT r.name region_name, a.name account_name, o.total_amt_usd/(total+0.01) unit_price
FROM region r
JOIN sales_reps s
ON r.id = s.region_id
JOIN accounts a
ON s.id = a.sales_rep_id
JOIN orders o
ON a.id = o.account_id
WHERE o.standard_qty > 100;


--Provide the name for each region for every order, as well as the account name and the unit price they paid (total_amt_usd/total) for the order. However, you should only provide the results if the standard order quantity exceeds 100 and the poster order quantity exceeds 50. Your final table should have 3 columns: region name, account name, and unit price. Sort for the smallest unit price first. In order to avoid a division by zero error, adding .01 to the denominator here is helpful (total_amt_usd/(total+0.01). 

SELECT r.name region_name, a.name account_name, o.total_amt_usd/(total+0.01) unit_price
FROM region r
JOIN sales_reps s
ON r.id = s.region_id
JOIN accounts a
ON s.id = a.sales_rep_id
JOIN orders o
ON a.id = o.account_id
WHERE o.standard_qty > 100
AND o.poster_qty > 50
ORDER BY unit_price

--Provide the name for each region for every order, as well as the account name and the unit price they paid (total_amt_usd/total) for the order. However, you should only provide the results if the standard order quantity exceeds 100 and the poster order quantity exceeds 50. Your final table should have 3 columns: region name, account name, and unit price. Sort for the largest unit price first. In order to avoid a division by zero error, adding .01 to the denominator here is helpful (total_amt_usd/(total+0.01). 

SELECT r.name region_name, a.name account_name, o.total_amt_usd/(total+0.01) unit_price
FROM region r
JOIN sales_reps s
ON r.id = s.region_id
JOIN accounts a
ON s.id = a.sales_rep_id
JOIN orders o
ON a.id = o.account_id
WHERE o.standard_qty > 100
AND o.poster_qty > 50
ORDER BY unit_price DESC

--What are the different channels used by account id 1001? Your final table should have only 2 columns: account name and the different channels. You can try SELECT DISTINCT to narrow down the results to only the unique values.

SELECT a.name account_name, w.channel 
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
WHERE a.id = '1001'

--Find all the orders that occurred in 2015. Your final table should have 4 columns: occurred_at, account name, order total, and order total_amt_usd.

SELECT o.occurred_at, a.name, o.total, o.total_amt_usd
FROM accounts a
JOIN orders o
ON o.account_id = a.id
WHERE o.occurred_at BETWEEN '01-01-2015' AND '01-01-2016'
ORDER BY o.occurred_at DESC;



--Find the total amount of poster_qty paper ordered in the orders table.
SELECT SUM(o.poster_qty)
FROM orders o
;


--Find the total amount of standard_qty paper ordered in the orders table.
SELECT SUM(o.standard_qty)
FROM orders o
;


--Find the total dollar amount of sales using the total_amt_usd in the orders table.

SELECT SUM(o.total_amt_usd)
FROM orders o
;

--Find the total amount spent on standard_amt_usd and gloss_amt_usd paper for each order in the orders table. This should give a dollar amount for each order in the table.
SELECT standard_amt_usd + gloss_amt_usd AS total_standard_gloss
FROM orders;


--Find the standard_amt_usd per unit of standard_qty paper. Your solution should use both an aggregation and a mathematical operator.
SELECT (SUM(o.standard_amt_usd)/ SUM(o.gloss_amt_usd)) unit_cost
FROM orders o
;

--When was the earliest order ever placed? You only need to return the date.
SELECT Min(o.occurred_at) first_order
FROM orders o
;

--Try performing the same query as in question 1 without using an aggregation function. 
SELECT o.occurred_at first_order
FROM orders o
ORDER BY o.occurred_at
LIMIT 1
;

--When did the most recent (latest) web_event occur?
SELECT MAX(w.occurred_at) first_event
FROM web_events w
;

--Try to perform the result of the previous query without using an aggregation function.

SELECT w.occurred_at first_event
FROM web_events w
ORDER BY w.occurred_at DESC
LIMIT 1
;

--Find the mean (AVERAGE) amount spent per order on each paper type, as well as the mean amount of each paper type purchased per order. Your final answer should have 6 values - one for each paper type for the average number of sales, as well as the average amount.
SELECT AVG(o.standard_amt_usd) s_$, AVG(o.gloss_amt_usd) G_$, AVG(o.poster_amt_usd)P_$, AVG(o.standard_qty) S,AVG(o.gloss_qty) G ,AVG(o.poster_qty) P
FROM orders o
;

--Via the video, you might be interested in how to calculate the MEDIAN. Though this is more advanced than what we have covered so far try finding - what is the MEDIAN total_usd spent on all orders?


SELECT *
FROM (SELECT total_amt_usd
      FROM orders
      ORDER BY total_amt_usd
      LIMIT 3457) AS Table1
ORDER BY total_amt_usd DESC
LIMIT 2;

--Which account (by name) placed the earliest order? Your solution should have the account name and the date of the order.
SELECT a.name, o.occurred_at
FROM accounts a
JOIN orders o
ON o.account_id = a.id
ORDER BY o.occurred_at
LIMIT 1
;


--Find the total sales in usd for each account. You should include two columns - the total sales for each company's orders in usd and the company name.
SELECT a.name, SUM(o.total_amt_usd)
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name
;


--Via what channel did the most recent (latest) web_event occur, which account was associated with this web_event? Your query should return only three values - the date, channel, and account name.

SELECT w.occurred_at, w.channel, a.name
FROM web_events w
JOIN accounts a
ON a.id = w.account_id
ORDER BY w.occurred_at DESC
LIMIT 1
;

--Find the total number of times each type of channel from the web_events was used. Your final table should have two columns - the channel and the number of times the channel was used.
SELECT w.channel, COUNT(w.channel) times_used
FROM web_events w
JOIN accounts a
ON a.id = w.account_id
GROUP BY w.channel
;


--Who was the primary contact associated with the earliest web_event? 

SELECT w.channel, a.primary_poc
FROM web_events w
JOIN accounts a
ON a.id = w.account_id
ORDER BY w.occurred_at
LIMIT 1
;

--What was the smallest order placed by each account in terms of total usd. Provide only two columns - the account name and the total usd. Order from smallest dollar amounts to largest.

SELECT a.name, MIN(o.total_amt_usd) smallest
FROM orders o
JOIN accounts a
ON a.id = o.account_id
GROUP BY a.name
ORDER BY smallest
;

--Find the number of sales reps in each region. Your final table should have two columns - the region and the number of sales_reps. Order from fewest reps to most reps.

SELECT r.name, COUNT(s.id) number
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
GROUP BY r.name
;


--For each account, determine the average amount of each type of paper they purchased across their orders. Your result should have four columns - one for the account name and one for the average quantity purchased for each of the paper types for each account. 
SELECT a.name, a.id, AVG(o.standard_qty) standard,AVG(o.poster_qty)poster,AVG(o.gloss_qty)gloss
FROM accounts a
JOIN orders o
ON a.id = o.account_id
GROUP BY a.name, a.id
;

--For each account, determine the average amount spent per order on each paper type. Your result should have four columns - one for the account name and one for the average amount spent on each paper type.
SELECT a.name, a.id, AVG(o.standard_amt_usd) standard,AVG(o.poster_amt_usd )poster,AVG(o.gloss_amt_usd)gloss
FROM accounts a
JOIN orders o
ON a.id = o.account_id
GROUP BY a.name, a.id
;

--Determine the number of times a particular channel was used in the web_events table for each sales rep. Your final table should have three columns - the name of the sales rep, the channel, and the number of occurrences. Order your table with the highest number of occurrences first.

SELECT s.name, w.channel, COUNT(*) num_events
FROM accounts a
JOIN web_events w
ON a.id = w.account_id
JOIN sales_reps s
ON s.id = a.sales_rep_id
GROUP BY s.name, w.channel
ORDER BY num_events DESC;

--Determine the number of times a particular channel was used in the web_events table for each region. Your final table should have three columns - the region name, the channel, and the number of occurrences. Order your table with the highest number of occurrences first.

SELECT COUNT(*) num, r.name, w.channel
FROM web_events w
JOIN accounts a
ON w.account_id = a.id
JOIN sales_reps s
ON a.sales_rep_id = s.id
JOIN region r
ON s.region_id = r.id
GROUP BY r.name, w.channel
ORDER BY num DESC
;


--Use DISTINCT to test if there are any accounts associated with more than one region.
SELECT a.id as "account id", r.id as "region id", 
a.name as "account name", r.name as "region name"
FROM accounts a
JOIN sales_reps s
ON s.id = a.sales_rep_id
JOIN region r
ON r.id = s.region_id;
--and
SELECT DISTINCT id, name
FROM accounts;

--Have any sales reps worked on more than one account?

SELECT s.id, s.name, COUNT(*) num_accounts
FROM accounts a
JOIN sales_reps s
ON s.id = a.sales_rep_id
GROUP BY s.id, s.name
ORDER BY num_accounts;
--and 

SELECT DISTINCT id, name
FROM sales_reps;

--How many of the sales reps have more than 5 accounts that they manage?
SELECT s.id, s.name, COUNT(*) num
FROM accounts a
JOIN sales_reps s
ON s.id = a.sales_rep_id
GROUP BY s.id, s.name
HAVING COUNT(*) > 5
ORDER BY num
;

--How many accounts have more than 20 orders?
SELECT a.name, a.id, COUNT(*) num
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name, a.id
HAVING COUNT(*) > 20
ORDER BY num
;

--Which account has the most orders?
SELECT a.name, a.id, COUNT(*) num
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name, a.id
HAVING COUNT(*) > 20
ORDER BY num DESC
LIMIT 1
;

--How many accounts spent more than 30,000 usd total across all orders?
SELECT a.name, a.id, SUM(o.total_amt_usd) cash
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name, a.id
HAVING SUM(o.total_amt_usd) > 30000
ORDER BY cash DESC
;

--How many accounts spent less than 1,000 usd total across all orders?
SELECT a.name, a.id, SUM(o.total_amt_usd) cash
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name, a.id
HAVING SUM(o.total_amt_usd) < 1000
ORDER BY cash DESC
;

--Which account has spent the most with us?
SELECT a.name, a.id, SUM(o.total_amt_usd) cash
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name, a.id
ORDER BY cash DESC
LIMIT 1
;

--Which account has spent the least with us?
SELECT a.name, a.id, SUM(o.total_amt_usd) cash
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name, a.id
ORDER BY cash ASC
LIMIT 1
;


--Which accounts used facebook as a channel to contact customers more than 6 times?
SELECT w.channel, a.name, COUNT(*) num
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
GROUP BY a.name, w.channel
HAVING w.channel = 'facebook' AND COUNT(*) > 6
ORDER BY num DESC
;

--Which account used facebook most as a channel? 
SELECT w.channel, a.name, COUNT(*) num
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
GROUP BY a.name, w.channel
HAVING w.channel = 'facebook'
AND COUNT(*) > 6
ORDER BY num DESC
LIMIT 1
;

--Which channel was most frequently used by most accounts?
SELECT w.channel, a.name, COUNT(*) num
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
GROUP BY a.name, w.channel
ORDER BY num DESC
LIMIT 10
;


--Find the sales in terms of total dollars for all orders in each year, ordered from greatest to least. Do you notice any trends in the yearly sales totals?
SELECT DATE_PART ('year', o.occurred_at), SUM(o.total_amt_usd) num
FROM orders o
GROUP BY DATE_PART ('year', o.occurred_at)
ORDER BY num DESC
;

-- new schreibweise
SELECT DATE_PART ('year', o.occurred_at), SUM(o.total_amt_usd) num
FROM orders o
GROUP BY 1
ORDER BY 2 DESC
;

--Which month did Parch & Posey have the greatest sales in terms of total dollars? Are all months evenly represented by the dataset?
SELECT DATE_PART ('month', o.occurred_at), SUM(o.total_amt_usd) num
FROM orders o
GROUP BY 1
ORDER BY 2 Desc
;

--Which year did Parch & Posey have the greatest sales in terms of total number of orders? Are all years evenly represented by the dataset?

SELECT DATE_PART ('year', o.occurred_at), COUNT(o.id) num
FROM orders o
GROUP BY 1
ORDER BY 2 Desc
;

--Which month did Parch & Posey have the greatest sales in terms of total number of orders? Are all months evenly represented by the dataset?

SELECT DATE_PART ('month', o.occurred_at), COUNT(o.id) num
FROM orders o
WHERE o.occurred_at BETWEEN '2014-01-01' AND '2017-01-01'
GROUP BY 1
ORDER BY 1 Desc
;


--In which month of which year did Walmart spend the most on gloss paper in terms of dollars?
SELECT DATE_PART ('month', o.occurred_at), SUM(o.gloss_amt_usd) num
FROM orders o
JOIN accounts a
ON o.account_id = a.id
WHERE o.occurred_at BETWEEN '2014-01-01' AND '2017-01-01'
AND a.name = 'Walmart'
GROUP BY 1
ORDER BY 2 Desc
;

--Write a query to display for each order, the account ID, total amount of the order, and the level of the order - ‘Large’ or ’Small’ - depending on if the order is $3000 or more, or smaller than $3000.
SELECT o.account_id, o.total, 
	CASE WHEN o.total >= 3000 THEN 'Large'
    ELSE 'Small' END AS order_size
FROM orders o
;
--Write a query to display the number of orders in each of three categories, based on the 'total' amount of each order. The three categories are: 'At Least 2000', 'Between 1000 and 2000' and 'Less than 1000'.
SELECT o.account_id, o.total,
 CASE WHEN o.total >= 2000 THEN 'At Least 2000'
    WHEN o.total < 2000 AND o.total >= 1000  THEN 'Between 1000 and 2000'
    ELSE 'Less than 1000' END AS order_size
FROM orders o
GROUP BY 1, 2
;

--We would like to understand 3 different levels of customers based on the amount associated with their purchases. The top level includes anyone with a Lifetime Value (total sales of all orders) greater than 200,000 usd. The second level is between 200,000 and 100,000 usd. The lowest level is anyone under 100,000 usd. Provide a table that includes the level associated with each account. You should provide the account name, the total sales of all orders for the customer, and the level. Order with the top spending customers listed first.

SELECT a.name, SUM(o.total_amt_usd) total_spent,
 CASE WHEN SUM(o.total_amt_usd) >= 200000 THEN 'greater than 200,000'
    WHEN SUM(o.total_amt_usd) < 200000 AND SUM(o.total_amt_usd) >= 100000  THEN 'Between 200,000 and 100,000'
    ELSE 'under 100000' END AS lifetime_value
FROM orders o
JOIN accounts a
ON o.account_id = a.id
GROUP BY 1
ORDER BY 2 DESC
;


--We would now like to perform a similar calculation to the first, but we want to obtain the total amount spent by customers only in 2016 and 2017. Keep the same levels as in the previous question. Order with the top spending customers listed first.
SELECT a.name, SUM(o.total_amt_usd) total_spent,
 CASE WHEN SUM(o.total_amt_usd) >= 200000 THEN 'greater than 200,000'
    WHEN SUM(o.total_amt_usd) < 200000 AND SUM(o.total_amt_usd) >= 100000  THEN 'Between 200,000 and 100,000'
    ELSE 'under 100000' END AS lifetime_value
FROM orders o
JOIN accounts a
ON o.account_id = a.id
WHERE o.occurred_at BETWEEN '2016-01-01' AND '2018-01-01'
GROUP BY 1
ORDER BY 2 DESC
;

--We would like to identify top performing sales reps, which are sales reps associated with more than 200 orders. Create a table with the sales rep name, the total number of orders, and a column with top or not depending on if they have more than 200 orders. Place the top sales people first in your final table.

SELECT s.name, COUNT(o.total),
	CASE WHEN COUNT(o.total) > 200 THEN 'top'
	ELSE 'not' END AS top_or_not

FROM sales_reps s
JOIN accounts a
ON a.sales_rep_id = s.id
JOIN orders o 
ON o.account_id = a.id
GROUP BY s.name
;


--The previous didn't account for the middle, nor the dollar amount associated with the sales. Management decides they want to see these characteristics represented as well. We would like to identify top performing sales reps, which are sales reps associated with more than 200 orders or more than 750000 in total sales. The middle group has any rep with more than 150 orders or 500000 in sales. Create a table with the sales rep name, the total number of orders, total sales across all orders, and a column with top, middle, or low depending on this criteria. Place the top sales people based on dollar amount of sales first in your final table. You might see a few upset sales people by this criteria!

SELECT s.name, COUNT(o.total) total_orders, SUM(o.total_amt_usd) total_sum,
	CASE WHEN COUNT(o.total) > 200 OR SUM(o.total_amt_usd) > 750000 THEN 'top'
	WHEN COUNT(o.total) > 150 OR SUM(o.total_amt_usd) > 500000 THEN 'middle'
	ELSE 'not' END AS top_or_not

FROM sales_reps s
JOIN accounts a
ON a.sales_rep_id = s.id
JOIN orders o 
ON o.account_id = a.id
GROUP BY s.name
ORDER BY 3
;


-- First Subquery

SELECT channel, AVG(event_count) AS avg_event_count
FROM 	(SELECT DATE_TRUNC('day', occurred_at) as day,
		channel,COUNT(*) as event_count
		FROM web_events
		GROUP BY 1,2
		ORDER BY 1) sub
GROUP BY 1
GROUP BY 2 DESC

--Earliers order

SELECT MIN(DATE_TRUNC('month', occurred_at)) month_order
FROM orders

-- This time, we us the results from earlier query to find other orders

SELECT AVG(standard_qty) st, AVG(gloss_qty) gl, AVG(poster_qty) po
FROM orders
WHERE DATE_TRUNC('month', occurred_at) =
	(SELECT DATE_TRUNC('month', MIN(occurred_at))
	FROM orders)

--Provide the name of the sales_rep in each region with the largest amount of total_amt_usd sales.

SELECT region, MAX(total_amt) total_amt
FROM

		(SELECT s.name agent, r.name region, SUM(o.total_amt_usd) total_amt
		FROM sales_reps s
		JOIN region r
		ON s.region_id = r.id
		JOIN accounts a
		ON s.id = a.sales_rep_id
		JOIN orders o
		ON a.id = o.account_id

		GROUP BY 1,2 ) sub1

GROUP BY 1

-- Final join for end result

SELECT sub3.agent, sub3.region, sub3.total_amt
FROM
		(SELECT region, MAX(total_amt) total_amt
		FROM
				(SELECT s.name agent, r.name region, SUM(o.total_amt_usd) total_amt
				FROM sales_reps s
				JOIN region r
				ON s.region_id = r.id
				JOIN accounts a
				ON s.id = a.sales_rep_id
				JOIN orders o
				ON a.id = o.account_id

				GROUP BY 1,2 ) sub1  --Sub1 gives us agents, the region, and total_amt of that agent
		GROUP BY 1) sub2  -- Sub2 gives us region and the MAX of (total_amt) but no agent. If we would include agents here, we would show all agents and regions and their highest amount, BUT WE ONLY WANT THE HIGHEST).

JOIN

				(SELECT s.name agent, r.name region, SUM(o.total_amt_usd) total_amt
				FROM sales_reps s
				JOIN region r
				ON s.region_id = r.id
				JOIN accounts a
				ON s.id = a.sales_rep_id
				JOIN orders o
				ON a.id = o.account_id

				GROUP BY 1,2 
				ORDER BY 3 DESC) sub3 -- sub3 is a copy of sub1 so we can join the names to sub 2
ON sub2.region = sub3.region AND sub2.total_amt = sub3.total_amt
		--Here we now take sub1 which is our perfect result bnut missing agents and just tack on the agents name through the identifier, in this case, total_amt.

--USING WITH: Provide the name of the sales_rep in each region with the largest amount of total_amt_usd sales

WITH 	sub1 AS (
				SELECT s.name agent, r.name region, SUM(o.total_amt_usd) total_amt
				FROM sales_reps s
				JOIN region r
				ON s.region_id = r.id
				JOIN accounts a
				ON s.id = a.sales_rep_id
				JOIN orders o
				ON a.id = o.account_id
				GROUP BY 1,2
					),
		sub2 AS (
					SELECT region, MAX(total_amt) total_amt
					FROM
						(SELECT s.name agent, r.name region, SUM(o.total_amt_usd) total_amt
						FROM sales_reps s
						JOIN region r
						ON s.region_id = r.id
						JOIN accounts a
						ON s.id = a.sales_rep_id
						JOIN orders o
						ON a.id = o.account_id
						GROUP BY 1,2 ) sub1 
					GROUP BY 1
					)


SELECT sub1.agent, sub1.region, sub1.total_amt
FROM sub2
JOIN sub1
ON sub2.region = sub1.region AND sub2.total_amt = sub1.total_amt


--For the region with the largest (sum) of sales total_amt_usd, how many total (count) orders were placed? 

SELECT r.name, COUNT(*)
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a
ON s.id = a.sales_rep_id
JOIN orders o
ON a.id = o.account_id
GROUP BY 1

HAVING SUM(total_amt_usd) = (
	SELECT MAX(sum_region)
	FROM
		(SELECT  r.name region_name, SUM(total_amt_usd) sum_region
		FROM sales_reps s
		JOIN region r
		ON s.region_id = r.id
		JOIN accounts a
		ON s.id = a.sales_rep_id
		JOIN orders o
		ON a.id = o.account_id
		GROUP BY 1) sub1 ) -- this gives the region and the respective sum

--WITH rewrite 

WITH sub1 AS (
				SELECT  r.name region_name, SUM(total_amt_usd) sum_region
						FROM sales_reps s
						JOIN region r
						ON s.region_id = r.id
						JOIN accounts a
						ON s.id = a.sales_rep_id
						JOIN orders o
						ON a.id = o.account_id
						GROUP BY 1
			)

SELECT r.name, COUNT(*)
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a
ON s.id = a.sales_rep_id
JOIN orders o
ON a.id = o.account_id
GROUP BY 1

HAVING SUM(total_amt_usd) = (
	SELECT MAX(sum_region)
	FROM sub1) 


--For the name of the account that purchased the most (in total over their lifetime as a customer) standard_qty paper, how many accounts still had more in total purchases? 

--part 1: customer that purchased most standard paper
SELECT a.name account_name, SUM(standard_qty) standard_total, SUM(o.total) total
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY 1
ORDER BY 2 DESC
LIMIT 1
;

--part 2: only total for part 1

SELECT total
FROM
	(SELECT a.name account_name, SUM(standard_qty) standard_total, SUM(o.total) total
	FROM accounts a
	JOIN orders o
	ON o.account_id = a.id
	GROUP BY 1
	ORDER BY 2 DESC
	LIMIT 1) sub


--part 3: 
SELECT a.name account_name
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY 1
HAVING SUM(o.total) > (
					SELECT total
					FROM
							(SELECT a.name account_name, SUM(standard_qty) standard_total, SUM(o.total) total
							FROM accounts a
							JOIN orders o
							ON o.account_id = a.id
							GROUP BY 1
							ORDER BY 2 DESC
							LIMIT 1) sub);
--part 4:
SELECT COUNT(*)
FROM (SELECT a.name account_name
	FROM accounts a
	JOIN orders o
	ON o.account_id = a.id
	GROUP BY 1
	HAVING SUM(o.total) > (SELECT total
				   FROM	(SELECT a.name account_name, SUM(standard_qty) standard_total, SUM(o.total) total
						FROM accounts a
						JOIN orders o
						ON o.account_id = a.id
						GROUP BY 1
						ORDER BY 2 DESC
						LIMIT 1) sub)
	)counter_tab
		

-- WITh REWRITE

WITH sub AS (
				SELECT a.name account_name, SUM(standard_qty) standard_total, SUM(o.total) total
				FROM accounts a
				JOIN orders o
				ON o.account_id = a.id
				GROUP BY 1
				ORDER BY 2 DESC
				LIMIT 1
)

SELECT COUNT(*)
FROM (SELECT a.name account_name
	FROM accounts a
	JOIN orders o
	ON o.account_id = a.id
	GROUP BY 1
	HAVING SUM(o.total) > (SELECT total
				   FROM sub)
	)counter_tab


--For the customer that spent the most (in total over their lifetime as a customer) total_amt_usd, how many web_events did they have for each channel?

--part1: customer lifetime total_amt_usd

SELECT a.id, a.name account_name, SUM(o.total_amt_usd) tot_spent
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY 1,2
ORDER BY 3 DESC
LIMIT 1;

--part2:

SELECT a.name, w.channel, COUNT(*)
FROM accounts a
JOIN web_events w
ON w.account_id = a.id AND a.id = (
									SELECT account_id
									FROM
										(SELECT a.id account_id, a.name account_name, SUM(o.total_amt_usd) tot_spent
										FROM accounts a
										JOIN orders o
										ON o.account_id = a.id
										GROUP BY 1,2
										ORDER BY 3 DESC
										LIMIT 1) sub1
									)	
GROUP BY 1,2
ORDER BY 3 DESC;

--WITH REWRITE

WITH sub1 AS (
				SELECT a.id account_id, a.name account_name, SUM(o.total_amt_usd) tot_spent
				FROM accounts a
				JOIN orders o
				ON o.account_id = a.id
				GROUP BY 1,2
				ORDER BY 3 DESC
				LIMIT 1
)

SELECT a.name, w.channel, COUNT(*)
FROM accounts a
JOIN web_events w
ON w.account_id = a.id AND a.id = (	SELECT account_id
									FROM sub1)	
GROUP BY 1,2
ORDER BY 3 DESC;

--What is the lifetime average amount spent in terms of total_amt_usd for the top 10 total spending accounts?

--part1: lifetime average total_amt_usd

SELECT a.id account_id, a.name account_name, SUM(total_amt_usd) sum_spending
FROM accounts a
JOIN orders o 
ON o.account_id = a.id
GROUP BY 1,2
ORDER BY 3 DESC
LIMIT 10

--part2: agg.

SELECT AVG(sum_spending)
FROM (
	SELECT a.id account_id, a.name account_name, SUM(total_amt_usd) sum_spending
	FROM accounts a
	JOIN orders o 
	ON o.account_id = a.id
	GROUP BY 1,2
	ORDER BY 3 DESC
	LIMIT 10
) sub1

-- WITH REWRITE

WITH sub1 AS (
				SELECT a.id account_id, a.name account_name, SUM(total_amt_usd) sum_spending
				FROM accounts a
				JOIN orders o 
				ON o.account_id = a.id
				GROUP BY 1,2
				ORDER BY 3 DESC
				LIMIT 10
)

SELECT AVG(sum_spending)
FROM sub1

--What is the lifetime average amount spent in terms of total_amt_usd for only the companies that spent more than the average of all orders.

--avg spending of all orders

SELECT AVG(o.total_amt_usd) avg_all
FROM orders o

--companies spent above average of all companies

SELECT o.account_id account_id, AVG(o.total_amt_usd) total_above_avg
FROM orders o
GROUP BY 1
HAVING AVG(o.total_amt_usd) > (SELECT AVG(o.total_amt_usd) avg_all
								FROM orders o
								)

--part3: average of that:

SELECT AVG(total_above_avg) avg_above_avg
FROM (

		SELECT o.account_id account_id, AVG(o.total_amt_usd) total_above_avg
		FROM orders o
		GROUP BY 1
		HAVING AVG(o.total_amt_usd) > (SELECT AVG(o.total_amt_usd) avg_all
										FROM orders o
										)

)sub1

--WITH REWRITE

WITH sub1 AS (
				SELECT o.account_id account_id, AVG(o.total_amt_usd) total_above_avg
						FROM orders o
						GROUP BY 1
						HAVING AVG(o.total_amt_usd) > (SELECT AVG(o.total_amt_usd) avg_all
														FROM orders o
														)
			)

SELECT AVG(total_above_avg) avg_above_avg
FROM sub1




LEFT & RIGHT Quizzes
--In the accounts table, there is a column holding the website for each company. The last three digits specify what type of web address they are using. A list of extensions (and pricing) is provided here. Pull these extensions and provide how many of each website type exist in the accounts table.
SELECT RIGHT(a.website, 3) AS domain, COUNT(*)
FROM accounts a
GROUP BY 1
ORDER BY 2 DESC
;

--There is much debate about how much the name (or even the first letter of a company name) matters. Use the accounts table to pull the first letter of each company name to see the distribution of company names that begin with each letter (or number). 
SELECT LEFT(a.name, 1) AS name, COUNT(*)
FROM accounts a
GROUP BY 1
ORDER BY 1
;

--Use the accounts table and a CASE statement to create two groups: one group of company names that start with a number and a second group of those company names that start with a letter. What proportion of company names start with a letter?

SELECT number_or_letter, COUNT(*) num
FROM
		(SELECT LEFT(a.name, 1) AS name,
			CASE WHEN LEFT(a.name, 1) IN ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9') THEN 'number'
				ELSE 'letter' END AS number_or_letter
		FROM accounts a)sub1
GROUP BY 1
;
--Consider vowels as a, e, i, o, and u. What proportion of company names start with a vowel, and what percent start with anything else?

SELECT vowel_or_other, COUNT(*) num
FROM
		(SELECT LEFT(a.name, 1) AS name,
			CASE WHEN LEFT(a.name, 1) IN ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U') THEN 'vowel'
				ELSE 'other' END AS vowel_or_other
		FROM accounts a)sub1
GROUP BY 1
;

--Use the accounts table to create first and last name columns that hold the first and last names for the primary_poc. 

SELECT a.primary_poc,
		LEFT(primary_poc, POSITION(' ' IN LOWER(a.primary_poc))) as first_name,
		RIGHT(primary_poc, LENGTH(primary_poc)-POSITION(' ' IN LOWER(a.primary_poc))) as last_name
FROM accounts a
;

--Now see if you can do the same thing for every rep name in the sales_reps table. Again provide first and last name columns.

SELECT s.name,
		LEFT(s.name, POSITION(' ' IN LOWER(s.name))) as first_name,
		RIGHT(s.name, LENGTH(s.name)-POSITION(' ' IN LOWER(s.name))) as last_name
FROM sales_reps s
;

--Quizzes CONCAT
--Each company in the accounts table wants to create an email address for each primary_poc. The email address should be the first name of the primary_poc . last name primary_poc @ company name .com.

WITH sub1 AS (SELECT a.primary_poc,
				LEFT(primary_poc, POSITION(' ' IN LOWER(a.primary_poc))-1) as first_name,
				RIGHT(primary_poc, LENGTH(primary_poc)-POSITION(' ' IN LOWER(a.primary_poc))) as last_name,
				replace(a.name, ' ', '') as company_short
			FROM accounts a)

SELECT first_name || '.' || last_name || '@' || company_short || '.com'
FROM sub1	

--You may have noticed that in the previous solution some of the company names include spaces, which will certainly not work in an email address. See if you can create an email address that will work by removing all of the spaces in the account name, but otherwise your solution should be just as in question 1. Some helpful documentation is here.
WITH sub1 AS (SELECT a.primary_poc,
				LEFT(primary_poc, POSITION(' ' IN LOWER(a.primary_poc))-1) as first_name,
				RIGHT(primary_poc, LENGTH(primary_poc)-POSITION(' ' IN LOWER(a.primary_poc))) as last_name,
				replace(a.name, ' ', '') as company_short
			FROM accounts a)

SELECT first_name || '.' || last_name || '@' || company_short || '.com'
FROM sub1	

--We would also like to create an initial password, which they will change after their first log in. The first password will be the first letter of the primary_poc's first name (lowercase), then the last letter of their first name (lowercase), the first letter of their last name (lowercase), the last letter of their last name (lowercase), the number of letters in their first name, the number of letters in their last name, and then the name of the company they are working with, all capitalized with no spaces.

WITH sub1 AS (SELECT a.primary_poc, a.name company_name,
				LEFT(primary_poc, POSITION(' ' IN LOWER(a.primary_poc))-1) as first_name,
				RIGHT(primary_poc, LENGTH(primary_poc)-POSITION(' ' IN LOWER(a.primary_poc))) as last_name,
				replace(a.name, ' ', '') as company_short
			FROM accounts a)

SELECT first_name, last_name, first_name || '.' || last_name || '@' || company_short || '.com' as email, 

		LEFT(LOWER(first_name), 1) || --  first letter of the primary_poc's first name (lowercase)
		RIGHT(LOWER(first_name),1) || --  as first letter of the primary_poc's first name (lowercase)
		LEFT(LOWER(last_name), 1)  || --  as first letter of the primary_poc's first name (lowercase)
		LENGTH(first_name)		||
		LENGTH(last_name) ||
		REPLACE(UPPER(company_name), ' ', '')

		As password
FROM sub1	

--CAST QUIZ

--overview query
SELECT *
FROM sf_crime_data
LIMIT 10

--ccurrent date: 01/31/2014 08:00:00 AM +0000  correct date: YYYY-MM-DD

SELECT date, 
		SUBSTRING(date, 7, 5)  || '-'|| -- year 
		LEFT(date, 2) || '-'|| --month 
		SUBSTRING(date, 4,2) AS concatenated_data  -- day 
FROM sf_crime_data
LIMIT 10


--now with casting

SELECT date, 
		SUBSTRING(date, 7, 4)  || '-'|| -- year 
		LEFT(date, 2) || '-'|| --month 
		SUBSTRING(date, 4,2) AS concatenated_data,  -- day 
        CAST (SUBSTRING(date, 7, 4)  || '-'|| LEFT(date, 2) || '-'|| SUBSTRING(date, 4,2) AS date) AS formatted_data
FROM sf_crime_data
LIMIT 10

-- 1: COALECE TEST

SELECT *
FROM accounts a
LEFT JOIN orders o
ON a.id = o.account_id
WHERE o.total IS NULL;

--COALESCE to fill in accounts.id with account.id for NULL

SELECT COALESCE (a.id, a.id) filled_id, *
FROM accounts a
LEFT JOIN orders o
ON a.id = o.account_id
WHERE o.total IS NULL;

--USE COALESCE to fill in orders.account_id with account.id for NULL VALUE

SELECT COALESCE(a.id, a.id) filled_id, 
		COALESCE (o.account_id, a.id) a, *
FROM accounts a
LEFT JOIN orders o
ON a.id = o.account_id
WHERE o.total IS NULL;

--COALESCE with 0 for qty and usd
SELECT COALESCE(a.id, a.id) filled_id, 
		COALESCE (o.account_id, a.id) accountid,
		COALESCE (o.standard_qty, 0) standard_qty,	
		COALESCE(o.gloss_qty,0) gloss_qty, 
		COALESCE(o.poster_qty,0) poster_qty, 
		COALESCE(o.total,0) total, 
		COALESCE(o.standard_amt_usd,0) standard_amt_usd, 
		COALESCE(o.gloss_amt_usd,0) gloss_amt_usd, 
		COALESCE(o.poster_amt_usd,0) poster_amt_usd, 
		COALESCE(o.total_amt_usd,0) total_amt_usd
FROM accounts a
LEFT JOIN orders o
ON a.id = o.account_id
WHERE o.total IS NULL;

--Subquery: run query in 1 with where removed and COunt number of ids

SELECT COUNT(*)
FROM accounts a
LEFT JOIN orders o
ON a.id = o.account_id;  -- REsult: 6913

--Windows Functions Query I

SELECT standard_qty,
		DATE_TRUNC('month', occurred_at) as month,
		SUM(standard_qty) OVER (PARTITION BY DATE_TRUNC('month', occurred_at) ORDER BY occurred_at) AS running_total
FROM orders

--Windows Functions Query II Using Derek's previous video as an example, create another running total. This time, create a running total of standard_amt_usd (in the orders table) over order time with no date truncation. Your final table should have two columns: one with the amount being added for each new row, and a second with the running total.

SELECT standard_amt_usd,
		SUM(standard_amt_usd) OVER (ORDER BY occurred_at) AS running_total
FROM orders


--Now, modify your query from the previous quiz to include partitions. Still create a running total of standard_amt_usd (in the orders table) over order time, but this time, date truncate occurred_at by year and partition by that same year-truncated occurred_at variable. Your final table should have three columns: One with the amount being added for each row, one for the truncated date, and a final column with the running total within each year.

SELECT standard_amt_usd,
		DATE_TRUNC('year', occurred_at) as year,
		SUM(standard_amt_usd) OVER (PARTITION BY DATE_TRUNC('year', occurred_at) ORDER BY occurred_at) AS running_total
FROM orders

--Row_number and rank: Select the id, account_id, and total variable from the orders table, then create a column called total_rank that ranks this total amount of paper ordered (from highest to lowest) for each account using a partition. Your final table should have these four columns.

SELECT id,
	account_id,
    RANK() OVER (PARTITION BY account_id ORDER BY occurred_at) AS total_rank
FROM orders

--Aggregates in Window Functions with and without ORDER BY

SELECT id,
       account_id,
       standard_qty,
       DATE_TRUNC('month', occurred_at) AS month,
       DENSE_RANK() OVER (PARTITION BY account_id ORDER BY DATE_TRUNC('month',occurred_at)) AS dense_rank,
       SUM(standard_qty) OVER (PARTITION BY account_id ORDER BY DATE_TRUNC('month',occurred_at)) AS sum_std_qty,
       COUNT(standard_qty) OVER (PARTITION BY account_id ORDER BY DATE_TRUNC('month',occurred_at)) AS count_std_qty,
       AVG(standard_qty) OVER (PARTITION BY account_id ORDER BY DATE_TRUNC('month',occurred_at)) AS avg_std_qty,
       MIN(standard_qty) OVER (PARTITION BY account_id ORDER BY DATE_TRUNC('month',occurred_at)) AS min_std_qty,
       MAX(standard_qty) OVER (PARTITION BY account_id ORDER BY DATE_TRUNC('month',occurred_at)) AS max_std_qty
FROM orders

--Now remove ORDER BY DATE_TRUNC('month',occurred_at) in each line of the query that contains it in the SQL Explorer below. Evaluate your new query, compare it to the results in the SQL Explorer above, and answer the subsequent quiz questions.

SELECT id,
       account_id,
       standard_qty,
       DATE_TRUNC('month', occurred_at) AS month,
       DENSE_RANK() OVER (PARTITION BY account_id ) AS dense_rank,
       SUM(standard_qty) OVER (PARTITION BY account_id ) AS sum_std_qty,
       COUNT(standard_qty) OVER (PARTITION BY account_id ) AS count_std_qty,
       AVG(standard_qty) OVER (PARTITION BY account_id ) AS avg_std_qty,
       MIN(standard_qty) OVER (PARTITION BY account_id ) AS min_std_qty,
       MAX(standard_qty) OVER (PARTITION BY account_id ) AS max_std_qty
FROM orders

-- Same query but with an alias. Now, create and use an alias to shorten the following query (which is different than the one in Derek's previous video) that has multiple window functions. Name the alias account_year_window, which is more descriptive than main_window in the example above.

SELECT id,
       account_id,
       DATE_TRUNC('year',occurred_at) AS year,
       DENSE_RANK() OVER main_window AS dense_rank,
       total_amt_usd,
       SUM(total_amt_usd) OVER main_window AS sum_total_amt_usd,
       COUNT(total_amt_usd) OVER main_window AS count_total_amt_usd,
       AVG(total_amt_usd) OVER main_window AS avg_total_amt_usd,
       MIN(total_amt_usd) OVER main_window AS min_total_amt_usd,
       MAX(total_amt_usd) OVER main_window AS max_total_amt_usd
FROM orders

WINDOW main_window AS (PARTITION BY account_id ORDER BY DATE_TRUNC('year',occurred_at))

--Comparing a Row to Previous Row LAG

SELECT account_id,
       standard_sum,
       LAG(standard_sum) OVER (ORDER BY standard_sum) AS lag,
       standard_sum - LAG(standard_sum) OVER (ORDER BY standard_sum) AS lag_difference
FROM (
       SELECT account_id,
       SUM(standard_qty) AS standard_sum
       FROM orders 
       GROUP BY 1
      ) sub

----Comparing a Row to next Row LEAD

SELECT account_id,
       standard_sum,
       LEAD(standard_sum) OVER (ORDER BY standard_sum) AS lead,
       LEAD(standard_sum) OVER (ORDER BY standard_sum) - standard_sum AS lead_difference
FROM (
SELECT account_id,
       SUM(standard_qty) AS standard_sum
       FROM orders 
       GROUP BY 1
     ) sub

--Combined LAG and LEAD

SELECT account_id,
       standard_sum,
       LAG(standard_sum) OVER (ORDER BY standard_sum) AS lag,
       LEAD(standard_sum) OVER (ORDER BY standard_sum) AS lead,
       standard_sum - LAG(standard_sum) OVER (ORDER BY standard_sum) AS lag_difference,
       LEAD(standard_sum) OVER (ORDER BY standard_sum) - standard_sum AS lead_difference
FROM (
SELECT account_id,
       SUM(standard_qty) AS standard_sum
  FROM orders 
 GROUP BY 1
 ) sub


--Modify Derek's query from the previous video in the SQL Explorer below to perform this analysis. You'll need to use occurred_at and total_amt_usd in the orders table along with LEAD to do so. In your query results, there should be four columns: occurred_at, total_amt_usd, lead, and lead_difference.

SELECT total_sum,
       occurred_at,
       LAG(total_sum) OVER (ORDER BY occurred_at) AS lag,
       LEAD(total_sum) OVER (ORDER BY occurred_at) AS lead,
       total_sum - LAG(total_sum) OVER (ORDER BY occurred_at) AS lag_difference,
       LEAD(total_sum) OVER (ORDER BY occurred_at) - total_sum AS lead_difference
FROM (
SELECT SUM(total_amt_usd) AS total_sum,
       occurred_at
  FROM orders 
 GROUP BY 2
 ) sub

--Use the NTILE functionality to divide the accounts into 4 levels in terms of the amount of standard_qty for their orders. Your resulting table should have the account_id, the occurred_at time for each order, the total amount of standard_qty paper purchased, and one of four levels in a standard_quartile column.

SELECT
       account_id,
       occurred_at,
       standard_qty,
       NTILE(4) OVER (PARTITION BY account_id ORDER BY standard_qty) AS standard_quartile
  FROM orders 
 ORDER BY account_id DESC

--Use the NTILE functionality to divide the accounts into two levels in terms of the amount of gloss_qty for their orders. Your resulting table should have the account_id, the occurred_at time for each order, the total amount of gloss_qty paper purchased, and one of two levels in a gloss_half column.

SELECT
       account_id,
       occurred_at,
       gloss_qty,
       NTILE(2) OVER (PARTITION BY account_id ORDER BY gloss_qty) AS gloss_half
  FROM orders 
 ORDER BY account_id DESC

--Use the NTILE functionality to divide the orders for each account into 100 levels in terms of the amount of total_amt_usd for their orders. Your resulting table should have the account_id, the occurred_at time for each order, the total amount of total_amt_usd paper purchased, and one of 100 levels in a total_percentile column.
SELECT
       account_id,
       occurred_at,
       total_amt_usd,
       NTILE(100) OVER (PARTITION BY account_id ORDER BY total_amt_usd) AS total_percentile
  FROM orders 
 ORDER BY account_id DESC

--FULL OUTER JOIN each account who has a sales rep and each sales rep that has an account (all of the columns in these returned rows will be full) but also each account that does not have a sales rep and each sales rep that does not have an account (some of the columns in these returned rows will be empty)

SELECT *
FROM accounts a
FULL OUTER JOIN sales_reps s
ON s.id = a.sales_rep_id

-- if unmatched rows exist, you can use 
WHERE accounts.sales_rep_id IS NULL OR sales_reps.id IS NULL

-- Quiz: JOINs with Comparison Operators: the following SQL Explorer, write a query that left joins the accounts table and the sales_reps tables on each sale rep's ID number and joins it using the < comparison operator on accounts.primary_poc and sales_reps.name

SELECT a.name account_name,
		a.primary_poc poc,
		s.name sales_name
FROM accounts a
JOIN sales_reps s
ON s.id = a.sales_rep_id
AND a.primary_poc < s.name

-- SELF JOIN

SELECT we1.id AS we_id,
       we1.account_id AS we1_account_id,
       we1.occurred_at AS we1_occurred_at,
       we1.channel AS we1_channel,
       we2.id AS we2_id,
       we2.account_id AS we2_account_id,
       we2.occurred_at AS we2_occurred_at,
       we2.channel AS we2_channel
  FROM web_events we1 
 LEFT JOIN web_events we2
   ON we1.account_id = we2.account_id
  AND we1.occurred_at > we2.occurred_at
  AND we1.occurred_at <= we2.occurred_at + INTERVAL '1 day'
ORDER BY we1.account_id, we2.occurred_at

--Appending Data via UNION. Write a query that uses UNION ALL on two instances (and selecting all columns) of the accounts table. Then inspect the results and answer the subsequent quiz.
SELECT *
FROM accounts a1

UNION  ALL

SELECT *
FROM accounts a1

--Pretreating Tables before doing a UNION. Add a WHERE clause to each of the tables that you unioned in the query above, filtering the first table where name equals Walmart and filtering the second table where name equals Disney. Inspect the results then answer the subsequent quiz.

SELECT *
FROM accounts a1
WHERE a1.name = 'Walmart'

UNION  ALL

SELECT *
FROM accounts a2
WHERE a2.name = 'Disney'

--Performing Operations on a Combined Dataset. Perform the union in your first query (under the Appending Data via UNION header) in a common table expression and name it double_accounts. Then do a COUNT the number of times a name appears in the double_accounts table. If you do this correctly, your query results should have a count of 2 for each name.

WITH double_accounts AS (
SELECT *
FROM accounts a1
WHERE a1.name = 'Walmart'

UNION  ALL

SELECT *
FROM accounts a2
WHERE a2.name = 'Disney'
)

SELECT COUNT(*)
FROM double_accounts


--Joining Subqueries

SELECT DATE_TRUNC('day', o.occurred_at) AS date,
		COUNT(DISTINCT a.sales_rep_id) AS active_sales_reps,
		COUNT(DISTINCT o.id) AS orders,
		COUNT(DISTINCT we.id) AS web_visits
FROM accounts a
JOIN orders o
ON o.account_id = a.id
JOIN web_events we
ON DATE_TRUNC('day', we.occurred_at) = DATE_TRUNC('day', o.occurred_at)
GROUP BY 1
ORDER BY 1 DESC

--new query (takes long)

SELECT o.occurred_at AS date,
		a.sales_rep_id,
		o.id AS order_id,
		we.id AS web_event_id
FROM accounts a
JOIN orders o
ON o.account_id = a.id
JOIN web_events we
ON DATE_TRUNC('day', we.occurred_at) = DATE_TRUNC('day', o.occurred_at)
ORDER BY 1 DESC

--new query (quicker)

SELECT COALESCE(orders.date, web_events.date) AS date,
		orders.active_sales_reps,
		orders.orders,
		web_events.web_visits
FROM(

SELECT DATE_TRUNC('day', o.occurred_at) AS date,
		COUNT(a.sales_rep_id) AS active_sales_reps,
		COUNT(o.id) AS orders
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY 1
) orders

FULL JOIN 

(
SELECT DATE_TRUNC('day', we.occurred_at) AS date,
		COUNT(we.id) AS web_visits
FROM web_events we
GROUP BY 1
) web_events

ON web_events.date = orders.date
ORDER BY 1 DESC






