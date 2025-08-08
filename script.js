const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Machine Language",
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "None of the above"
    ],
    answer: "HyperText Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";
  q.options.forEach((option) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${option}" /> ${option}</label>`;
    optionsList.appendChild(li);
  });
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option!");
    return;
  }

  const answer = selected.value;
  if (answer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>You scored <strong>${score}</strong> out of <strong>${questions.length}</strong>.</p>
      <p>Percentage: <strong>${((score / questions.length) * 100).toFixed(2)}%</strong></p>
    `;
  }
}

window.onload = loadQuestion;





