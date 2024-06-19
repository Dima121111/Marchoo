$(function () {
  $('.products__select').styler();

});

const button = document.querySelectorAll('[data-tab]')

button.forEach(function (item) {
  item.addEventListener('click', function () {
    this.dataset.tab
    const contentBox = document.querySelector('#' + this.dataset.tab)
    contentBox.classList.toggle('hidden')

  })
});


$(".stars").rateYo({
  numStars: 5,
  starWidth: "17px",
  normalFill: "#ccccce",
  ratedFill: "#ffc35b",
  readOnly: true,
})

const plus = document.querySelector('[data-plus]')
const number = document.querySelector('[data-number]')
const minus = document.querySelector('[data-minus]')

plus.addEventListener('click', function () {
  number.innerText = ++number.innerText

})



minus.addEventListener('click', function () {
  number.innerText = --number.innerText;
  if (parseInt(number.innerText) < 0) {
    number.innerText = ++number.innerText
  }
})

const { event } = require("jquery");

$(function () {
  $('.header-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
  });
})



$('.products__button').on('click', function () {
  $('.products__button').removeClass('products__button--active')
  $(this).addClass('products__button--active')
})

$('[button-row]').on('click', function () {
  $('.card').addClass('active')
})

$('[button-column]').on('click', function () {
  $('.card').removeClass('active')
})

$(".price__input").ionRangeSlider({
  onStart: function (data) {
    $('.price__min').text(data.from),
      $('.price__max').text(data.to);
  },
  onChange: function (data) {
    $('.price__min').text(data.from),
      $('.price__max').text(data.to);
  },
});




function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__wrap');
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__wrap').attr('data-time');
initializeClock('promo__wrap', deadline);

