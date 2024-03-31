document.addEventListener('DOMContentLoaded', function() {
    const topnav = document.querySelector('.topnav');
    const topnavLinks = document.querySelector('.topnav__links');
    const logoDesktop = document.querySelector('.logo-desktop');
    const btnOpen = document.getElementById('btnOpen');
    let isOpen = false;

    topnav.addEventListener('click', function() {
        // Define a function to scroll to the top and then expand the menu
        function scrollToTopAndExpand() {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
            setTimeout(function() {
                topnav.style.height = '100vh'; // Set to full viewport height
                topnavLinks.style.display = 'block'; // Show the links
                topnavLinks.style.flexDirection = 'column'; // Set flex-direction to column
                logoDesktop.style.display = 'none'; // Hide the logo
                btnOpen.style.display = 'none'; // Hide the button
                bodyScrollLockUpgrade.disableBodyScroll(document.body); // Disable body scrolling
                isOpen = true; // Set isOpen flag to true
            }, 500); // Adjust the delay as needed
        }

        if (!isOpen) {
            scrollToTopAndExpand(); // Call the function to scroll to top and expand the menu
        } else {
            topnav.style.height = '2.2em'; // Set back to initial height
            topnavLinks.style.display = 'none'; // Hide the links
            logoDesktop.style.display = 'flex'; // Show the logo
            btnOpen.style.display = 'block'; // Show the button
            bodyScrollLockUpgrade.enableBodyScroll(document.body); // Enable body scrolling
            isOpen = false; // Set isOpen flag to false
        }
    });
});
