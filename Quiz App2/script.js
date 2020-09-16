const quizData=[
    {
        question:'How old is Hilal? ',
        a:'10',
        b:'20',
        c:'26',
        d:'110',
        correct:'b'
    },
    {
        question:'What is the most used programming language in 2019?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'Javascript',
        correct:'a'
    },
    {
        question:'What does HTML stand for?',
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'Jason Object Notation',
        d:'Helicopters Terminal Motorbots Lamborginis',
        correct:'a'
    },
    {
        question:'What year was Javascript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'None of the above',
        correct:'d'
    }
];
const answerEls=document.querySelectorAll('.answer');
const questionEl=document.getElementById('question');
const quiz =document.getElementById('quiz');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let score=0;
let currentQuiz=0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];

    questionEl.innerHTML=currentQuizData.question;

    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}

function getSelected(){
    const answerEls=document.querySelectorAll('.answer');

    let answer=undefined;

    answerEls.forEach((answerEl)=>{
       if(answerEl.checked){
           answer= answerEl.id;
       }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
       answerEl.checked=false;
     });
}


submitBtn.addEventListener('click',()=>{
   
    const answer=getSelected();

    console.log(answer);

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }
        else
        {
           quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
           <button onclick="location.reload()">Reload</button>`;
        }
    }
    
});