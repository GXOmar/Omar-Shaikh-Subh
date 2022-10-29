// select the targeted element to trigger a motion
const primaryNav = document.querySelector("#primary-navigation");

// select the element responsible for the triggering mechanism.
const navToggle = document.querySelector(".mobile-nav-toggle");

console.log(primaryNav)
console.log(navToggle)

// add an event listener on click on navToggle button
navToggle.addEventListener("click", () => {
    const cardVisible = primaryNav.getAttribute("data-visible");
    if (cardVisible === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    }
    else {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");

    }
});

// turning off all transitions while resizing the screen
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});