document.addEventListener('DOMContentLoaded', function() {
    const menuUrl = 'menu.html';

    // Fetch menu content from menu.html
    fetch(menuUrl)
        .then(response => response.text())
        .then(data => {
            // Inject menu content into the menu section of each page
            const menuSection = document.querySelector('#pageLinks');
            if (menuSection) {
                menuSection.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading menu:', error));
});
