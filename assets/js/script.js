const beginQuiz = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionholderElement = document.getElementById('question-holder')
const welcomeMessage = document.getElementById('welcome')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answers')

let randomQuestions, questionIndex

beginQuiz.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
})

// Start quiz function
function startQuiz() {
    console.log('start')
    beginQuiz.classList.add('hide')
    welcomeMessage.classList.add('hide')
    questionholderElement.classList.remove('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    nextQuestion();
}

// Next Question function
function nextQuestion() {
    console.log('next-question')
    displayQuestion(randomQuestions[questionIndex])
    //resetState()
}

// Display question function
function displayQuestion(question) {
    console.log('display-question')
    resetState();
    questionElement.innerText = question.question
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
    console.log('reset')
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
// Choose answer function
function chooseAnswer(e) {
    console.log('choose-answer')
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        beginQuiz.innerText = 'Next'
        beginQuiz.classList.remove('hide')
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('button-correct')
    } else {
        element.classList.add('button-incorrect')
    }
}


function clearStatusClass(element) {
    element.classList.remove('button-correct')
    element.classList.remove('button-incorrect')
}

// List of questions and answers 
const questions = [
    {
        question: "Which of these animals are considered to be mans best friend?",
        answers: [
            { text: 'Cat', correct: false },
            { text: 'Dog', correct: true },
            { text: 'Hamster', correct: false },
            { text: 'Bird', correct: false },
        ]
    },
    {
        question: "What is 5 x 2?",
        answers: [
            { text: "15", correct: false },
            { text: "10", correct: true },
            { text: "25", correct: false },
            { text: "30", correct: false },
        ]
    },
    {
        question: 'What is 4 * 2?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: true }
        ]
    }
]