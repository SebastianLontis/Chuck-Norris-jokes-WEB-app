import { fetchRandomJoke } from './api.js';
import { removeFromFavorites, addToFavorites, displayFavorites } from './favorites.js';

const menuItems = [
    { name: 'Home', url: 'index.html' },
    { name: 'Random Joke', url: 'random.html' },
    { name: 'Favorites', url: 'Favorites.html' },
    { name: 'Submit a Joke', url: 'submit.html' },
];

function createMenuItem(name, url) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = name;
    a.href = url;
    li.appendChild(a);
    return li;
}

function populateMenu() {
    const menu = document.getElementById('menu');
    menuItems.forEach(item => {
        const menuItem = createMenuItem(item.name, item.url);
        menu.appendChild(menuItem);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    populateMenu();

    const categories = ["None", "animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];

    const categorySelect = document.getElementById('categorySelect');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    // Fetch a joke when the selected category changes
    document.getElementById('categorySelect').addEventListener('change', (event) => {
        const category = event.target.value;
        fetchRandomJoke(category === "None" ? "" : category).then(joke => {
            const jokeContainer = document.getElementById('jokeContainer'); 
            jokeContainer.textContent = joke;
            const favButton = document.createElement('button');
            favButton.textContent = 'Add to favs';
            favButton.classList.add('favButton');
            favButton.addEventListener('click', () => {
                addToFavorites(joke);
                alert('Joke added to favorites!'); 
            });
            jokeContainer.appendChild(favButton);
        });
    });

    document.getElementById('getAnotherJoke').addEventListener('click', () => {
        const category = document.getElementById('categorySelect').value;
        fetchRandomJoke(category === "None" ? "" : category).then(joke => {
            const jokeContainer = document.getElementById('jokeContainer'); 
            jokeContainer.textContent = joke;
            const favButton = document.createElement('button');
            favButton.textContent = 'Add to favs';
            favButton.classList.add('favButton');
            favButton.addEventListener('click', () => {
                addToFavorites(joke);
                alert('Joke added to favorites!'); 
            });
            jokeContainer.appendChild(favButton);
        });
    });
});

// For favorites.html
document.addEventListener('DOMContentLoaded', (event) => {
    const jokeForm = document.getElementById('jokeForm');
    jokeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const jokeInput = document.getElementById('jokeInput');
        const joke = jokeInput.value.trim();
        if (joke) {
            addToFavorites(joke);
            jokeInput.value = '';
            alert('Your joke has been submitted and added to favorites!');
        } else {
            alert('Please enter a joke.');
        }
    });
});
