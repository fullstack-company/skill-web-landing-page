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
  let oldValue = 0;
  let newValue = 0;

  window.addEventListener("scroll", (e) => {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
      scrollTop.classList.remove("_shown");
    } else if (oldValue > newValue) {
      scrollTop.classList.add("_shown");
    }
    oldValue = newValue;
  });

  const logo = document.querySelector(".header .logo");

  if (logo) {
    const body = document.querySelector("body");
    logo.addEventListener("click", (e) => {
      e.preventDefault;

      if (body.classList.contains("bg-dark")) {
        body.classList.remove("bg-dark");
        body.classList.add("bg-light");
      } else if (body.classList.contains("bg-light")) {
        body.classList.remove("bg-light");
      } else {
        body.classList.add("bg-dark");
      }
    });
  }
});
