import HomePage from "./pages/home.js";
import MyProjects from "./pages/myprojects.js";
import Shootings from "./pages/shootings.js"; // Import the Shootings page
import _spaService from "./services/spa.js";
import AdvChallengeProject from "./pages/projects/advChallenge.js";
import JobPortal from "./pages/projects/jobPortal.js";
import Thesis from "./pages/projects/thesis.js";
import BabySam from "./pages/projects/babySam.js";
import SunglassesConcept from "./pages/projects/SunglassesConcept.js";
import GoGetGreen from "./pages/projects/GoGetGreen.js";
import NavBar from "./components/navbar.js";


// Declare and init
let navbar = new NavBar();
let shootings = new Shootings();
let homePage = new HomePage();
let myProjects = new MyProjects();
let advChallengeProject = new AdvChallengeProject();
let jobPortal = new JobPortal();
let thesis = new Thesis();
let babySam = new BabySam();
let sunglassesConcept = new SunglassesConcept();
let goGetGreen = new GoGetGreen();

// Initialize the SpaService after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  _spaService.init();
  window.scrollTo(0, 0); // Scroll to the top after DOM content is loaded
});

// Additional functions

window.initListHover = function() {
  if (window.innerWidth < 1024) {
    return; // Do not execute if screen size is smaller than 1024px
  }

  document.querySelectorAll('.list-element').forEach(element => {
    let imagesAppended = false; // Flag to track if images are appended
    
    element.addEventListener('mouseenter', () => {
      if (!imagesAppended) {
        const images = element.dataset.images.split(',');
        images.forEach((src, index) => {
          let imgContainer = document.createElement('div');
          imgContainer.classList.add('image-container');
          let img = document.createElement('img');
          img.src = src;
          imgContainer.appendChild(img);
          document.body.appendChild(imgContainer);

          // Random position within the viewport
          const randomX = Math.random() * (window.innerWidth - 140); // 17.5rem is approx 280px
          const randomY = Math.random() * (window.innerHeight - 140);
          imgContainer.style.left = `${randomX}px`;
          imgContainer.style.top = `${randomY}px`;

          // Ensure the images animate from the center of themselves
          requestAnimationFrame(() => {
            imgContainer.style.opacity = '1';
            imgContainer.style.transform = 'scale(1)';
          });
        });
        
        imagesAppended = true; // Set flag to true
      }
    });

    element.addEventListener('mouseleave', () => {
      document.querySelectorAll('.image-container').forEach(container => {
        container.style.opacity = '0'; // Set opacity to 0
        container.style.transform = 'scale(0)'; // Scale back to 0
        setTimeout(() => container.remove(), 200); // Remove after transition
      });
      
      imagesAppended = false; // Reset flag
    });
  });
}

// Call the function to initialize hover effect
initListHover();

// Reinitialize hover effect on window resize if necessary
window.addEventListener('resize', () => {
  // Clear existing event listeners to avoid duplication
  document.querySelectorAll('.list-element').forEach(element => {
    element.replaceWith(element.cloneNode(true));
  });
  initListHover();
});


window.initGallery = function() {
  const images = [

    // Add more image paths as needed
  ];

  const imageGrid = document.getElementById('imageGrid');
  const galleryView = document.getElementById('galleryView');
  const galleryImage = document.getElementById('galleryImage');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const closeButton = document.getElementById('closeButton');
  const imageIndex = document.getElementById('imageIndex');

  let currentIndex = 0;

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.addEventListener('click', () => {
      openGallery(index);
    });
    imageGrid.appendChild(img);
  });

  function openGallery(index) {
    currentIndex = index;
    galleryImage.src = images[currentIndex];
    galleryView.classList.add('active');
    updateImageIndex();
  }

  function closeGallery() {
    galleryView.classList.remove('active');
  }

  function showPrevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    galleryImage.src = images[currentIndex];
    updateImageIndex();
  }

  function showNextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    galleryImage.src = images[currentIndex];
    updateImageIndex();
  }

  function updateImageIndex() {
    imageIndex.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);
  closeButton.addEventListener('click', closeGallery);
}
initGallery();
document.addEventListener("DOMContentLoaded", function() {
  initGallery();
});


window.adjustRemoveSpanVisibility = function(){
  // Get all elements with the class "myproject-box-labels"
  const labels = document.querySelectorAll('.myproject-box-labels');

  // Check the width of the screen
  const screenWidth = window.innerWidth;

  // If the screen width is smaller than 1024px
  if (screenWidth < 1024) {
    labels.forEach(labelsContainer => {
      // Get the span with the class "remove-span"
      const removeSpan = labelsContainer.querySelector('.remove-span');

      // Check if the remove span exists and hide it
      if (removeSpan) {
        removeSpan.style.display = 'none';
      }
    });
  } else {
    // If the screen width is equal or higher than 1024px
    labels.forEach(labelsContainer => {
      // Get the span with the class "remove-span"
      const removeSpan = labelsContainer.querySelector('.remove-span');

      // Check if the remove span exists and make it visible
      if (removeSpan) {
        removeSpan.style.display = 'inline-block';
      }
    });
  }
  }
// Call the function when the page loads and whenever the window is resized
window.onload = adjustRemoveSpanVisibility;
window.onresize = adjustRemoveSpanVisibility;

window.updateTime = function(){
  const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Format the time to display with leading zeros
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Select all elements with the class 'local-time' and set their text content
    document.querySelectorAll('.local-time').forEach(element => {
    element.textContent = formattedTime; // Assuming 'formattedTime' is defined
    });


    // Update the time every second
    setTimeout(() => this.updateTime(), 1000);
}

window.onload = updateTime;

window.hamburgerMenu = function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

hamburgerMenu();

window.cursor = function () {
  const cursor = document.querySelector(".cursor");
  const hoverElements = document.querySelectorAll("a, button");

  document.body.style.cursor = "none"; // Ensure cursor is hidden globally

  document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.cursor = "none"; // Ensure custom cursor is hidden
  });

  for (const item of hoverElements) {
    item.addEventListener("mouseover", function () {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.cursor = "none"; // Ensure custom cursor is hidden
    });

    item.addEventListener("mouseout", function () {
      cursor.style.width = "25px";
      cursor.style.height = "25px";
      cursor.style.cursor = "none"; // Ensure custom cursor is hidden
    });
  }
};

cursor();



window.scrollToTop = function () {
  document.querySelector(".navbar").scrollIntoView({ behavior: 'smooth' });
};

// Ensure no unwanted scrolling on hash change
window.addEventListener("hashchange", function () {
  window.scrollTo(0, 0);
  document.querySelector(".navbar").focus();
});

// Function to scroll to top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Function to toggle hamburger menu
window.toggleHamburger = function() {
  const hamburgerSwitch = document.querySelector('.hamburger-switch');
  const hamburgerScreen = document.querySelector('.hamburger-screen');
  const hamburgerTabScrolled = document.querySelector('.hamburger-tab.scrolled');

  // Toggle text between "Menu" and "Close"
  hamburgerSwitch.textContent = hamburgerSwitch.textContent === "Menu" ? "Close" : "Menu";
  // Toggle visibility of hamburger screen
  hamburgerScreen.classList.toggle('show');

  // Disable scrolling when hamburger menu is open
  document.body.classList.toggle('no-scroll');

  // Set overflow-y: hidden on html element when menu is open
  if (hamburgerSwitch.textContent === "Close") {
    document.documentElement.style.overflowY = 'hidden';

    // Comment out styles on .hamburger-tab.scrolled
    if (hamburgerTabScrolled) {
      hamburgerTabScrolled.style.borderBottom = 'none';
      hamburgerTabScrolled.style.background = 'none';
      hamburgerTabScrolled.style.boxShadow = 'none';
      hamburgerTabScrolled.style.backdropFilter = 'none';
      hamburgerTabScrolled.style.webkitBackdropFilter = 'none';
    }
  } else {
    document.documentElement.style.overflowY = '';

    // Revert styles on .hamburger-tab.scrolled
    if (hamburgerTabScrolled) {
      hamburgerTabScrolled.style.borderBottom = '';
      hamburgerTabScrolled.style.background = '';
      hamburgerTabScrolled.style.boxShadow = '';
      hamburgerTabScrolled.style.backdropFilter = '';
      hamburgerTabScrolled.style.webkitBackdropFilter = '';
    }
  }
}

// Event listener for hamburger menu toggle
const hamburgerSwitch = document.querySelector('.hamburger-switch');
hamburgerSwitch.addEventListener('click', toggleHamburger);

// Adding event listeners to close the hamburger menu and scroll to top when clicking on links inside .hamburger-menulist
const hamburgerMenuList = document.querySelector('.hamburger-menulist');
const hamburgerLinks = hamburgerMenuList.querySelectorAll('.hamburger-nav-link');

hamburgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    const hamburgerScreen = document.querySelector('.hamburger-screen');
    hamburgerScreen.classList.remove('show');

    const hamburgerSwitch = document.querySelector('.hamburger-switch');
    hamburgerSwitch.textContent = "Menu";

    document.body.classList.remove('no-scroll');

    // Remove overflow-y: hidden from html element
    document.documentElement.style.overflowY = '';

    // Revert styles on .hamburger-tab.scrolled
    const hamburgerTabScrolled = document.querySelector('.hamburger-tab.scrolled');
    if (hamburgerTabScrolled) {
      hamburgerTabScrolled.style.borderBottom = '';
      hamburgerTabScrolled.style.background = '';
      hamburgerTabScrolled.style.boxShadow = '';
      hamburgerTabScrolled.style.backdropFilter = '';
      hamburgerTabScrolled.style.webkitBackdropFilter = '';
    }

    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});





window.hamburgerScroll = function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var hamburgerTab = document.querySelector(".hamburger-tab");
  var hamburgerSwitch = document.querySelector(".hamburger-switch");
  var navbar = document.querySelector(".navbar");

  if (window.innerWidth < 1024) {
    if (scrollTop > 4 * 16) { // 4rem in pixels (assuming 1rem = 16px)
      hamburgerTab.classList.add("scrolled");
      hamburgerSwitch.classList.add("scrolled");
      navbar.classList.add("scrolled");
    } else {
      hamburgerTab.classList.remove("scrolled");
      hamburgerSwitch.classList.remove("scrolled");
      navbar.classList.remove("scrolled");
    }
  } else {
    hamburgerTab.classList.remove("scrolled");
    hamburgerSwitch.classList.remove("scrolled");
    navbar.classList.remove("scrolled");
  }

  // Check if at the top of the page
  if (scrollTop === 0) {
    hamburgerTab.classList.remove("scrolled");
    hamburgerSwitch.classList.remove("scrolled");
    navbar.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", hamburgerScroll);
window.addEventListener("resize", hamburgerScroll);

// Check once on initial load
window.addEventListener("load", hamburgerScroll);

// Check once on initial load
document.addEventListener("DOMContentLoaded", function() {
  scrollToTop();
});



