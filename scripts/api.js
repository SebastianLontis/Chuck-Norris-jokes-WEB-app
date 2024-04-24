async function fetchRandomJoke(category) {
    const url = category && category !== "None" ? `https://api.chucknorris.io/jokes/random?category=${category}` : 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url);
    const joke = await response.json();
    return joke.value;
}

export { fetchRandomJoke };