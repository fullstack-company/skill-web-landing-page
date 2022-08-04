window.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  if (burger) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("_active");
      menu.classList.toggle("_active");

      if (burger.classList.contains("_active")) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
      } else {
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    })
  }
});
