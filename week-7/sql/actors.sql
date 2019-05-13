DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INTEGER,
    number_of_oscars INTEGER
);


INSERT INTO actors (name, age, number_of_oscars) VALUES ('Leonardo DiCaprio', 41, 1);

INSERT INTO actors (name, age, number_of_oscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (name, age, number_of_oscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (name, age, number_of_oscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (name, age, number_of_oscars) VALUES ('John Cho', 43, 0);

--Complete table
SELECT * FROM actors;

--Which actors have more than one oscar?
SELECT name, number_of_oscars FROM actors WHERE number_of_oscars > 1;

--Which actors are older than 30 years old?
SELECT name, age FROM actors WHERE age > 30;
