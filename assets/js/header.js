document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const faBars = document.getElementById("fa-bars");
  const faXmark = document.getElementById("fa-xmark");
  const menuOption = document.getElementById("menu-option");

  const handleMenu = () => {
    if (menuOption.style.right === "0px") {
      menuOption.style.right = "-100%";
      faBars.style.display = "block";
      faXmark.style.display = "none";
    } else {
      menuOption.style.right = "0";
      faBars.style.display = "none";
      faXmark.style.display = "block";
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      menuOption.style.right = "-100%";
      menuOption.style.transition = "none";
      faBars.style.display = "none";
      faXmark.style.display = "none";
      faBars.style.display = "block";
    } else {
      menuOption.style.transition = "right 0.7s ease-in-out";
    }
  };

  faBars.addEventListener("click", handleMenu);
  faXmark.addEventListener("click", handleMenu);

  window.addEventListener("resize", handleResize);

  faBars.style.display = "block";
  faXmark.style.display = "none";
  menuOption.style.right = "-100%";

  handleResize();
});
