document.addEventListener('DOMContentLoaded', function() {
    const topnav = document.querySelector('.topnav');
    const topnavLinks = document.querySelector('.topnav__links');
    const logoDesktop = document.querySelector('.logo-desktop');
    const btnOpen = document.getElementById('btnOpen');
    let isOpen = false;

    topnav.addEventListener('click', function() {
        if (isOpen) {
            topnav.style.height = '2.2em'; // Set back to initial height
            topnavLinks.style.display = 'none'; // Hide the links
            logoDesktop.style.display = 'flex'; // Show the logo
            btnOpen.style.display = 'block'; // Show the button
        } else {
            topnav.style.height = '100vh'; // Set to full viewport height
            topnavLinks.style.display = 'block'; // Show the links
            topnavLinks.style.flexDirection = 'column'; // Set flex-direction to column
            logoDesktop.style.display = 'none'; // Hide the logo
            btnOpen.style.display = 'none'; // Hide the button
        }
        isOpen = !isOpen; // Toggle isOpen flag
    });
});
