export const burgerMenu = () => {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')

  function closeMenu() {
    document.body.style.overflow = ''
    burger.classList.remove('close')
    menu.classList.remove('active')
  }

  function showMenu() {
    document.body.style.overflow = 'hidden'
    burger.classList.add('close')
  }

  if (burger) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('active')

      if (menu.classList.contains('active')) {
        showMenu()

        document.body.addEventListener('click', e => {
          if (e.target.getAttribute('data-link')) closeMenu()
        })
      } else {
        closeMenu()
      }
    })
  }
}
