export function loadYandeMap() {
  const src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A194a616205bb3b02853d64f0f892b5dce840a29fdcebdd0d4862e684c356b896&amp;width=100%25&amp;height=630&amp;lang=ru_RU&amp;scroll=true"></script>`

  const observer = new IntersectionObserver(trueCallback)
  const target = document.querySelector('.contacts__map')
  observer.observe(target)

  function trueCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const script = document.createElement('script')
        script.setAttribute('src', src)
        entry.target.append(script)
        observer.disconnect()
      }
    })
  }
}
