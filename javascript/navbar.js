// select the targeted element to trigger a motion
const primaryNav = document.querySelector("#primary-navigation");

// select the primary header for a backdrop-filter of blur fix.
const primaryHeader = document.querySelector("#primary-header");

// select the element responsible for the triggering mechanism.
const navToggle = document.querySelector(".mobile-nav-toggle");

// add an event listener on click on navToggle button
navToggle.addEventListener("click", () => {
    const cardVisible = primaryNav.getAttribute("data-visible");
    if (cardVisible === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        primaryHeader.setAttribute("data-navbar-blur", "false");
      }
      else {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        primaryHeader.setAttribute("data-navbar-blur","true");
    }
});

// turning off all transitions while resizing the screen
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-transition-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-transition-stopper");
  }, 400);
});