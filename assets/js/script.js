const beginQuiz = document.getElementById('start')
const nextButton = document.getElementById('next')
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
    randomQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    nextQuestion();
}

function nextQuestion() {
    displayQuestion(randomQuestions[questionIndex])
    resetAnswer()
}

function displayQuestion(question) {
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


function chooseAnswer() {

}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
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