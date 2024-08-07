document.addEventListener('DOMContentLoaded', function() {
    function updateDivs() {
        const desktopDiv = document.getElementById('desktop');
        const mobileDiv = document.getElementById('mobile');

        if (desktopDiv && mobileDiv) {
            if (window.innerWidth > window.innerHeight) {
                // If the window is wider than it is tall
                desktopDiv.style.display = 'block';
                mobileDiv.style.display = 'none';
            } else {
                // If the window is taller than it is wide
                desktopDiv.style.display = 'none';
                mobileDiv.style.display = 'block';
            }
        } else {
            console.error('One or both of the div elements (desktop or mobile) are not found in the DOM.');
        }
    }

    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-btn');
    const fullScreenMenu = document.querySelector('.full-screen-menu');

    if (hamburger && fullScreenMenu) {
        hamburger.addEventListener('click', function() {
            fullScreenMenu.classList.add('active');
        });
    } else {
        console.error('Hamburger menu or full-screen menu elements are not found in the DOM.');
    }

    if (closeBtn && fullScreenMenu) {
        closeBtn.addEventListener('click', function() {
            fullScreenMenu.classList.remove('active');
        });
    } else {
        console.error('Close button or full-screen menu elements are not found in the DOM.');
    }

    // Run the function initially
    updateDivs();

    // Add event listener for window resize
    window.addEventListener('resize', updateDivs);
});
