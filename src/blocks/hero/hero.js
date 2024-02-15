import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import ready from "../../js/utils/documentReady.js";

ready(function () {
  const heroSlider = document.querySelector(".js-hero-slider");
  if (heroSlider) {
    /* eslint-disable-next-line */
    const slider = new Swiper(".js-hero-slider", {
      modules: [Navigation, Pagination],
      spaceBetween: 1,
      loop: true,
      pagination: {
        el: ".hero__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".hero__navigation-button--next",
        prevEl: ".hero__navigation-button--prev",
      },
    });
  }
});
