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
}
