/* jshint esversion: 11 */
import questionData from './questions.json' assert { type: 'json' }; // jshint ignore:line


const beginQuiz = document.getElementById('start');
const nextButton = document.getElementById('next');
const questionholderElement = document.getElementById('question-holder');
const welcomeMessage = document.getElementById('welcome');
const questionElement = document.getElementById('questions');
const answerButtonsElement = document.getElementById('answers');
const pointsElement = document.getElementsByClassName('points-num');
const questionTally = document.getElementById('current-question-number');
const home = document.getElementById('home');
const dialog = document.getElementById('dialog');
const confirmElement = document.getElementById('confirm');
const completionElement = document.getElementById('completion');
const playAgain = document.getElementById('restart');

let randomQuestions, questionIndex, points, questionNum;


home.addEventListener("click", () => {
    dialog.showModal();
});
beginQuiz.addEventListener('click', startQuiz);
confirmElement.addEventListener('click', returnHome);
nextButton.addEventListener('click', () => {
    if (questionIndex == randomQuestions.length - 1) {
        questionholderElement.classList.add('hide');
        completionElement.classList.remove('hide');
        completionElement.classList.add('flex-center');
        resetState();
    } else {
        questionIndex++;
        nextQuestion();
    }

});
playAgain.addEventListener('click', returnHome);

/** Return home function  */
function returnHome() {
    resetState();
    completionElement.classList.add('hide');
    questionholderElement.classList.add('hide');
    welcomeMessage.classList.remove('hide');
    beginQuiz.innerText = 'Start';
    beginQuiz.classList.remove('hide');
}

/**  Start Quiz Function  */
function startQuiz() {
    beginQuiz.classList.add('hide');
    welcomeMessage.classList.add('hide');
    questionholderElement.classList.remove('hide');
    randomQuestions = questionData.questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    questionNum = 0;
    setPoints(0);
    nextQuestion();
}

/**   Next Question function */
function nextQuestion() {
    resetState();
    displayQuestion(randomQuestions[questionIndex]);
}

/** Display question function */
function displayQuestion(question) {
    resetState();
    questionNum++;
    questionTally.innerText = questionNum;
    questionElement.innerText = questionNum + ". " + question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', chooseAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Reset back to default state everytime a new question is set
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/** Points */
function setPoints(newPoints) {
    points = newPoints;
    Array.from(pointsElement).forEach(pointElement => {
        pointElement.innerText = points;
    });
}

/**  Choose answer function */
function chooseAnswer(e) {
    const selectedButton = e.target;
    const correct = !!selectedButton.dataset.correct;
    if (correct) {
        setPoints(points + 1);
    }

    setStatusClass(document.body, correct);

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextButton.classList.remove('hide');
}

function setStatusClass(value, correct) {
    clearStatusClass(value);
    if (correct) {
        value.classList.add('button-correct');
    } else {
        value.classList.add('button-incorrect');
    }
}

function clearStatusClass(value) {
    value.classList.remove('button-correct');
    value.classList.remove('button-incorrect');
}
