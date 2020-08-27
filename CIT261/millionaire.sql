CREATE DATABASE millionaire;
\c millionaire

CREATE TABLE types (
	id Serial PRIMARY Key,
	type varchar(128) not null UNIQUE
);

Create TABLE answers (
	id Serial PRIMARY Key,
	answer VARCHAR(128) not null UNIQUE,
	answer_type INT NOT NULL REFERENCES types(id)
);

CREATE TABLE questions (
	id SERIAL PRIMARY KEY,
	questions varchar(265) NOT NULL,
	answers_id INT NOT NULL REFERENCES answers(id)
);

CREATE Table user_login (
	id serial primary key,
	username varchar(128) NOT NULL unique,
	password Varchar(128) NOT NULL
);

-- SELECT * FROM player_info;
-- SELECT * FROM game_questionnaire;
-- SELECT * FROM game_correct_answers;
-- SELECT * FROM game_incorrect_answers;

INSERT INTO types (TYPE)
  VALUES ('Fruits'), ('Animals'), ('Sports'), ('Colors');

SELECT * FROM types;

INSERT INTO answers (answer, answer_type)
  VALUES ('Banana', 1), ('Apple', 1), ('Strawberry', 1), ('Dog', 2);

INSERT INTO answers (answer, answer_type)
  VALUES ('Blue', 4);

SELECT * From answers A JOIN types T ON A.answer_type=T.id;

INSERT INTO questions (questions, answer_type, answers_id)
  VALUES ('What is the color of the sky?', 4, 5), ('What is man''s best best friend', 2, 4);

SELECT * From questions Q JOIN answers A ON Q.answers_id=A.id;

SELECT * From questions;

SELECT * FROM questions ORDER BY RAND() LIMIT 1;