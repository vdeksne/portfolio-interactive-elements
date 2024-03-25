document.addEventListener("DOMContentLoaded", function() {
    var toggleIcon = document.getElementById("toggleIcon");
    toggleIcon.style.display = "none"; // Initially hide toggleIcon

    // Function to handle the toggle action
    function toggleAction() {
        var toggleDiv = document.getElementById("toggleDiv");
        var headerContent = document.querySelector(".header__content");
        var logo = document.querySelector(".logo");
        var nav = document.querySelector(".nav");

        toggleDiv.style.marginTop = "0";
        headerContent.style.justifyContent = "space-between";
        logo.style.display = "initial";
        nav.style.display = "initial";
        nav.style.justifyContent = "space-evenly";
        toggleIcon.style.display = "none";
    }

    // Event listener for click
    toggleIcon.addEventListener("click" , toggleAction);

    // Event listener for mouseover
    toggleIcon.addEventListener("mouseover", toggleAction);
});


window.addEventListener("scroll", function() {
    var toggleDiv = document.getElementById("toggleDiv");
    var toggleIcon = document.getElementById("toggleIcon");
    var headerContent = document.querySelector(".header__content");
    var logo = document.querySelector(".logo");
    var nav = document.querySelector(".nav");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        toggleDiv.style.marginTop = "-10px";
        toggleIcon.style.display = "block";
        headerContent.style.justifyContent = "center";
        logo.style.display = "none";
        nav.style.display = "none";
    } else {
        toggleDiv.style.marginTop = "0";
        toggleIcon.style.display = "none";
        headerContent.style.justifyContent = "space-between";
        logo.style.display = "initial";
        nav.style.display = "initial";
        nav.style.justifyContent = "space-evenly";
    }
});
