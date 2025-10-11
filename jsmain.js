"use main";
const about = document.querySelector(".about-me");
const headNav = document.querySelector(".header-nav");
window.addEventListener("scroll", function () {
  const limit = about.getBoundingClientRect();
  if (window.scrollY > limit.top) {
    headNav.classList.add("sticky");
  } else {
    headNav.classList.remove("sticky");
  }
});
