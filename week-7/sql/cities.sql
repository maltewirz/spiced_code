DROP TABLE IF EXISTS cities;
--This is how we do comments in SQL

CREATE TABLE cities(
    id SERIAL PRIMARY KEY,
    --VARCHAR is the DATA Type
    --NOT NULL means i MUST insert a city
    --whenever a creat a new row in my table.
    city VARCHAR(255) not null,
    country VARCHAR(255),
    population INTEGER
);

--every SQL command must end with ;

--CREATE data in table
-- creates a new ROW in our table
--Syntax: INSERT INTO name_of_table (col1, col2) VALUES ('value1', 'value2');

INSERT INTO cities (city, country, population) VALUES ('Berlin', 'Germany', 4000000);

INSERT INTO cities (city, country, population) VALUES ('Venice', 'Italy', 250000);

INSERT INTO cities (city, country) VALUES ('Munich', 'Germany');


--READ data from a table
--it won't modify the data in the TABLE
--it's just going to open a table to show what's inside

-- SELECT city, country FROM cities;

-- SELECT * FROM cities;

-- a WHERE clause will specify  a specific row or a series of rows to show us

-- SELECT * FROM cities WHERE country = 'Germany';

-- (3) Updating a row that already EXISTS in our table
-- UPDATE name_of_table
-- SET col1 = 'new value this column should have'
-- WHERE col2 = 'filter'

UPDATE cities
SET population = 2000000
WHERE id = 3;

-- (4) Delete an entire row from our table
-- option 1 for deleting the venice row
-- DELETE FROM cities WHERE id = 2;
--
-- -- option 2 for deleting the venice row
-- DELETE FROM cities WHERE city = 'Venice';

--option 3 for deleting everything except germany:
DELETE FROM cities WHERE country <> 'Germany';







SELECT * FROM cities;
