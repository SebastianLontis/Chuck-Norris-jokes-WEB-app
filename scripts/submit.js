// Function to submit a Chuck Norris joke to the API
async function submitJoke(event) {
    event.preventDefault(); // Prevent form submission
    const jokeInput = document.getElementById('jokeInput').value.trim(); // Get the joke input value
    if (jokeInput === '') return; // If joke input is empty, do nothing

    try {
        const response = await fetch('https://api.bwt.ro/api/dev/FE/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-STUDENT-HEADER': 'YOUR_NAME_HERE' // Replace with your name
            },
            body: JSON.stringify({ joke: jokeInput })
        });

        if (response.ok) {
            // Clear the form input and display submission message
            document.getElementById('jokeInput').value = '';
            document.getElementById('submissionMessage').textContent = 'Joke submitted successfully!';
        } else {
            // Display error message if submission fails
            document.getElementById('submissionMessage').textContent = 'Failed to submit joke. Please try again later.';
        }
    } catch (error) {
        console.error('Error submitting joke:', error);
        // Display error message if submission fails due to network error
        document.getElementById('submissionMessage').textContent = 'Network error. Please check your internet connection and try again.';
    }
}
