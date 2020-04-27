a)Running the codebase


1.Make sure you have node and npm installed.
2.Run npm install.
3.Run npm start(server will start at localhost:9000)


b)Approach to the problem(Assumed number of options as 4.As provied in the example)


1.As we can have minuend and subtrahend of n and m digits(n,m ranging from 1-10), All possibile numbers were taken and logic was written to generate subtrahend and minuend.Randomness was a key factor to generate the questions.
2.checked if the generated numbers satisfy the borrow criteria or not.
3.Created Options-
					a)Firstly pushed the answer.
					b)To generate rest 3 options.Generated the formula ans=minuend-(subtrahend-subtrahend/r) where r<subtrahend/2; 
					c)This ensured relation between options.Also ensured other options are close to the answer and not vague.
					d)For single digit numbers simply used / and constants for other options.This was to ensure options in these cases also had unique relations.
					e)Shuffled the options.So that every question has a random answer out of the 4 options and not the constant one. 

c)DB Design


1.I would create two tables.
2. First mcq table which has all the options and answer
3. Second the main table Question which will have number of Digits of minuend and subtrahend and have mcq as a foreign key.

CREATE TABLE mcq (
    Id serial primary key,
    qid int unique NOT NULL,
    OptA int NOT NULL,
    OptB int NOT NULL,
    OptC int Not Null,
    OptD int not Null,
    Ans int not Null
);
CREATE TABLE Question (
    Id serial primary key,
    qid int NOT NULL,
    SubtrahendDigit int NOT NULL,
    MinuendDigit int NOT NULL,
    Constraint fk_question_mcq_qid
    FOREIGN KEY (qid) REFERENCES mcq(qid)
);

