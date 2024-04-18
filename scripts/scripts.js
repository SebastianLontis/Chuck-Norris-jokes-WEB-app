document.addEventListener('DOMContentLoaded', function() {
    const pageLinks = [
        { title: 'Home', url: 'index.html' },
        { title: 'Random Joke', url: 'random.html' },
        { title: 'Categories', url: 'categories.html' },
        { title: 'Submit a Joke', url: 'submit.html' }
    ];

    const ul = document.getElementById('pageLinks');
    pageLinks.forEach(function(page) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = page.title;
        a.href = page.url;
        li.appendChild(a);
        ul.appendChild(li);
    });
});
