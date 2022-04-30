export const chooseAddress = () => {
  const phone = document.querySelector('.header__phone')
  const point = document.querySelector('.header__points')
  const pointItem = document.querySelectorAll('.header__point-item')
  const pointsList = document.querySelector('.header__points-list')

  point.addEventListener('click', () => {
    pointsList.classList.toggle('active')
    pointItem.forEach((item) => {
      item.addEventListener('click', () => {
        point.textContent = item.textContent
        phone.textContent = item.getAttribute('data-value')
        phone.setAttribute('href', `tel:${item.getAttribute('data-value')}`)
        pointsList.classList.remove('active')
      })
    })
  })

  document.addEventListener('click', (e) => {
    if (e.target.className !== 'header__points' && e.target.className !== 'header__points-list active') {
      pointsList.classList.remove('active')
    }
  })
}
