var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 700,
  slidesPerView: 2,
  // centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // windowsize >= 768
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }

})
