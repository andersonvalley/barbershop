import lazyLoadInstance from './components/lazy'
import WOW from 'wow.js'
import SmoothScroll from 'smooth-scroll'
import { scrollHeader } from './components/scrollHeader'
import { burgerMenu } from './components/burgerMenu'
import { chooseAddress } from './components/chooseAddress'
import { countNumbers } from './components/countNumbers'
import { popupRegister } from './components/popupRegister'
import { sendData } from './components/form'
import { inputMask } from './components/inputMask'
import interiorSlider from './components/sliders'
import { showPriceInfo } from './components/showPriceInfo'
import { loadYandeMap } from './components/yMap'

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('*[href*="#"]')
  lazyLoadInstance.update()
  new WOW().init()
  burgerMenu()
  chooseAddress()
  inputMask()
  countNumbers()
  scrollHeader()
  popupRegister()
  sendData()
  // interiorSlider()
  showPriceInfo()
  loadYandeMap()
  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('preloader_hidden')
  })
})
