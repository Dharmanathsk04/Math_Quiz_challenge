let score = 0;
let timeLeft = 30;
let timer;
let correctAnswer;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const submitBtn = document.getElementById("submit");
const startBtn = document.getElementById("start");

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = "Score: " + score;
  timerEl.textContent = "Time Left: " + timeLeft + "s";
  generateQuestion();
  
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timer);
      questionEl.textContent = "⏳ Game Over! Final Score: " + score;
    }
  }, 1000);
}

function generateQuestion() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let operators = ["+", "-", "*"];
  let operator = operators[Math.floor(Math.random() * operators.length)];
  
  questionEl.textContent = `What is ${num1} ${operator} ${num2}?`;
  correctAnswer = eval(num1 + operator + num2);
}

function checkAnswer() {
  let userAnswer = parseInt(answerEl.value);
  if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
    score++;
    scoreEl.textContent = "Score: " + score;
  }
  answerEl.value = "";
  generateQuestion();
}

submitBtn.addEventListener("click", checkAnswer);
startBtn.addEventListener("click", startGame);
