export function popupRegister() {
  const orderBtns = document.querySelectorAll('.order')
  const popup = document.querySelector('.popup')

  function closePopup() {
    popup.classList.remove('active')
    document.body.style.overflow = 'auto'
  }

  function openPopup() {
    popup.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  orderBtns.forEach(item => {
    item.addEventListener('click', () => {
      if (!popup.classList.contains('active')) {
        openPopup()
      }
    })
  })

  document.addEventListener('click', e => {
    if (
      e.target.classList.contains('popup__overlay') ||
      e.target.classList.contains('popup__close')
    )
      closePopup()
  })
}
