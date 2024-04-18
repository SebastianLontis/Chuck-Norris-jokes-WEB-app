

// Function to fetch Chuck Norris jokes by a selected category from the API
async function fetchJokesByCategory(category) {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const data = await response.json();
        return data.value; // Extracting the joke from the response data
    } catch (error) {
        console.error('Error fetching jokes:', error);
        return 'Oops! Unable to fetch jokes.';
    }
}

// Function to display Chuck Norris jokes by a selected category on the page
async function displayJokesByCategory() {
    const categorySelect = document.getElementById('categorySelect');
    const category = categorySelect.value;
    const categoryJokesElement = document.getElementById('categoryJokes');
    categoryJokesElement.innerHTML = ''; // Clear previous jokes

    if (category) {
        const joke = await fetchJokesByCategory(category);
        const listItem = document.createElement('li');
        listItem.textContent = joke;
        listItem.classList.add('categoryJokeItem');
        categoryJokesElement.appendChild(listItem);
    }
}

// Populate categories dropdown
function populateCategories() {
    const categorySelect = document.getElementById('categorySelect');
    const categories = ['animal', 'career', 'celebrity', 'dev', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion', 'science', 'sport', 'travel'];
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Call populateCategories() function when the page loads
populateCategories();
