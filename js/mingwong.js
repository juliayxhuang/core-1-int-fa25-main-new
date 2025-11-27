const homeButton = document.getElementById("homeButton");
const scrollThreshold = 250; // pixels to scroll before shrinking

// Handle button click: go back if possible, otherwise go home
homeButton.addEventListener("click", () => {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
});

// Handle scroll: toggle "scrolled" class based on scroll position
window.addEventListener("scroll", () => {
    console.log("ScrollY:", window.scrollY);  // Log scroll position
  if (window.scrollY > scrollThreshold) {
    homeButton.classList.add("scrolled");
    console.log("Added scrolled class");
  } else {
    homeButton.classList.remove("scrolled");
    console.log("Added scrolled class");
  }
});
// when user scrolls certain amount, "scrolled" class makes text smaller
