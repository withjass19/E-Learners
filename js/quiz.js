const quizData = [
    {
        question: "'AS' clause is used in SQL for",
        a: "Selection operation.",
        b: "Rename operation.",
        c: "Join operation.",
        d: "Orojection operation",
        correct: "b",
    },
    {
        question: "Architecture of the database can be viwed as",
        a: "two level",
        b: "four level",
        c: "three level",
        d: "one level",
        correct: "c",
    },
    {
        question: "In a relational model, relations are termed as",
        a: "Tuples.",
        b: "Attributes.",
        c: "Tables.",
        d: "Rows.",
        correct: "c",
    },
    {
        question: "The database schema is written in",
        a: "HLL",
        b: "DML",
        c: "DDL",
        d: "DCL",
        correct: "c",
    },
    {
        question: "In the architecture of a database system external level is the",
        a: "physical level",
        b: "logical level",
        c: "conceptual level",
        d: "view level",
        correct: "d",
    },
    {
        question: "To see all the databases which command is used?",
        a: "Show database;",
        b: "Show databases;",
        c: "Show database();",
        d: "Show_all database;",
        correct: "b",
    },
    {
        question: "Which of the following command is used to delete a database?",
        a: "DELETE DATABASE_NAME;",
        b: "DROP DATABASE_NAME;",
        c: "DROP DATABASE DATABASE_NAME;",
        d: "DELETE DATABASE DATABASE_NAME;",
        correct: "c",
    },
    {
        question: "ALTER command is a type of which SQL command?",
        a: "DML",
        b: "DDL",
        c: "DCL",
        d: "DQL",
        correct: "b",
    },
    {
        question: "Which of the following is the correct syntax to add a field using alter command?",
        a: "ALTER TABLE table_name ADD field_name data type;",
        b: "ALTER TABLE table_name, field_name data type",
        c: "ALTER TABLE field_name data type;",
        d: "none",
        correct: "a",
    },
    {
        question: "Which of the following is the correct syntax for using the TRUNCATE statement?",
        a: "TUNCATE TABLE-NAME;",
        b: "TRUNCATE TABLE-NAME DATABASE-NAME;",
        c: "TRUNCATE TABLE TABLE-NAME;",
        d: "TRUNCATE DATABASE-NAME TABLE-NAME;",
        correct: "c",
    },
    {
        question: "Suppose you are asked to display all the names which have 'a' as their second character then which query pattern you will use?",
        a: "_ _ a%;",
        b: "_a_;",
        c: "_a%;",
        d: "_%a;",
        correct: "c",
    },
    {
        question: "Which key helps us to establish the relationship between two tables?",
        a: "Candidate key",
        b: "Foreign key",
        c: "Primary key",
        d: "Unique key",
        correct: "b",
    },
    {
        question: "Which SQL command is used for granting or revoking the rights?",
        a: "DML",
        b: "DDL",
        c: "DCL",
        d: "DQL",
        correct: "c",
    },
    {
        question: "Which MySQL function is used to get the current date and time?",
        a: "DATETIME()",
        b: "TODAY()",
        c: "DATE()",
        d: "NOW()",
        correct: "d",
    },
    {
        question: "SELECT is a type of which SQL command?",
        a: "DML",
        b: "DDL",
        c: "DCL",
        d: "DQL",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})