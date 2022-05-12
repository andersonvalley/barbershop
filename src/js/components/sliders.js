import Swiper, { Navigation } from 'swiper'

export function sliders() {
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

  const welcome = new Swiper('.meeting__slider', {
    direction: 'horizontal',
    spaceBetween: 10,

    breakpoints: {
      320: {
        slidesPerView: 1.8,
      },
      480: {
        slidesPerView: 2.2,
      },
      680: {
        slidesPerView: 3.7,
      },
      850: {
        slidesPerView: 5.2,
      },
      900: {
        slidesPerView: 6,
        autoplay: false,
        loop: false,
      },
    },
  })
}
