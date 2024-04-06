document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalWidth = slides.length * 100; // Assuming each logo is 100px wide, including padding/margins
    const numItems = slides.length / 2; // Assuming you've duplicated the items once for the looping effect
  
    track.style.setProperty('--total-width', `${totalWidth}px`);
    track.style.setProperty('--num-items', numItems);
  
    // Duplicate slides to ensure a smooth loop
    track.innerHTML += track.innerHTML; // This duplication might need to be adjusted based on the total width of the carousel and the viewable area.
  });
  