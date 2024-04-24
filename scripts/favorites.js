let favorites = [];

export function addToFavorites(joke) {
    favorites.push(joke);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function removeFromFavorites(joke) {
    favorites = favorites.filter(favJoke => favJoke !== joke);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function displayFavorites() {
    const favoritesContainer = document.getElementById('favoritesContainer');
    favoritesContainer.innerHTML = '';
    favorites.forEach(joke => {
        const p = document.createElement('p');
        p.textContent = joke;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from favorites';
        removeButton.classList.add('remove-button'); // Adding the class
        removeButton.addEventListener('click', () => {
            removeFromFavorites(joke);
            displayFavorites();
        });
        favoritesContainer.appendChild(p);
        favoritesContainer.appendChild(removeButton);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
    }
    displayFavorites();
});
