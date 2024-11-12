
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: { 600: { enabled: true, }, 1: { enabled: false, } }
   
});