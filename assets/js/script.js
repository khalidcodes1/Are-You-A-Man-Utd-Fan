let beginButton = document.getElementById('begin-btn');
let qstnContainer = document.getElementById('qstn-container');
let qstnElement = document.getElementById('question');
let answerBtnElement = document.getElementById('answer-btns');
let random, currentIndex;



beginButton.addEventListener('click', beginGame);



function beginGame() {
    console.log('start')
    beginButton.classList.add('hide')
    random = questions.sort(() => Math.random() - 0.5)
    currentIndex = 0
    qstnContainer.classList.remove('hide')
    nextQuestion()

}

function nextQuestion() {
    showQuestion(random[currentIndex])

}
 
function showQuestion(question) {
    qstnElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', answerSelect);
    })

}


function answerSelect() {

}

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
        question: "Who is/was Man Utd most successful manager ever?",
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