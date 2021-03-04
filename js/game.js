const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'O que significa SEO?',
        choice1: 'Send Email Out',
        choice2: 'Search Expectation Order',
        choice3: 'Search Engine Optimization',
        choice4: 'Senior Enginerr Operations',
        answer:3,
    },
    {
        question:
            "O que é persona?",
        choice1: "Alguém que se junta à sua lista de e-mails",
        choice2: "O idioma usado em uma variedade de comunicações",
        choice3: "Representações  fictícia do seu cliente ideal ",
        choice4: "Cliente recorrente",
        answer: 3,
    },
    {
        question: "O que são criativos dinâmicos no Facebook Ads?",
        choice1: "São anúncios com animações (GIFs)",
        choice2: "São anúncios com imagens retiradas diretamente da sua página no Facebook",
        choice3: "É uma opção que permite testar diferentes combinações de imagens, títulos, descrições e Call to Action",
        choice4: "É uma opção que permite testar diferentes posicionamentos dos criativos",
        answer: 1,
    },
    {
        question: "O que é a estrutura SKAG (Single Keyword Ads Groups)?",
        choice1: "É uma estrutura em que temos apenas um anúncio por campanha, trazendo mais relevância para o anúncio",
        choice2: "É uma estrutura em que temos uma palavra-chave por grupo de anúncios, trazendo mais relevância para o anúncio",
        choice3: "É uma estrutura em que temos várias palavras-chave em um grupo de anúncios, trazendo mais relevância para o anúncio",
        choice4: "Nenhuma das opções acima",
        answer: 2,
    },
    {
        question: "O que é um funil de vendas?",
        choice1: "Uma série de emails projetados que são enviados a clientes em potencial",
        choice2: "Um anúncio que vende um produto",
        choice3: "integração de publicidade online e offline",
        choice4: "Um sistema configurado para atrair leads e convertê-los em clientes",
        answer:4,
    },

    {
        question: "Quantas hashtags você pode usar no Instagram?",
        choice1: "15",
        choice2: "30",
        choice3: "10 ",
        choice4: "20",
        answer: 2,   
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()