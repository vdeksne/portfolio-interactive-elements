// Select all elements with the class '...'
let filter_btns = document.querySelectorAll('.filter-btn');
let projects = document.querySelectorAll('.filter-project-item');

// Add click event listener to each filter button
filter_btns.forEach((filter_btn) => {
  filter_btn.addEventListener('click', () => {
    // Remove 'active' class from all filter buttons
    filter_btns.forEach((filter_btn) => {
      filter_btn.classList.remove('active');
    });
    // Add 'active' class to the clicked filter button
    filter_btn.classList.add('active');
        // Get the value of the 'data-project' attribute of the clicked filter button
    let selected = filter_btn.getAttribute('data-project');
        // Loop through each project
    projects.forEach((project, index) => {
      let project_length = projects.length;
            // Check if the project matches the selected filter or if 'all' is selected
      if (
        project.getAttribute('data-project') === selected ||
        selected === 'all'
      ) {
        // If the project has a transition, remove it
        if (project.style.transition) {
          project.style.transition = '';
        } else {
          // Otherwise, set the transition properties
          project.style.transition = `width 0.5s ease ${
            index / project_length + 0.6
          }s,height 0.5s ease ${index / project_length + 0.6}s`;
        }
        // Add 'show' class and remove 'hide' class from the project
        project.classList.add('show');
        project.classList.remove('hide');
      } else {
        // Set the transition properties
        project.style.transition = `width 0.5s ease ${
          index / project_length + 0.6
        }s,height 0.5s ease ${index / project_length + 0.6}s`;

        // Remove 'show' class and add 'hide' class to the project
        project.classList.remove('show');
        project.classList.add('hide');
      }
    });
  });
});
