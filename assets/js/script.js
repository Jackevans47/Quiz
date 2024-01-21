import questionData from './questions.json' assert { type: 'json' };


/* jshint esversion: 6 */
const beginQuiz = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionholderElement = document.getElementById('question-holder')
const welcomeMessage = document.getElementById('welcome')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answers')
const pointsElement = document.getElementById('points-num')
const questionTally = document.getElementById('current-question-number')
const home = document.getElementById('home')



let randomQuestions, questionIndex, points, questionNum

beginQuiz.addEventListener('click', startQuiz)
home.addEventListener('click', returnHome)
nextButton.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
})

/** Return home function  */
function returnHome() {
    resetState();
    console.log("return home")
    questionholderElement.classList.add('hide')
    welcomeMessage.classList.remove('hide')
    beginQuiz.innerText = 'Start'
    beginQuiz.classList.remove('hide')
}


/**  Start Quiz Function  */
function startQuiz() {
    console.log(questions)
    console.log('start')
    beginQuiz.classList.add('hide')
    welcomeMessage.classList.add('hide')
    questionholderElement.classList.remove('hide')
    randomQuestions = questionData["questions"].sort(() => Math.random() - .5)
    questionIndex = 0
    questionNum = 0
    setPoints(0)
    nextQuestion();
}


/**   Next Question function */
function nextQuestion() {
    console.log('next-question')
    resetState()
    displayQuestion(randomQuestions[questionIndex])
}

/** Display question function */
function displayQuestion(question) {
    console.log('display-question')
    resetState();
    questionNum++

    questionTally.innerText = questionNum
    questionElement.innerText = questionNum + ". " + question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerButtonsElement.appendChild(button);
    })
}

// Reset back to default state everytime a new question is set
function resetState() {
    clearStatusClass(document.body)
    console.log('reset')
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



function setPoints(newPoints) {
    points = newPoints
    pointsElement.innerText = newPoints
}

/**  Choose answer function */
function chooseAnswer(e) {
    console.log('choose-answer')
    const selectedButton = e.target
    const correct = !!selectedButton.dataset.correct
    console.log(correct)
    if (correct) {
        setPoints(points + 1)
    }

    setStatusClass(document.body, correct)

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > questionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        beginQuiz.innerText = 'Restart'
        beginQuiz.classList.remove('hide')
    }
}

function setStatusClass(value, correct) {
    clearStatusClass(value)
    if (correct) {
        value.classList.add('button-correct')
    } else {
        value.classList.add('button-incorrect')
    }
}

function clearStatusClass(value) {
    value.classList.remove('button-correct')
    value.classList.remove('button-incorrect')
}

