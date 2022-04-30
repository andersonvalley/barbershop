export function showPriceInfo() {
  const priceItems = document.querySelectorAll('.price__item')
  const priceImage = document.querySelector('.price__img')

  function changeExtension(item) {
    const newItem = item.getAttribute('data-img').split('.')
    newItem[1] = 'webp'
    return newItem.join('.')
  }

  priceItems.forEach(item => {
    item.addEventListener('click', () => {
      priceItems.forEach(i => {
        if (i.classList.contains('active')) i.classList.remove('active')
      })

      item.classList.add('active')

      document.querySelector('.description__title').innerHTML = item.getAttribute('data-title')
      document.querySelector('.description__text').innerHTML = item.getAttribute('data-text')
      priceImage.children[1].setAttribute('src', item.getAttribute('data-img'))
      priceImage.children[0].setAttribute('srcset', changeExtension(item))
    })
  })
}
