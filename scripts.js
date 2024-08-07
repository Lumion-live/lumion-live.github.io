document.addEventListener('DOMContentLoaded', function() {
    function updateDivs() {
        const desktopDiv = document.getElementById('desktop');
        const mobileDiv = document.getElementById('mobile');

        if (window.innerWidth > window.innerHeight) {
            // If the window is wider than it is tall
            desktopDiv.style.display = 'block';
            mobileDiv.style.display = 'none';
        } else {
            // If the window is taller than it is wide
            desktopDiv.style.display = 'none';
            mobileDiv.style.display = 'block';
        }
    }

    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.full-screen-menu').classList.add('active');
    });

    document.querySelector('.close-btn').addEventListener('click', function() {
        document.querySelector('.full-screen-menu').classList.remove('active');
    });

    // Run the function initially
    updateDivs();

    // Add event listener for window resize
    window.addEventListener('resize', updateDivs);
});
