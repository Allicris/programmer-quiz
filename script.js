
var timeEl = document.querySelector("#timer");
var timeLeft = 60;
var timerInterval = 0;
var startPage = document.querySelector(".card-holder");
var quiz = document.querySelector(".question-container");
var startQuiz = document.querySelector("#start-quiz");
let score = 0;
var inputBox = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var scoreList = document.querySelector(".score-list");

function setTime() {
    timerInterval = setInterval(function () {
        score = timeLeft;
        //I added the "00:" for aesthetic purposes
        timeEl.textContent = "Time: 00:" + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        } else {
            timeLeft--;
        }
    }, 1000);

    startPage.style.display = "none"; // Hides the start page
    quiz.style.display = "block"; // Displays the quiz container
};

//This event listener sets the time when the start quiz button is clicked. 
startQuiz.addEventListener("click", function () {
    setTime();
    switchContent();
});

//Questions for the quiz
var questionsKey = [
    {
        question: "Which item is the first one listed on an array?",
        option1: "1. [1]",
        option2: "2. [0]",
        option3: "3. [-1]",
        option4: "4. [100]",
        answer: "2. [0]",
    },
    {
        question: "What does && and || stand for?",
        option1: "1. and & and",
        option2: "2. and & or",
        option3: "3. and & or/and",
        option4: "4. true & false",
        answer: "3. and & or/and"
    },
    {
        question: "Which symbol is used for comments in Javascript?",
        option1: "1. <!--",
        option2: "2. /*",
        option3: "3. //",
        option4: "4. --",
        answer: "3. //",
    },
    {
        question: "Which one is NOT a looping structure in JavaScript?",
        option1: "1. For",
        option2: "2. For-while loops",
        option3: "3. While",
        option4: "4. Do-while loops",
        answer: "2. For-while loops",
    },
    {
        question: "Which one is NOT a JavaScript pop-up box?",
        option1: "1. Alert",
        option2: "2. Confirm and",
        option3: "3. Alarm",
        option4: "4. Prompt",
        answer: "3. Alarm",
    },
];

//Variables for quiz  
var question = document.querySelector(".question");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");

//Varibles to be dispayed when the user gets the answer correct or wrong
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

//Sets the question to start at the index 0
var questionIndex = 0;
var containerEl = document.querySelector(".question-container");

//Switches the content when there is a click on the question container element
containerEl.addEventListener("click", switchContent);

//The content that is set to change when this function is called, if the user is on the last question the done button will be displayed. 
function switchContent() {
    if (questionIndex === questionsKey.length - 1) {
        doneButton.style.display = "block";
    }
    question.textContent = questionsKey[questionIndex].question;
    option1.textContent = questionsKey[questionIndex].option1;
    option2.textContent = questionsKey[questionIndex].option2;
    option3.textContent = questionsKey[questionIndex].option3;
    option4.textContent = questionsKey[questionIndex].option4;
};

//Handle incorrect answer will always be called when option 1 and 4 are clicked due them being set as the wrong answers for the entire quiz. 
option1.addEventListener("click", handleIncorrectAnswer);
function handleIncorrectAnswer() {
    correct.style.display = "none";
    wrong.style.display = "block";
    if (timeLeft >= 10) {
        timeLeft -= 10;
        questionIndex++;
    } else {
        clearInterval(timerInterval)
        finalResultPage();
    }
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        finalResultPage();
    }
};

//Handle correct answer will always be called when the user selects the option that matches with the text content for option 2 and 3, otherwise it will deduct time. 
option2.addEventListener("click", handleCorrectAnswer2);
function handleCorrectAnswer2() {
    if (option2.textContent === "2. [0]" || option2.textContent === "2. For-while loops") {
        correct.style.display = "block";
        wrong.style.display = "none"
        questionIndex++;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        finalResultPage();
        }
    } else {
        correct.style.display = "none";
        wrong.style.display = "block";
        if (timeLeft >= 10) {
            timeLeft -= 10;
            questionIndex++;
        } else {
            clearInterval(timerInterval);
        finalResultPage();
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        finalResultPage();
        }
    }
};

option3.addEventListener("click", handleCorrectAnswer3);
function handleCorrectAnswer3() {
    if (option3.textContent === "3. and & or/and" || option3.textContent === "3. //" || option3.textContent === "3. Alarm") {
        correct.style.display = "block";
        wrong.style.display = "none"
        questionIndex++;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        finalResultPage();
        }
    } else {
        correct.style.display = "none";
        wrong.style.display = "block";
        if (timeLeft >= 10) {
            timeLeft -= 10;
            questionIndex++;
        } else {
            clearInterval(timerInterval);
        finalResultPage();
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        finalResultPage();
        }
    }
};

option4.addEventListener("click", handleIncorrectAnswer);
function handleIncorrectAnswer() {
    correct.style.display = "none";
    wrong.style.display = "block";
    questionIndex++;
    if (timeLeft >= 10) {
        timeLeft -= 10;
    } else {
        clearInterval(timerInterval);
        finalResultPage();
    }
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        finalResultPage();
    }
};

//If we are on the final question the done button function is called.
var doneButton = document.querySelector(".done");

function finalQuestion() {
    if (questionIndex === questionsKey.length - 1) {
       doneButton.style.display = "block";
    }
};

doneButton.addEventListener("click", finalResultPage); 

var finalResult = document.querySelector(".final-result");
var finalScore = document.querySelector(".finalscore");

function finalResultPage() {
    correct.style.display = "none";
    wrong.style.display = "none";
    quiz.style.display = "none";
    doneButton.style.display = "none";
    finalResult.style.display = "block";
    finalScore.style.display = "block";
    finalScore.textContent = "Your final score is " + timeLeft + ".";
    timeEl.textContent = "Time: 00: " + timeLeft;
};

//Added an event listener for the view scores button. 

var scoreList = document.querySelector(".score-list");

var viewScoresButton = document.querySelector("#view-scores");

viewScoresButton.addEventListener("click", ViewScores);

//Hides all elements and displays the scores. 
function ViewScores() {
    displayScores();
    correct.style.display = "none";
    wrong.style.display = "none";
    quiz.style.display = "none";
    doneButton.style.display = "none";
    finalResult.style.display = "none";
    startPage.style.display = "none";
    timeEl.style.display = "none";
    finalScore.style.display = "block";
    scoreList.style.display = "block";
    clearScores.style.display = "block";
    goBack.style.display = "block";
};

//Clears all scores from the local storage when it is clicked, 
var clearScores = document.querySelector(".clear");
clearScores.addEventListener("click", function () {
    scoreList.innerHTML = "";
    localStorage.clear();
});

//Goes back to the starter page when this is clicked
var goBack = document.querySelector(".back");
goBack.addEventListener("click", function () {
    location.reload()
});

//This function displays the saved scores from the local storage by creating appending the list elements, the list element include the initials and score.
function displayScores() {

    scoreList.innerHTML = "";

    var scoresToDisplay = JSON.parse(localStorage.getItem("storedScores")) || [];

    for (var i = 0; i < scoresToDisplay.length; i++) {
        var li = document.createElement("li")
        li.textContent = `${scoresToDisplay[i].initials} -${scoresToDisplay[i].score}`
        scoreList.appendChild(li)
    }
};

//this function saves the user scores by taking the initials box and trimming unnecessary white space and also logging it in local storage
//by saving the property and value of initials and score. In the end it stringifies the storage scored item to make it readable.
function savedScores() {
    var initials = inputBox.value.trim()
    var storedScores = JSON.parse(localStorage.getItem("storedScores")) || [];
    var userScore = {
        initials: initials,
        score: score,
    }
    storedScores.push(userScore)

    localStorage.setItem("storedScores", JSON.stringify(storedScores));
};
displayScores();

//This event listener saved the users scores when the submit button is clicked. 
submitButton.addEventListener("click", function (event) {
    savedScores();
    ViewScores();
});



