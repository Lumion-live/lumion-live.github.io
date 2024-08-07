document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.full-screen-menu').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.full-screen-menu').classList.remove('active');
});
