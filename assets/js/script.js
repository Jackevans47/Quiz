const beginQuiz = document.getElementById('start')
const questionElement = document.getElementById('question-holder')

beginQuiz.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('start')
    beginQuiz.classList.add('hide')
    questionElement.classList.remove('hide')
}

function nextQuestion() {

}
function chooseAnswer() {

}