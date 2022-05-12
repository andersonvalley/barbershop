export function countNumbers() {
  const counts = document.querySelectorAll('.count')

  const observer = new IntersectionObserver(trueCallback)
  const target = document.querySelector('.about__numbers')
  observer.observe(target)

  function trueCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        for (let i = 0; i < counts.length; i++) {
          const to = Number(counts[i].getAttribute('data-to'))
          const range = to - 0
          const current = 0
          const increment = to < 0 ? 1 : +1
          const stepTime = Math.abs(Math.floor(1500 / range))
          const timer = setInterval(function () {
            current += increment
            if (i === 0) {
              current += increment + 1
              counts[0].innerHTML = current + '+'
            } else {
              counts[i].innerHTML = current
            }

            if (current == to) {
              clearInterval(timer)
            }
          }, stepTime)
        }
        observer.disconnect()
      }
    })
  }
}
