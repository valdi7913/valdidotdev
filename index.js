const darkLink = 'dark';
const lightLink = 'light';

let isLight = localStorage.getItem('isLight');

// If not set default to light mode
if (isLight === null) {isLight = true;} 
else {isLight = isLight === 'true'; }

applyTheme(isLight);

const sunMoonButton = document
    .getElementById("mode")
    .addEventListener('click', (e) => {
        isLight = !isLight;
        applyTheme(isLight);
        localStorage.setItem('isLight', isLight);
    });
    
document.addEventListener("DOMContentLoaded", function() {
  // Get all links that point to sections on the same page
  const links = document.querySelectorAll('a[href^="#"]');
  
  // Add click event listener to each link
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href'); // Get the target section's id
      const targetSection = document.querySelector(targetId); // Get the target section
      
      // Add jumping effect class to the target section
      targetSection.classList.add('jumping-effect');
      
      // Remove the jumping effect class after 500ms
      setTimeout(() => {
        targetSection.classList.remove('jumping-effect');
      }, 2000); // Adjust the time according to the animation duration
    });
  });
});
    

if(isLight && !sunMoonButton.classList.contains("flip")) sunMoonButton.classList.toggle("flip");

function applyTheme(isLight) {
    if (isLight) {
        addCss(lightLink);
        removeCss(darkLink);
    } else {
        addCss(darkLink);
        removeCss(lightLink);
    }
}

function addCss(fileName) {
    const head = document.head;
    const link = document.createElement("link");

    link.id = fileName;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName + ".css";

    head.appendChild(link);
}

function removeCss(fileName) {
    const sheet = document.getElementById(fileName);
    if (sheet) {
        sheet.disabled = true;
        sheet.parentNode.removeChild(sheet);
    }
}
