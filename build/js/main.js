/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/burgerMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/burgerMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenu": () => (/* binding */ burgerMenu)
/* harmony export */ });
var burgerMenu = function burgerMenu() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');

  function closeMenu() {
    document.body.style.overflow = '';
    burger.classList.remove('close');
    menu.classList.remove('active');
  }

  function showMenu() {
    document.body.style.overflow = 'hidden';
    burger.classList.add('close');
  }

  if (burger) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('active');

      if (menu.classList.contains('active')) {
        showMenu();
        document.body.addEventListener('click', function (e) {
          if (e.target.getAttribute('data-link')) closeMenu();
        });
      } else {
        closeMenu();
      }
    });
  }
};

/***/ }),

/***/ "./src/js/components/chooseAddress.js":
/*!********************************************!*\
  !*** ./src/js/components/chooseAddress.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chooseAddress": () => (/* binding */ chooseAddress)
/* harmony export */ });
var chooseAddress = function chooseAddress() {
  var phone = document.querySelector('.header__phone');
  var point = document.querySelector('.header__points');
  var pointItem = document.querySelectorAll('.header__point-item');
  var pointsList = document.querySelector('.header__points-list');
  point.addEventListener('click', function () {
    pointsList.classList.toggle('active');
    pointItem.forEach(function (item) {
      item.addEventListener('click', function () {
        point.textContent = item.textContent;
        phone.textContent = item.getAttribute('data-value');
        phone.setAttribute('href', "tel:".concat(item.getAttribute('data-value')));
        pointsList.classList.remove('active');
      });
    });
  });
  document.addEventListener('click', function (e) {
    if (e.target.className !== 'header__points' && e.target.className !== 'header__points-list active') {
      pointsList.classList.remove('active');
    }
  });
};

/***/ }),

/***/ "./src/js/components/countNumbers.js":
/*!*******************************************!*\
  !*** ./src/js/components/countNumbers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countNumbers": () => (/* binding */ countNumbers)
/* harmony export */ });
function countNumbers() {
  var counts = document.querySelectorAll('.count');
  document.addEventListener('scroll', function () {
    if (window.pageYOffset > 100 && window.pageYOffset < 150) {
      var _loop = function _loop(i) {
        var to = Number(counts[i].getAttribute('data-to'));
        var range = to - 0;
        var current = 0;
        var increment = to < 0 ? 1 : +1;
        var stepTime = Math.abs(Math.floor(1500 / range));
        var timer = setInterval(function () {
          current += increment;

          if (i === 0) {
            current += increment + 1;
            counts[0].innerHTML = current + '+';
          } else {
            counts[i].innerHTML = current;
          }

          if (current == to) {
            clearInterval(timer);
          }
        }, stepTime);
      };

      for (var i = 0; i < counts.length; i++) {
        _loop(i);
      }
    }
  });
}

/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendData": () => (/* binding */ sendData)
/* harmony export */ });
function sendData() {
  var form = document.forms.popup;
  var popup = document.querySelector('.popup');

  function validateInputs(elements) {
    elements.addEventListener('input', function (e) {
      if (e.target.value !== '') {
        elements.classList.add('valid');
      } else if (e.target.value === '') {
        elements.classList.remove('valid');
      }
    });
  }

  validateInputs(form.elements.name);
  validateInputs(form.elements.phone);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var obj = {
      name: form.name.value,
      phone: form.phone.value,
      address: form.address.value
    };
    console.log(obj);
    form.elements.name.value = '';
    form.elements.name.classList.remove('valid');
    form.elements.phone.value = '';
    form.elements.phone.classList.remove('valid');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
    var message = document.querySelector('.message');
    message.innerHTML = 'Заявка отправлена!';
    message.classList.add('active');
    setInterval(function () {
      message.classList.remove('active');
    }, 5000);
  });
}

/***/ }),

/***/ "./src/js/components/inputMask.js":
/*!****************************************!*\
  !*** ./src/js/components/inputMask.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputMask": () => (/* binding */ inputMask)
/* harmony export */ });
function inputMask() {
  new Array().forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = '+7 (___) ___ ____',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, ''),
          new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = new_value.indexOf('_');

      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }

      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return '\\d{1,' + a.length + '}';
      }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == 'blur' && this.value.length < 5) this.value = '';
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
}

/***/ }),

/***/ "./src/js/components/lazy.js":
/*!***********************************!*\
  !*** ./src/js/components/lazy.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);

var lazyLoadInstance = new (vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default())({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lazyLoadInstance);

/***/ }),

/***/ "./src/js/components/popupRegister.js":
/*!********************************************!*\
  !*** ./src/js/components/popupRegister.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupRegister": () => (/* binding */ popupRegister)
/* harmony export */ });
function popupRegister() {
  var orderBtns = document.querySelectorAll('.order');
  var popup = document.querySelector('.popup');
  orderBtns.forEach(function (item) {
    item.addEventListener('click', function () {
      if (popup.classList.contains('active')) {
        popup.classList.remove('active');
      } else {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup__overlay')) {
          popup.classList.remove('active');
          document.body.style.overflow = 'auto';
        } else if (e.target.classList.contains('popup__close')) {
          popup.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    });
  });
}

/***/ }),

/***/ "./src/js/components/scrollHeader.js":
/*!*******************************************!*\
  !*** ./src/js/components/scrollHeader.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollHeader": () => (/* binding */ scrollHeader)
/* harmony export */ });
var scrollHeader = function scrollHeader() {
  var header = document.querySelector('.header');
  var prevScroll = window.pageYOffset;

  if (prevScroll <= 0) {
    header.classList.add('header-in-hero', 'header-hidden');
  }

  document.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;

    if (currentScroll > 150 && currentScroll > prevScroll) {
      header.classList.add('header-in-hero', 'header-hidden');
    } else {
      header.classList.remove('header-in-hero', 'header-hidden');
    }

    if (currentScroll < 150) {
      header.classList.add('header-in-hero', 'header-hidden');
    }

    prevScroll = currentScroll;
  });
};

/***/ }),

/***/ "./src/js/components/showPriceInfo.js":
/*!********************************************!*\
  !*** ./src/js/components/showPriceInfo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showPriceInfo": () => (/* binding */ showPriceInfo)
/* harmony export */ });
function showPriceInfo() {
  var priceItems = document.querySelectorAll('.price__item');
  var priceImage = document.querySelector('.price__img');

  function changeExtension(item) {
    var newItem = item.getAttribute('data-img').split('.');
    newItem[1] = 'webp';
    return newItem.join('.');
  }

  priceItems.forEach(function (item) {
    item.addEventListener('click', function () {
      priceItems.forEach(function (i) {
        if (i.classList.contains('active')) i.classList.remove('active');
      });
      item.classList.add('active');
      document.querySelector('.description__title').innerHTML = item.getAttribute('data-title');
      document.querySelector('.description__text').innerHTML = item.getAttribute('data-text');
      priceImage.children[1].setAttribute('src', item.getAttribute('data-img'));
      priceImage.children[0].setAttribute('srcset', changeExtension(item));
    });
  });
}

/***/ }),

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/***/ (() => {

// import Swiper from 'swiper'
// function interiorSlider() {
//   const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   })
// }
// export default interiorSlider

/***/ }),

/***/ "./src/js/components/yMap.js":
/*!***********************************!*\
  !*** ./src/js/components/yMap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadYandeMap": () => (/* binding */ loadYandeMap)
/* harmony export */ });
function loadYandeMap() {
  var src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A194a616205bb3b02853d64f0f892b5dce840a29fdcebdd0d4862e684c356b896&amp;width=100%25&amp;height=650&amp;lang=ru_RU&amp;scroll=true\"></script>";
  var observer = new IntersectionObserver(trueCallback);
  var target = document.querySelector('.contacts__map');
  observer.observe(target);

  function trueCallback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var script = document.createElement('script');
        script.setAttribute('src', src);
        entry.target.append(script);
        observer.disconnect();
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t(e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})("undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof window?window:this,(function(M){"use strict";var q={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},I=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},F=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},L=function(e){return e?(t=e,parseInt(M.getComputedStyle(t).height,10)+e.offsetTop):0;var t},x=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),M.scrollTo(0,t))},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof M.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var b,a,A,O,C={};C.cancelScroll=function(e){cancelAnimationFrame(O),O=null,e||H("scrollCancel",b)},C.animateScroll=function(a,r,e){C.cancelScroll();var i=I(b||q,e||{}),c="[object Number]"===Object.prototype.toString.call(a),t=c||!a.tagName?null:a;if(c||t){var s=M.pageYOffset;i.header&&!A&&(A=document.querySelector(i.header));var n,o,u,l,m,d,f,h,p=L(A),g=c?a:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,F()-M.innerHeight)),a})(t,p,parseInt("function"==typeof i.offset?i.offset(a,r):i.offset,10),i.clip),y=g-s,v=F(),w=0,S=(n=y,u=(o=i).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&u>o.durationMax?o.durationMax:o.durationMin&&u<o.durationMin?o.durationMin:parseInt(u,10)),E=function(e){var t,n,o;l||(l=e),w+=e-l,d=s+y*(n=m=1<(m=0===S?0:w/S)?1:m,"easeInQuad"===(t=i).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),M.scrollTo(0,Math.floor(d)),(function(e,t){var n=M.pageYOffset;if(e==t||n==t||(s<t&&M.innerHeight+n)>=v)return C.cancelScroll(!0),x(a,t,c),H("scrollStop",i,a,r),!(O=l=null)})(d,g)||(O=M.requestAnimationFrame(E),l=e)};0===M.pageYOffset&&M.scrollTo(0,0),f=a,h=i,c||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in M&&M.matchMedia("(prefers-reduced-motion)").matches?x(a,Math.floor(g),!1):(H("scrollStart",i,a,r),C.cancelScroll(!0),M.requestAnimationFrame(E))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(b.ignore)&&a.hostname===M.location.hostname&&a.pathname===M.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!b.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=M.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||M.pageYOffset},document.title,t||M.location.href)}})(b),C.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(b)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||C.animateScroll(t,null,{updateURL:!1})}};C.destroy=function(){b&&(document.removeEventListener("click",t,!1),M.removeEventListener("popstate",n,!1),C.cancelScroll(),O=A=a=b=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in M&&"requestAnimationFrame"in M&&"closest"in M.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";C.destroy(),b=I(q,e||{}),A=b.header?document.querySelector(b.header):null,document.addEventListener("click",t,!1),b.updateURL&&b.popstate&&M.addEventListener("popstate",n,!1)})(),C}}));

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),o=t&&"IntersectionObserver"in window,i=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},u=function(n,t){var e,o="LazyLoad::Initialized",i=new n(t);try{e=new CustomEvent(o,{detail:{instance:i}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:i})}window.dispatchEvent(e)},l="src",s="srcset",f="sizes",d="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",p="applied",m="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},A=function(n,t){return function(n,t,e){var o="data-ll-status";null!==e?n.setAttribute(o,e):n.removeAttribute(o)}(n,0,t)},w=function(n){return A(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,p,m],C=function(n,t,e,o){n&&(void 0===o?void 0===e?n(t):n(t,e):n(t,e,o))},N=function(n,t){i?n.classList.add(t):n.className+=(n.className?" ":"")+t},M=function(n,t){i?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],o=0;t=n.children[o];o+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},V=function(n,t){j(n).forEach(t)},F=[l],B=[l,d],J=[l,s,f],P=[g],S=function(n){return!!n[_]},U=function(n){return n[_]},$=function(n){return delete n[_]},q=function(n,t){if(!S(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},H=function(n,t){if(S(n)){var e=U(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),A(n,p),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),A(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,f,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,l,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){q(n,J),X(n,t)})),q(n,J),X(n,t)},IFRAME:function(n,t){q(n,F),W(n,l,y(n,t.data_src))},VIDEO:function(n,t){V(n,(function(n){q(n,F),W(n,l,y(n,t.data_src))})),q(n,B),W(n,d,y(n,t.data_poster)),W(n,l,y(n,t.data_src)),n.load()},OBJECT:function(n,t){q(n,P),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var o=t[e];en(n,e,o)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var o=z(n)||n;on(o)||function(n,t,e){on(n)||(n.llEvLisnrs={});var o="VIDEO"===n.tagName?"loadeddata":"load";tn(n,o,t),tn(n,"error",e)}(o,(function(i){!function(n,t,e,o){var i=O(t);rn(t,e,o),N(t,e.class_loaded),A(t,b),C(e.callback_loaded,t,o),i||nn(e,o)}(0,n,t,e),an(o)}),(function(i){!function(n,t,e,o){var i=O(t);rn(t,e,o),N(t,e.class_error),A(t,m),C(e.callback_error,t,o),e.restore_on_error&&H(t,J),i||nn(e,o)}(0,n,t,e),an(o)}))},un=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){S(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var o=y(n,t.data_bg),i=y(n,t.data_bg_hidpi),r=a&&i?i:o;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(l,r),Q(n,t,e))}(n,t,e),function(n,t,e){var o=y(n,t.data_bg_multi),i=y(n,t.data_bg_multi_hidpi),r=a&&i?i:o;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var o=y(n,t.data_bg_set);if(o){var i=o.split("|"),a=i.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=i.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var o=Y[n.tagName];o&&(o(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},ln=function(n){n.removeAttribute(l),n.removeAttribute(s),n.removeAttribute(f)},sn=function(n){D(n,(function(n){H(n,J)})),H(n,J)},fn={IMG:sn,IFRAME:function(n){H(n,F)},VIDEO:function(n){V(n,(function(n){H(n,F)})),H(n,B),n.load()},OBJECT:function(n){H(n,P)}},dn=function(n,t){(function(n){var t=fn[n.tagName];t?t(n):function(n){if(S(n)){var t=U(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),w(n),$(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,o){var i=function(n){return x.indexOf(k(n))>=0}(n);A(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,o),C(e.callback_enter,n,t,o),i||un(n,e,o)}(n.target,n,t,e):function(n,t,e,o){L(n)||(N(n,e.class_exited),function(n,t,e,o){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){ln(n)})),ln(n)}(n),sn(n),M(n,e.class_loading),R(o,-1),w(n),C(e.callback_cancel,n,t,o))}(n,t,e,o),C(e.callback_exit,n,t,o))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},pn=function(n){return n.container.querySelectorAll(n.elements_selector)},mn=function(n){return function(n){return k(n)===m}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||pn(t))},En=function(n,e){var i=c(n);this._settings=i,this.loadingCount=0,function(n,t){o&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(i,this),function(n,e){t&&window.addEventListener("online",(function(){!function(n,t){var e;(e=pn(n),bn(e).filter(mn)).forEach((function(t){M(t,n.class_error),w(t)})),t.update()}(n,e)}))}(i,this),this.update(e)};return En.prototype={update:function(n){var t,i,a=this._settings,r=hn(n,a);G(this,r.length),!e&&o?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),A(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(i=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,i)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),pn(this._settings).forEach((function(n){$(n)})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),un(n,e,t)}))},restoreAll:function(){var n=this._settings;pn(n).forEach((function(t){dn(t,n)}))}},En.load=function(n,t){var e=c(t);un(n,e)},En.resetStatus=function(n){w(n)},t&&function(n,t){if(t)if(t.length)for(var e,o=0;e=t[o];o+=1)u(n,e);else u(n,t)}(En,window.lazyLoadOptions),En}));


/***/ }),

/***/ "./node_modules/wow.js/dist/wow.js":
/*!*****************************************!*\
  !*** ./node_modules/wow.js/dist/wow.js ***!
  \*****************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _class, _temp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function isIn(needle, haystack) {
    return haystack.indexOf(needle) >= 0;
  }

  function extend(custom, defaults) {
    for (var key in defaults) {
      if (custom[key] == null) {
        var value = defaults[key];
        custom[key] = value;
      }
    }
    return custom;
  }

  function isMobile(agent) {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
    );
  }

  function createEvent(event) {
    var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

    var customEvent = void 0;
    if (document.createEvent != null) {
      // W3C DOM
      customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(event, bubble, cancel, detail);
    } else if (document.createEventObject != null) {
      // IE DOM < 9
      customEvent = document.createEventObject();
      customEvent.eventType = event;
    } else {
      customEvent.eventName = event;
    }

    return customEvent;
  }

  function emitEvent(elem, event) {
    if (elem.dispatchEvent != null) {
      // W3C DOM
      elem.dispatchEvent(event);
    } else if (event in (elem != null)) {
      elem[event]();
    } else if ('on' + event in (elem != null)) {
      elem['on' + event]();
    }
  }

  function addEvent(elem, event, fn) {
    if (elem.addEventListener != null) {
      // W3C DOM
      elem.addEventListener(event, fn, false);
    } else if (elem.attachEvent != null) {
      // IE DOM
      elem.attachEvent('on' + event, fn);
    } else {
      // fallback
      elem[event] = fn;
    }
  }

  function removeEvent(elem, event, fn) {
    if (elem.removeEventListener != null) {
      // W3C DOM
      elem.removeEventListener(event, fn, false);
    } else if (elem.detachEvent != null) {
      // IE DOM
      elem.detachEvent('on' + event, fn);
    } else {
      // fallback
      delete elem[event];
    }
  }

  function getInnerHeight() {
    if ('innerHeight' in window) {
      return window.innerHeight;
    }

    return document.documentElement.clientHeight;
  }

  // Minimalistic WeakMap shim, just in case.
  var WeakMap = window.WeakMap || window.MozWeakMap || function () {
    function WeakMap() {
      _classCallCheck(this, WeakMap);

      this.keys = [];
      this.values = [];
    }

    _createClass(WeakMap, [{
      key: 'get',
      value: function get(key) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];
          if (item === key) {
            return this.values[i];
          }
        }
        return undefined;
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];
          if (item === key) {
            this.values[i] = value;
            return this;
          }
        }
        this.keys.push(key);
        this.values.push(value);
        return this;
      }
    }]);

    return WeakMap;
  }();

  // Dummy MutationObserver, to avoid raising exceptions.
  var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
    function MutationObserver() {
      _classCallCheck(this, MutationObserver);

      if (typeof console !== 'undefined' && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    _createClass(MutationObserver, [{
      key: 'observe',
      value: function observe() {}
    }]);

    return MutationObserver;
  }(), _class.notSupported = true, _temp);

  // getComputedStyle shim, from http://stackoverflow.com/a/21797294
  var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
    var getComputedStyleRX = /(\-([a-z]){1})/g;
    return {
      getPropertyValue: function getPropertyValue(prop) {
        if (prop === 'float') {
          prop = 'styleFloat';
        }
        if (getComputedStyleRX.test(prop)) {
          prop.replace(getComputedStyleRX, function (_, _char) {
            return _char.toUpperCase();
          });
        }
        var currentStyle = el.currentStyle;

        return (currentStyle != null ? currentStyle[prop] : void 0) || null;
      }
    };
  };

  var WOW = function () {
    function WOW() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, WOW);

      this.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: null,
        scrollContainer: null
      };

      this.animate = function animateFactory() {
        if ('requestAnimationFrame' in window) {
          return function (callback) {
            return window.requestAnimationFrame(callback);
          };
        }
        return function (callback) {
          return callback();
        };
      }();

      this.vendors = ['moz', 'webkit'];

      this.start = this.start.bind(this);
      this.resetAnimation = this.resetAnimation.bind(this);
      this.scrollHandler = this.scrollHandler.bind(this);
      this.scrollCallback = this.scrollCallback.bind(this);
      this.scrolled = true;
      this.config = extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      // Map of elements to animation names:
      this.animationNameCache = new WeakMap();
      this.wowEvent = createEvent(this.config.boxClass);
    }

    _createClass(WOW, [{
      key: 'init',
      value: function init() {
        this.element = window.document.documentElement;
        if (isIn(document.readyState, ['interactive', 'complete'])) {
          this.start();
        } else {
          addEvent(document, 'DOMContentLoaded', this.start);
        }
        this.finished = [];
      }
    }, {
      key: 'start',
      value: function start() {
        var _this = this;

        this.stopped = false;
        this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
        this.all = this.boxes.slice(0);
        if (this.boxes.length) {
          if (this.disabled()) {
            this.resetStyle();
          } else {
            for (var i = 0; i < this.boxes.length; i++) {
              var box = this.boxes[i];
              this.applyStyle(box, true);
            }
          }
        }
        if (!this.disabled()) {
          addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
          addEvent(window, 'resize', this.scrollHandler);
          this.interval = setInterval(this.scrollCallback, 50);
        }
        if (this.config.live) {
          var mut = new MutationObserver(function (records) {
            for (var j = 0; j < records.length; j++) {
              var record = records[j];
              for (var k = 0; k < record.addedNodes.length; k++) {
                var node = record.addedNodes[k];
                _this.doSync(node);
              }
            }
            return undefined;
          });
          mut.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
      }
    }, {
      key: 'stop',
      value: function stop() {
        this.stopped = true;
        removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        removeEvent(window, 'resize', this.scrollHandler);
        if (this.interval != null) {
          clearInterval(this.interval);
        }
      }
    }, {
      key: 'sync',
      value: function sync() {
        if (MutationObserver.notSupported) {
          this.doSync(this.element);
        }
      }
    }, {
      key: 'doSync',
      value: function doSync(element) {
        if (typeof element === 'undefined' || element === null) {
          element = this.element;
        }
        if (element.nodeType !== 1) {
          return;
        }
        element = element.parentNode || element;
        var iterable = element.querySelectorAll('.' + this.config.boxClass);
        for (var i = 0; i < iterable.length; i++) {
          var box = iterable[i];
          if (!isIn(box, this.all)) {
            this.boxes.push(box);
            this.all.push(box);
            if (this.stopped || this.disabled()) {
              this.resetStyle();
            } else {
              this.applyStyle(box, true);
            }
            this.scrolled = true;
          }
        }
      }
    }, {
      key: 'show',
      value: function show(box) {
        this.applyStyle(box);
        box.className = box.className + ' ' + this.config.animateClass;
        if (this.config.callback != null) {
          this.config.callback(box);
        }
        emitEvent(box, this.wowEvent);

        addEvent(box, 'animationend', this.resetAnimation);
        addEvent(box, 'oanimationend', this.resetAnimation);
        addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
        addEvent(box, 'MSAnimationEnd', this.resetAnimation);

        return box;
      }
    }, {
      key: 'applyStyle',
      value: function applyStyle(box, hidden) {
        var _this2 = this;

        var duration = box.getAttribute('data-wow-duration');
        var delay = box.getAttribute('data-wow-delay');
        var iteration = box.getAttribute('data-wow-iteration');

        return this.animate(function () {
          return _this2.customStyle(box, hidden, duration, delay, iteration);
        });
      }
    }, {
      key: 'resetStyle',
      value: function resetStyle() {
        for (var i = 0; i < this.boxes.length; i++) {
          var box = this.boxes[i];
          box.style.visibility = 'visible';
        }
        return undefined;
      }
    }, {
      key: 'resetAnimation',
      value: function resetAnimation(event) {
        if (event.type.toLowerCase().indexOf('animationend') >= 0) {
          var target = event.target || event.srcElement;
          target.className = target.className.replace(this.config.animateClass, '').trim();
        }
      }
    }, {
      key: 'customStyle',
      value: function customStyle(box, hidden, duration, delay, iteration) {
        if (hidden) {
          this.cacheAnimationName(box);
        }
        box.style.visibility = hidden ? 'hidden' : 'visible';

        if (duration) {
          this.vendorSet(box.style, { animationDuration: duration });
        }
        if (delay) {
          this.vendorSet(box.style, { animationDelay: delay });
        }
        if (iteration) {
          this.vendorSet(box.style, { animationIterationCount: iteration });
        }
        this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });

        return box;
      }
    }, {
      key: 'vendorSet',
      value: function vendorSet(elem, properties) {
        for (var name in properties) {
          if (properties.hasOwnProperty(name)) {
            var value = properties[name];
            elem['' + name] = value;
            for (var i = 0; i < this.vendors.length; i++) {
              var vendor = this.vendors[i];
              elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
            }
          }
        }
      }
    }, {
      key: 'vendorCSS',
      value: function vendorCSS(elem, property) {
        var style = getComputedStyle(elem);
        var result = style.getPropertyCSSValue(property);
        for (var i = 0; i < this.vendors.length; i++) {
          var vendor = this.vendors[i];
          result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
        }
        return result;
      }
    }, {
      key: 'animationName',
      value: function animationName(box) {
        var aName = void 0;
        try {
          aName = this.vendorCSS(box, 'animation-name').cssText;
        } catch (error) {
          // Opera, fall back to plain property value
          aName = getComputedStyle(box).getPropertyValue('animation-name');
        }

        if (aName === 'none') {
          return ''; // SVG/Firefox, unable to get animation name?
        }

        return aName;
      }
    }, {
      key: 'cacheAnimationName',
      value: function cacheAnimationName(box) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
        // box.dataset is not supported for SVG elements in Firefox
        return this.animationNameCache.set(box, this.animationName(box));
      }
    }, {
      key: 'cachedAnimationName',
      value: function cachedAnimationName(box) {
        return this.animationNameCache.get(box);
      }
    }, {
      key: 'scrollHandler',
      value: function scrollHandler() {
        this.scrolled = true;
      }
    }, {
      key: 'scrollCallback',
      value: function scrollCallback() {
        if (this.scrolled) {
          this.scrolled = false;
          var results = [];
          for (var i = 0; i < this.boxes.length; i++) {
            var box = this.boxes[i];
            if (box) {
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }
              results.push(box);
            }
          }
          this.boxes = results;
          if (!this.boxes.length && !this.config.live) {
            this.stop();
          }
        }
      }
    }, {
      key: 'offsetTop',
      value: function offsetTop(element) {
        // SVG elements don't have an offsetTop in Firefox.
        // This will use their nearest parent that has an offsetTop.
        // Also, using ('offsetTop' of element) causes an exception in Firefox.
        while (element.offsetTop === undefined) {
          element = element.parentNode;
        }
        var top = element.offsetTop;
        while (element.offsetParent) {
          element = element.offsetParent;
          top += element.offsetTop;
        }
        return top;
      }
    }, {
      key: 'isVisible',
      value: function isVisible(box) {
        var offset = box.getAttribute('data-wow-offset') || this.config.offset;
        var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
        var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
        var top = this.offsetTop(box);
        var bottom = top + box.clientHeight;

        return top <= viewBottom && bottom >= viewTop;
      }
    }, {
      key: 'disabled',
      value: function disabled() {
        return !this.config.mobile && isMobile(navigator.userAgent);
      }
    }]);

    return WOW;
  }();

  exports.default = WOW;
  module.exports = exports['default'];
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/lazy */ "./src/js/components/lazy.js");
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wow.js */ "./node_modules/wow.js/dist/wow.js");
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wow_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_scrollHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scrollHeader */ "./src/js/components/scrollHeader.js");
/* harmony import */ var _components_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/burgerMenu */ "./src/js/components/burgerMenu.js");
/* harmony import */ var _components_chooseAddress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chooseAddress */ "./src/js/components/chooseAddress.js");
/* harmony import */ var _components_countNumbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/countNumbers */ "./src/js/components/countNumbers.js");
/* harmony import */ var _components_popupRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/popupRegister */ "./src/js/components/popupRegister.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form */ "./src/js/components/form.js");
/* harmony import */ var _components_inputMask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inputMask */ "./src/js/components/inputMask.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sliders */ "./src/js/components/sliders.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_sliders__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_showPriceInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/showPriceInfo */ "./src/js/components/showPriceInfo.js");
/* harmony import */ var _components_yMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/yMap */ "./src/js/components/yMap.js");













document.addEventListener('DOMContentLoaded', function () {
  var scroll = new (smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default())('*[href*="#"]');
  _components_lazy__WEBPACK_IMPORTED_MODULE_0__["default"].update();
  new (wow_js__WEBPACK_IMPORTED_MODULE_1___default())().init();
  (0,_components_burgerMenu__WEBPACK_IMPORTED_MODULE_4__.burgerMenu)();
  (0,_components_chooseAddress__WEBPACK_IMPORTED_MODULE_5__.chooseAddress)();
  (0,_components_inputMask__WEBPACK_IMPORTED_MODULE_9__.inputMask)();
  (0,_components_countNumbers__WEBPACK_IMPORTED_MODULE_6__.countNumbers)();
  (0,_components_scrollHeader__WEBPACK_IMPORTED_MODULE_3__.scrollHeader)();
  (0,_components_popupRegister__WEBPACK_IMPORTED_MODULE_7__.popupRegister)();
  (0,_components_form__WEBPACK_IMPORTED_MODULE_8__.sendData)(); // interiorSlider()

  (0,_components_showPriceInfo__WEBPACK_IMPORTED_MODULE_11__.showPriceInfo)();
  (0,_components_yMap__WEBPACK_IMPORTED_MODULE_12__.loadYandeMap)();
  window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader_hidden');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map