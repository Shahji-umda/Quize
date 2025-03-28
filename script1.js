function submitQuiz() {
    // Initialize the score
    let score = 0;

    // Get answers from the quiz
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');
    const answer3 = document.querySelector('input[name="q3"]:checked');
    const answer4 = document.querySelector('input[name="q4"]:checked');

    // Check if the answers are correct
    if (answer1 && answer1.value === 'c') score++;
    if (answer2 && answer2.value === 'b') score++;
    if (answer3 && answer3.value === 'b') score++;
    if (answer4 && answer4.value === 'd') score++;

    // Show the result
    document.getElementById('quiz').style.display = 'none';
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    document.getElementById('score').textContent = `${score} / 4`;
}