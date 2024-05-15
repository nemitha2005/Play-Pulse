'Use strict';

/* add event listener on multiple elements */

const addEventOnElements = function(elements, eventType, callback){
    for(let i=0, len = elements.length; i<len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

/* Mobile navbar toggler */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => navbar.classList.toggle("active");

addEventOnElements(navTogglers, "click", toggleNav); 