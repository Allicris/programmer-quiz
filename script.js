let time = document.getElementById("timer");
let startPage = document.querySelector(".start-page");
let questionContainer = document.querySelector(".question-container");
let timeLeft = 60;
let timerInterval;
let score;

function setTime() {
  time.textContent = "Time: 00:" + timeLeft;

  let timerInterval = setInterval(() => {
    timeLeft--;
    time.textContent = "Time: 00:" + timeLeft;
    score = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  startPage.style.display = "none";
  questionContainer.style.display = "block";
}

let startQuiz = document.querySelector("#start-quiz");

startQuiz.addEventListener("click", function () {
  setTime();
  switchContent();
});

let questionIndex = 0;
let question = document.querySelector(".question");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let correct = document.querySelector(".correct");
let wrong = document.querySelector(".wrong");

let questionsKey = [
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
    answer: "3. and & or/and",
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

function switchContent() {
  question.textContent = questionsKey[questionIndex].question;
  option1.textContent = questionsKey[questionIndex].option1;
  option2.textContent = questionsKey[questionIndex].option2;
  option3.textContent = questionsKey[questionIndex].option3;
  option4.textContent = questionsKey[questionIndex].option4;

  if (questionIndex === questionsKey.length - 1) {
    doneBtn.style.display = "block";
    return;
  }
}

questionContainer.addEventListener("click", switchContent);

function handleIncorrectAnswer() {
  correct.style.display = "none";
  wrong.style.display = "block";

  if (timeLeft >= 10) {
    timeLeft -= 10;
    if (questionIndex < questionsKey.length - 1) {
      questionIndex++;
    }
  } else {
    clearInterval(timerInterval);
    finalResultPage();
  }

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    finalResultPage();
  }
}

function handleCorrectAnswer2() {
  if (
    option2.textContent === "2. [0]" ||
    option2.textContent === "2. For-while loops"
  ) {
    correct.style.display = "block";
    wrong.style.display = "none";

    if (questionIndex < questionsKey.length - 1) {
      questionIndex++;
    }

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      finalResultPage();
    }
  } else {
    correct.style.display = "none";
    wrong.style.display = "block";
    if (timeLeft >= 10) {
      timeLeft -= 10;

      if (questionIndex < questionsKey.length - 1) {
        questionIndex++;
      }
    } else {
      clearInterval(timerInterval);
      finalResultPage();
    }
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      finalResultPage();
    }
  }
}

option1.addEventListener("click", handleIncorrectAnswer);
option4.addEventListener("click", handleIncorrectAnswer);
option2.addEventListener("click", handleCorrectAnswer2);
option3.addEventListener("click", handleCorrectAnswer3);

function handleCorrectAnswer3() {
  if (
    option3.textContent === "3. and & or/and" ||
    option3.textContent === "3. //" ||
    option3.textContent === "3. Alarm"
  ) {
    correct.style.display = "block";
    wrong.style.display = "none";

    if (questionIndex < questionsKey.length - 1) {
      questionIndex++;
    }

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      finalResultPage();
    }
  } else {
    correct.style.display = "none";
    wrong.style.display = "block";
    if (timeLeft >= 10) {
      timeLeft -= 10;

      if (questionIndex < questionsKey - 1) {
        questionIndex++;
      }
    } else {
      clearInterval(timerInterval);
      finalResultPage();
    }
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      finalResultPage();
    }
  }
}

let doneBtn = document.querySelector(".done");

doneBtn.addEventListener("click", finalResultPage);

let finalResult = document.querySelector(".final-result");
let finalScore = document.querySelector(".finalscore");

let lastScore;

function finalResultPage() {
  clearInterval(timerInterval);

  lastScore = timeLeft;

  finalScore.textContent = "Your final score is " + timeLeft + ".";
  time.textContent = "Time: 00: " + timeLeft;

  time.style.display = "none";
  correct.style.display = "none";
  wrong.style.display = "none";
  questionContainer.style.display = "none";
  doneBtn.style.display = "none";
  viewScoresButton.style.display = "block";
  finalResult.style.display = "block";
  finalScore.style.display = "block";
}

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (event) {
  savedScores();
  ViewScores();
});

let initialsInput = document.getElementById("initials");

function savedScores() {
  let initials = initialsInput.value.trim();
  let storedScores = JSON.parse(localStorage.getItem("storedScores")) || [];
  let userScore = {
    initials: initials,
    score: lastScore,
  };
  storedScores.push(userScore);

  localStorage.setItem("storedScores", JSON.stringify(storedScores));
}

let scoreContainer = document.querySelector(".score-container");
let scoreList = document.querySelector(".score-list");
let viewScoresButton = document.querySelector("#view-scores");

viewScoresButton.addEventListener("click", ViewScores);

function displayScores() {
      scoreList.innerHTML = "";
    
      let scoresToDisplay = JSON.parse(localStorage.getItem("storedScores")) || [];
    
      for (let i = 0; i < scoresToDisplay.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoresToDisplay[i].initials} -${scoresToDisplay[i].score}`;
        scoreList.appendChild(li);
      }
    }

function ViewScores() {
  displayScores();
  correct.style.display = "none";
  wrong.style.display = "none";
  questionContainer.style.display = "none";
  doneBtn.style.display = "none";
  finalResult.style.display = "none";
  startPage.style.display = "none";
  time.style.display = "none";
  viewScoresButton.style.display = "none";
  finalScore.style.display = "block";
  scoreContainer.style.display = "block";
  scoreList.style.display = "block";
  clearScores.style.display = "block";
  goBack.style.display = "block";
}

let goBack = document.querySelector(".back");

goBack.addEventListener("click", function () {
  location.reload();
});

let clearScores = document.querySelector(".clear");

clearScores.addEventListener("click", function () {
  scoreList.innerHTML = "";
  localStorage.clear();
});