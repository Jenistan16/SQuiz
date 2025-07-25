let currentSubject = null;
let currentTopic = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
});

function startQuiz(subject, topic) {
    currentSubject = subject;
    currentTopic = topic;
    currentQuestionIndex = 0;
    
    // Hide subject screen and show quiz interface
    document.getElementById('subject-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    
    // Set subject color theme
    document.documentElement.style.setProperty('--subject-color', 
        subject === 'math' ? '#4a6bdf' :
        subject === 'science' ? '#e74c3c' :
        subject === 'history' ? '#27ae60' : '#9b59b6');
    
    // Load first question
    loadQuestion();
}

function loadQuestion() {
    const topic = questionBank[currentSubject].topics[currentTopic];
    const question = topic.questions[currentQuestionIndex];
    
    document.querySelector('.question-counter').textContent = 
        `Question ${currentQuestionIndex + 1} of ${topic.questions.length}`;
    
    document.getElementById('question-text').textContent = question.text;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionBtn);
    });
    
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('explanation-text').textContent = question.explanation;
    
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-question').textContent = 
        currentQuestionIndex === topic.questions.length - 1 ? 'Finish Quiz' : 'Next Question';
}

function selectAnswer(index) {
    selectedAnswer = index;
    const options = document.querySelectorAll('.option-btn');
    options.forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
    
    // Show explanation
    document.getElementById('explanation').style.display = 'block';
}

function nextQuestion() {
    const topic = questionBank[currentSubject].topics[currentTopic];
    
    if (currentQuestionIndex < topic.questions.length - 1) {
        currentQuestionIndex++;
        selectedAnswer = null;
        loadQuestion();
    } else {
        // Quiz finished
        alert('Quiz completed!');
        document.getElementById('quiz-screen').style.display = 'none';
        document.getElementById('subject-screen').style.display = 'block';
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        selectedAnswer = null;
        loadQuestion();
    }
}