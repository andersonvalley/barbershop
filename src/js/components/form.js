export function sendData() {
  const form = document.forms.popup
  const popup = document.querySelector('.popup')

  function validateInputs(elements) {
    elements.addEventListener('input', e => {
      if (e.target.value !== '') {
        elements.classList.add('valid')
      } else if (e.target.value === '') {
        elements.classList.remove('valid')
      }
    })
  }

  validateInputs(form.elements.name)
  validateInputs(form.elements.phone)

  form.addEventListener('submit', e => {
    e.preventDefault()
    const obj = {
      name: form.name.value,
      phone: form.phone.value,
      address: form.address.value,
    }

    console.log(obj)

    form.elements.name.value = ''
    form.elements.name.classList.remove('valid')
    form.elements.phone.value = ''
    form.elements.phone.classList.remove('valid')

    popup.classList.remove('active')
    document.body.style.overflow = 'auto'

    const message = document.querySelector('.message')
    message.innerHTML = 'Заявка отправлена!'
    message.classList.add('active')
    setInterval(() => {
      message.classList.remove('active')
    }, 5000)
  })
}
