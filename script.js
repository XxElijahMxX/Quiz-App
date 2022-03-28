// Make a Quiz Classe
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

//  Question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// Displaying Questions
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show next question
        let questionElement =document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // display options 
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice"
            + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// Guess Function
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

// quiz progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}
    `;
}

// Score
function showScores() {
    let quizEndHTML =
        `
            <h1>Quiz Completed</h1>
            <h2 id="score">Your Score Is: ${quiz.score} of ${quiz.
            questions.length}</h2>
            <div class="quiz-repeat">
            <a href="index.html">Retake The Quiz?</a>
            </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
}

// Quiz Questions
let questions = [
    new Question(
        "What does CSS stand for?", ["Cascading Style Sheets", 
        "Color Style Sheets", "Closed Styling Sheet", "Canvas Style Site"], "Cascading Style Sheets"
    ),
    new Question(
        "What comes first when making a webpage?", ["Javascript", "CSS", "HTML", "Neither"], "HTML"
    ),
    new Question(
        "How to apply styling to a class?", [".", "#", "*", "/"], "."
    ),
    new Question(
        "What is a Boolean?", ["Numbers", "Strings", "True/False", "Text"], "True/False"
    ),
    new Question(
        "In CSS how would you change the color of the font?", ["background-color", "color", "font-color", "text-color"], "color"
    ),
    new Question(
       "What is the most popular coding language?", ["Python", "C#", "Javascript", "C++"], "Javascript"
    ),
    new Question(
        "How to define a Variable?", ["let", "var", "const", "all of the above"], "all of the above"
    ),
    new Question(
        "When calling a function what does the syntax end with?", ["()", "[]", "{}", ";"], ";"
    )
];

let quiz = new Quiz(questions);

// show question
displayQuestion();

//timer
(function() {
    var sec = 60;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 5;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();

const score =JSON.parse(localStorage.getItem("score")) || [];
console.log(score);