const beginQuiz = document.getElementById('start')
const questionholderElement = document.getElementById('question-holder')
const welcomeMessage = document.getElementById('welcome')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answers')

let randomQuestions, questionIndex

beginQuiz.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('start')
    beginQuiz.classList.add('hide')
    welcomeMessage.classList.add('hide')
    questionholderElement.classList.remove('hide')
    randomQuestions = questions.sort(() => Math.random())
    questionIndex = 0
    nextQuestion();
}

function nextQuestion() {
    displayQuestion(randomQuestions[questionIndex])
}

function displayQuestion(question) {
    questionElement.innerHTML = question.question
}

function chooseAnswer() {

}

const questions = [
    {
        question: "Which of these animals are considered mans best friend",
        answers: [
            { text: "Cat", correct: false },
            { text: "Dog", correct: true },
            { text: "Hamster", correct: false },
            { text: "Bird", correct: false },
        ]
    },
    {
        question: "Which of these animals are considered mans best friend",
        answers: [
            { text: "Cat", correct: false },
            { text: "Dog", correct: true },
            { text: "Hamster", correct: false },
            { text: "Bird", correct: false },
        ]
    }

]