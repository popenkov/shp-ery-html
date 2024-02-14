import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import ready from "../../js/utils/documentReady.js";

ready(function () {
  const heroSlider = document.querySelector(".js-hero-slider");
  if (heroSlider) {
    // todo
    const slider = new Swiper(".js-hero-slider", {
      modules: [Navigation, Pagination],
      spaceBetween: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".hero__navigation-button--next",
        prevEl: ".hero__navigation-button--prev",
      },
    });
  }
});