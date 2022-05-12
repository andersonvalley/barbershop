import Swiper, { Navigation } from 'swiper'

export function interiorSlider() {
  const swiper = new Swiper('.interior__slider', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    slidesOffsetAfter: 0,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const reviewsSlider = new Swiper('.reviews__list', {
    direction: 'horizontal',
    slidesOffsetAfter: 0,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: false,
        loop: false,
      },
    },
  })
}
