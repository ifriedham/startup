
// proceed to next question + update nav.bar
document.getElementById('next-button').addEventListener('click', () => {
    if (questionIndex < quizQuestions.length - 1) {
      questionIndex++;
      displayQuestion();
      progressBar.style.width = `${((questionIndex + 1) / quizQuestions.length) * 100}%`;
    } else {
      showResult();
    }
  });
  

//questions
const quizQuestions = [
    {
      question: "Do you like jazz?",
      answers: ["option1", "option2", "option3", "option4"],
    },
    {
      question: "this is a template question",
      answers: ["option1", "option2", "option3", "option4"],
    },
  ];
  

//variables
let questionIndex = 0;
const userAnswers = [];


function displayQuestion() {
    const question = quizQuestions[questionIndex];
    const questionTitle = document.querySelector('.card-title');
    const choicesContainer = document.getElementById('choices');
    const progressBar = document.querySelector('.progress-bar');
  
    // Update question title
    questionTitle.textContent = question.question;
  
    // Clear previous answer choices
    choicesContainer.innerHTML = '';
  
    // Create answer choice buttons
    question.answers.forEach((answer, index) => {
        const answerButton = document.createElement('a');
      answerButton.href = '#';
      answerButton.classList.add('btn', 'btn-primary');
      answerButton.textContent = answer;
      answerButton.addEventListener('click', () => {
        userAnswers[questionIndex] = index; // Store the user's answer
        questionIndex++;

        if (questionIndex < quizQuestions.length) {
          displayQuestion(); // Display the next question
          progressBar.style.width = `${((questionIndex + 1) / quizQuestions.length) * 100}%`;
        } 
        else {
          showResult(); // Display the recommended album
        }
      });
      choicesContainer.appendChild(answerButton);
    });
  }
  
  // Call displayQuestion to start the quiz
  displayQuestion();


  function showResult() {
    // Calculate the recommended album based on userAnswers
    const recommendedAlbum = calculateRecommendedAlbum(userAnswers);
  
    // Display the result
    const questionCard = document.getElementById('quiz-card');
    questionCard.innerHTML = ''; // Clear the card
  
    const resultMessage = document.createElement('p');
    resultMessage.textContent = `Recommended Album: ${recommendedAlbum}`;
  
    questionCard.appendChild(resultMessage);
  }
  
  