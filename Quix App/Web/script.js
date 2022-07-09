const quizDB = [

    {
        question: "Q1. WHICH IS NOT A PROGRAMMING LANGUAGE ?",
        a:"JAVA",
        b:"JAVASCRIPT",
        c:"HTML",
        d:"REACT JS",
        ans:"ans3"

    },

    {
        question: "Q2. FULL FORM OF HTML ?",
        a:"HYPER TRANSPORTING MAIL LOCATOR",
        b:"HIGH TITED MEDIA LOCATION",
        c:"HIGH TEMPRATUR MADIATOR LOCAL",
        d:"HYPER TEXT MARKUP LANGUAGE",
        ans:"ans4"

    },

    {
        question: "Q3. WHO IS PRIM MINISTER OF INDIA ?",
        a:"NARENDRA MODI",
        b:"KEJRIWAL",
        c:"CHATRAPATI SHIVALI MAHARAJ",
        d:"ME",
        ans:"ans1"

    },
    
    {
        question: "Q4. WHAT IS MYSQL ?",
        a:"IT IS POWERFULL PROGRAMMING LANGUAGE",
        b:"IT IS DATABASE",
        c:"IT IS LIBRARY",
        d:"IT IS FRAMEWORK",
        ans:"ans2"

    },


];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let QuestionCount = 0;
let score = 0;


const loadQuestion = () => {

    
    const questionlist = quizDB[QuestionCount];

    question.innerHTML = questionlist.question;

    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
};

loadQuestion();


const getCheckedAnswer = () => {
    let answer;

    answers.forEach((CurrentAnswer) => {
        if (CurrentAnswer.checked) {
            answer = CurrentAnswer.id;
        }
    });
    return answer;
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckedAnswer();  
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[QuestionCount].ans) {
        score++;
    };


    QuestionCount++;
    if (QuestionCount < quizDB.length) {
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> Score : ${score}/${quizDB.length}  🖖 </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `
        showScore.classList.remove('scoreA');
    }
})