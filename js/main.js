window.addEventListener("DOMContentLoaded", () => {
  // Burger menu handle
  const header = document.getElementById("back_to_top");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  if (burger) {
    burger.addEventListener("click", () => {
      header.classList.toggle("_active");
      burger.classList.toggle("_active");
      menu.classList.toggle("_active");

      if (burger.classList.contains("_active")) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
      } else {
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    });
  }

  // Lang panel handle
  const lang = document.getElementById("lang");

  if (lang) {
    lang.addEventListener("click", () => {
      lang.classList.toggle("_active");
    });
  }

  // Scroll top btn show/hide
  const scrollTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 750) {
      scrollTop.classList.add("_shown");
    } else {
      scrollTop.classList.remove("_shown");
    }
  });
});
