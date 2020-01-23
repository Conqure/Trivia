(function(){
const quizContainer = document.getElementById("quiz");
const quizContainer = document.getElementById("results");
const quizContainer = document.getElementById("submit");

function buildQuiz() {}

function showResults() {}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);

const MyQuestions = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "superman",
      b: "The Terminator",
      c: "Walulgi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "How many hours of sleep do you lose over javascript?",
    answers: {
      a: "0-5",
      b: "5-10",
      c: "I haven't slept in weeks?"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d"
  }
];

function buildQuiz() {
  const output = [];

  MyQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

MyQuestions.forEach((currentQuestion, questionNumber) => {
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
});
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join("")} </div>`
);
quizContainer.innerHTML = output.join("");

function showResults() {
  const answersContainers = quizContainer.querySelectorAll("answers");
  let numCorrect = 0;
  MyQuestions.forEach((currentQuestion, questionNumber) => {
    const answersContainer = answersContainers[questionNumber];
    const selector = "input[name=question" + questionNumber + "]:checked";
    const userAnswer = (answersContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answersContainer[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });
  resultsContainer.innerHTML = numCorrect + " out of " + myQuestions.length;
}
const answerContainers = quizContainer.querySelectorAll(".answers");
let numCorrect = 0;

myQuestions.forEach((currentQuestion, questionNumber) => {
  const answersContainer = answerContainers[questionNumber];
  const selector = "input[name=question$[{questionNumber}]:checked";
  const userAnswer = (answersContainer.querySelector(selector) || {}).value;
  if ((userAnswer = currentQuestion.correctAnswer)) {
    numCorrect++;
    answersContainers[questionNumber].style.color = "lightgreen";
  } else {
    answersContainers[questionNumber].style.color = "red";
  }
});
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
})();