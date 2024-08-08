const questions = [
  {
    question: "which is the largest animal on Earth",
    unswers: [
      { text: "shark", correct: false },
      { text: "blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "goose", correct: false },
    ],
  },
  {
    question: "when did kenya gain independence",
    unswers: [
      { text: "1963", correct: true },
      { text: "200", correct: false},
      { text: "2004", correct: false },
      { text: "1111", correct: false },
    ],
  },
  {
    question: "How my hours are in a day",
    unswers: [
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "30", correct: false },
      { text: "24", correct: true },
    ],
  },
  {
    question: "who is the oldest man ever to live on Easth",
    unswers: [
      { text: "moses", correct: false },
      { text: "michael", correct: false },
      { text: "methusela", correct: true },
      { text: "goose", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const unswerButtons = document.getElementById("unswer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score = 0;
function startquiz() {
  currentQuestion = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
}
function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.unswers.forEach((unswer) => {
    const button = document.createElement("button");
    button.innerHTML = unswer.text;
    button.classList.add("btn");
    unswerButtons.appendChild(button);
    if(unswer.correct){
      button.dataset.correct=unswer.correct
    }
    button.addEventListener("click",selectAnswer)
  });
}
  function resetState (){
    nextButton.style.display="none";
    while(unswerButtons.firstChild){
      unswerButtons.removeChild(unswerButtons.firstChild);
    }

  }
    
function selectAnswer(){
  const selectedBtn=event.target
  const isCorrect= selectedBtn.dataset.correct === "true"
  if (isCorrect){
    selectedBtn.classList.add("correct")
    score ++
  }else{
    selectedBtn.classList.add("incorrect")
  }
  Array.from(unswerButtons.children).forEach(button =>{
    if(button.dataset.correct==="true"){
      button.classList.add("correct")
    }
    button.disabled = true
  })
  nextButton.style.display ="block"
}
function showScore(){
  resetState()
  questionElement.innerHTML= 'you scred ${score}out of ${questions.length}!'
  nextButton.innerHTML='play again'
  nextButton.style.display="block"
}

function hundleNexButton(){
  currentQuestionIndex ++
  if(currentQuestionIndex<questions.length){
    showQuestions()
  }else{
    showScore()
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    hundleNexButton()

  }else{
    startquiz()
  }
})
startquiz();
