// Variables
let questionIndex = 0;
const userAnswers = [];
const progressBar = document.querySelector(".progress-bar");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// Nav
prevButton.addEventListener("click", () => { // back
  if (questionIndex > 0) {
    questionIndex--;
    displayQuestion();
    progressBar.style.width = `${((questionIndex + 1) / quizQuestions.length) * 100}%`;
  }
});
nextButton.addEventListener("click", () => { //next
  if (questionIndex < quizQuestions.length - 1 && userAnswers[questionIndex] !== undefined) {
    questionIndex++;
    displayQuestion();
    progressBar.style.width = `${((questionIndex + 1) / quizQuestions.length) * 100}%`;
  }
});

// Questions
const quizQuestions = [
  {
    question: "Do you like jazz?",
    answers: ["option1", "option2", "option3", "option4"]
  },
  {
    question: "this is a template question",
    answers: ["option1", "option2", "option3", "option4"]
  },
  {
    question: "this is another template question",
    answers: ["option1", "option2", "option3", "option4"]
  }
];

function displayQuestion() {
  const question = quizQuestions[questionIndex];
  const questionTitle = document.querySelector(".card-title");
  const choicesContainer = document.getElementById("choices");

  questionTitle.textContent = question.question;
  choicesContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const answerLabel = document.createElement("label");
    answerLabel.classList.add("btn", "btn-primary");

    const answerInput = document.createElement("input");
    answerInput.type = "radio";
    answerInput.name = "answer";
    answerInput.value = index;
    answerInput.classList.add("visually-hidden");
    answerInput.addEventListener("change", () => {
      userAnswers[questionIndex] = index;
      questionIndex++;

      // Check if all questions are answered
      if (questionIndex < quizQuestions.length) {
        displayQuestion();
        progressBar.style.width = `${((questionIndex + 1) / quizQuestions.length) * 100}%`;
      } else {
        showResult();
      }

      // Enable "Next" button
      nextButton.disabled = false;
    });

    const answerText = document.createElement("span");
    answerText.textContent = answer;

    answerLabel.appendChild(answerInput);
    answerLabel.appendChild(answerText);

    choicesContainer.appendChild(answerLabel);
  });

  // Disable "Previous" button on the first question
  prevButton.disabled = questionIndex === 0;
}

function showResult() {
  // Calculate recommended
  const recommendedAlbum = calculateRecommendedAlbum(userAnswers);
  localStorage.setItem("recommendedAlbum", recommendedAlbum);

  // Display link to results page
  const questionCard = document.getElementById("quiz-card");
  questionCard.innerHTML = "";

  const resultMessage = document.createElement("p");
  resultMessage.textContent = `Recommended Album: ${recommendedAlbum}`;

  questionCard.appendChild(resultMessage);
}


function calculateRecommendedAlbum(userAnswers) {
  // WIP should return the resulting recommended album
  return "ERROR: NOT YET IMPLEMENTED";
}

// Start the quiz
displayQuestion();
