CREATE TABLE voteTable (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	vote_number INT NOT NULL,
	last_vote VARCHAR(100) NOT NULL
);

INSERT INTO voteTable (name, vote_number, last_vote) VALUES ('Cats', 0, '2024/10/10 00:00:00');
INSERT INTO voteTable (name, vote_number, last_vote) VALUES ('Dogs', 0, '2024/10/10 00:00:00');