export const scrollHeader = () => {
  const header = document.querySelector('.header')

  let prevScroll = window.pageYOffset

  if (prevScroll <= 0) {
    header.classList.add('header-in-hero', 'header-hidden')
  }

  document.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset

    if (currentScroll > 150 && currentScroll > prevScroll) {
      header.classList.add('header-in-hero', 'header-hidden')
    } else {
      header.classList.remove('header-in-hero', 'header-hidden')
    }

    if (currentScroll < 150) {
      header.classList.add('header-in-hero', 'header-hidden')
    }

    prevScroll = currentScroll
  })
}
