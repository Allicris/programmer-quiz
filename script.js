const startEl = document.getElementById('start');
var minutesLeft = 2;

const answerSelected = document.getElementById('answer-selected')

startButton.addEventListener ('click', startQuiz);
answerSelected.addEventListener ('click', nextQuestion);
finalQuestion.addEventListener ('click', quizDone);
doneButton.addEventListener ('click', finalScores);

function startEl() {
    var timerInterval = setInterval(function() {
        minutesLeft--;
        startEl.textContent = minutesLeft

        if minutesLeft === 0 {
            cleanInterval(timerInterval);
        }
    }
    //effects set time interval
    //includes start quiz function
}, 

function timer() {
    //Maybe a time interval formula goes here
}

function startQuiz() {
//displays a new screen with a question and answers
}

function answerSelected() {
//when clicking any question
//if answered right display a message if answered wrong display a different message
// has the function nextQuestion in the end to keep the quiz going
}

function nextQuestion() {
    //a new question
}

function finalQuestion () {
    //the button would prompt you to the quizDone page
}

function quizDone() {
    //includes a form with a text input and a button to submit answers
    //button would be prompted to the next page 
}

function doneButton() {
//would prompt you to the finalScores page
}

function finalScores() {
    //would grab data from the questions answered and display final score in a message 
}
