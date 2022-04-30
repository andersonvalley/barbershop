export function popupRegister() {
  const orderBtns = document.querySelectorAll('.order')
  const popup = document.querySelector('.popup')

  orderBtns.forEach((item) => {
    item.addEventListener('click', () => {
      if (popup.classList.contains('active')) {
        popup.classList.remove('active')
      } else {
        popup.classList.add('active')
        document.body.style.overflow = 'hidden'
      }

      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup__overlay')) {
          popup.classList.remove('active')
          document.body.style.overflow = 'auto'
        } else if (e.target.classList.contains('popup__close')) {
          popup.classList.remove('active')
          document.body.style.overflow = 'auto'
        }
      })
    })
  })
}

