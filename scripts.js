document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.full-screen-menu').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.full-screen-menu').classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
    function checkAspectRatio() {
        const desktopDiv = document.querySelector('.desktop');
        const mobileDiv = document.querySelector('.mobile');

        if (window.innerWidth > window.innerHeight) {
            desktopDiv.style.display = 'block';
            mobileDiv.style.display = 'none';
        } else {
            desktopDiv.style.display = 'none';
            mobileDiv.style.display = 'block';
        }
    }

    window.addEventListener('resize', checkAspectRatio);
    checkAspectRatio();
});
