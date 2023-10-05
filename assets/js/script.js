let beginButton = document.getElementById('begin-btn');
let nextButton = document.getElementById('next-btn');
let qstnContainer = document.getElementById('qstn-container');
let qstnElement = document.getElementById('question');
let answerBtnElement = document.getElementById('answer-btns');
let random, currentIndex;



beginButton.addEventListener('click', beginGame);
nextButton.addEventListener('click', () => {
    currentIndex++
    nextQuestion()
})



function beginGame() {
    console.log('start')
    beginButton.classList.add('hide')
    random = questions.sort(() => Math.random() - 0.5)
    currentIndex = 0
    qstnContainer.classList.remove('hide')
    nextQuestion()

}

function nextQuestion() {
    reset()
    showQuestion(random[currentIndex])

}
 
function showQuestion(question) {
    nextButton.classList.remove('hide')
    qstnElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', answerSelect);
        answerBtnElement.appendChild(button);
    })

}

function reset() {
    
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild
        (answerBtnElement.firstChild)
    }

}


function answerSelect(e) {
    let selected = e.target
    let correct = selected.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

nextButton.classList.remove('hide')



let questions = [
    {
        question: "What year was Man Utd FC founded?",
        answers:[
            {text: '1878', correct: true},
            {text: '1978', correct: false},
            {text: '1889', correct: false},
            {text: '1901', correct: false}

        ]
        
    },
    {
        question: "What is the name of Man Utd's home ground?",
        answers:[
            {text: 'Wembley', correct: false},
            {text: 'The Emirates', correct: false},
            {text: 'Old Trafford', correct: true},
            {text: 'Stamford Bridge', correct: false}

        ]
    },
    {
        question: "Who did Man Utd beat in the 2008 Champions League final?",
        answers:[
            {text: 'Arsenal', correct: false},
            {text: 'Chelsea', correct: true},
            {text: 'Liverpool', correct: false},
            {text: 'Real Madrid', correct: false}

        ]
    },
    {
        question: "Who is/was Man Utd's most successful manager ever?",
        answers:[
            {text: 'Sir Matt Busby', correct: false},
            {text: 'David Moyes', correct: false},
            {text: 'Jose Mourinho', correct: false},
            {text: 'Sir Alex Ferguson', correct: true}

        ]
    },
    {
        question: "In what year was Old Trafford built?",
        answers:[
            {text: '1896', correct: false},
            {text: '1910', correct: true},
            {text: '1995', correct: false},
            {text: '1936', correct: false}

        ]
    }
    
]