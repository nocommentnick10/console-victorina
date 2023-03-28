const Quiz = (function (){
    let score = 0

    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correct = correctAnswer;
    }

    function getQuestion(questions){
        randQuestionNum = Math.floor(Math.random() * questions.length)
        console.log(`Вопрос: ${questions[randQuestionNum].question}`)
        console.log('Варианты ответов:')
        questions[randQuestionNum].answers.forEach((item, index) => {
            console.log(`${index}: ${item}`)
        })
        correctAnswer = questions[randQuestionNum].correct
        return correctAnswer
    }

    function setAnswer(){
        let answer = prompt('Введите номер ответа')
        answer != 'exit' && answer != null ? answer = parseInt(answer) : true
        return answer
    }

    function checkAnswer(correctAnswer, answer){
        if(correctAnswer === answer) {
            (console.log('Вы ответили верно!'), Quiz.score += 1)
        } else if(answer === 'exit' || answer === null){
            console.log('Вы вышли из игры')
            renderScore()
        } else {
            console.log('Неправильный ответ')
        }
        answer === 'exit' || answer === null ? true : (console.clear(), renderScore(), startGame())
    }

    function startGame(){
        Quiz.checkAnswer(Quiz.getQuestion(questions), Quiz.setAnswer())
    }

    function renderScore() { 
        console.log(`Ваш счет: ${Quiz.score}`)
    }

    return {
        Question,
        getQuestion,
        setAnswer,
        checkAnswer,
        startGame,
        renderScore,
        score
    }
})()

const question1 = new Quiz.Question('Что такое HTML?', ['Язык разметки', 'Таблицы стилей', 'Не знаю'], 0)
const question2 = new Quiz.Question('Что такое CSS?', ['Мобильное приложение', 'Инструмент веб-дизайна', 'Таблицы стилей'], 2)
const question3 = new Quiz.Question('Что такое JavaScript?', ['Язык разметки', 'Язык программирования', 'Не знаю'], 1)
const question4 = new Quiz.Question('На HTML можно создавать?', ['Мобильные приложения', 'Сайты для всех браузеров и платформ', 'Не знаю'], 1)

const questions = [question1, question2, question3, question4]

Quiz.startGame()