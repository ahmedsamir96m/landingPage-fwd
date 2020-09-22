/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navigationList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const createNavBar = () => {
  let navItem;
  // looping over all te sections
  for (let i = 0; i < sections.length; i++) {
    const sectionID = sections[i].id;
    const sectionDataNav = sections[i].dataset.nav;
    // creating the required html for each nav element
    navItem = `<ul id="navbar__list">
          <li><a href="#${sectionID}" class="menu__link">${sectionDataNav}</a></li>
        </ul>`;
    navigationList.innerHTML += navItem;
  }
};

// Add class 'active' to section when near top of viewport
// getting the top offest value of elem on the screen
const calcElementOffeset = (elem) => {
  return elem.getBoundingClientRect().top;
};

// remove the active class
const removeActiveClass = (elem) => {
  elem.classList.remove("your-active-class");
  elem.style.backgroundColor = "inherit";
};

// addding active class
const addingActiveClass = (elem, condition) => {
  if (condition) {
    elem.classList.add("your-active-class");
    elem.style.backgroundColor = "tomato";
  }
};

// function to handle when to add and remove the active class
const handleActiveClass = () => {
  for (let section of sections) {
    const sectionOffeset = calcElementOffeset(section);
    const inviewport = () =>
      sectionOffeset < section.scrollHeight - 200 && sectionOffeset >= -150;
    removeActiveClass(section);
    addingActiveClass(section, inviewport());
  }
};

// Scroll to anchor ID using scrollTO event
const scrollingToSections = () => {
  const links = Array.from(document.querySelectorAll(".navbar__menu a"));
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
      sections[i].addEventListener("click", (e) => {
        window.scrollTo(sections[i]);
      });
    });
  }
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.addEventListener("load", createNavBar);

// Scroll to section on link click
scrollingToSections();

// Set sections as active
window.addEventListener("scroll", handleActiveClass);
