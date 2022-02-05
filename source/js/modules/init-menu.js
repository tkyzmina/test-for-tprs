import { disableScrolling, enableScrolling } from "../utils/scroll-lock";

const initMenu = (preventScrollLock) => {
  const menuOpenBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__nav");
  const navLinks = menu.querySelectorAll(".header__link");

  menuOpenBtn.addEventListener("click", function () {
    if (menuOpenBtn && menu) {
      menuOpenBtn.classList.toggle("hamburger--active");
      menu.classList.toggle("header__nav--open");
    }
  });

  const closeMenu = (e) => {
    if (e.target.classList.contains("header__link")) {
      menuOpenBtn.classList.remove("hamburger--active");
      menu.classList.remove("header__nav--open");
    }
  };

  navLinks.forEach((el) => el.addEventListener("click", closeMenu));
};
export default initMenu;
