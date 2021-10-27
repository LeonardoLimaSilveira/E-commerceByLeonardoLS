var mainImg = $('.mainImg')
var slideImg = $('.main-slide-img')
var increment = 1
const srcImg = document.querySelector('.main-slide-img').src
$('[data-thumb=1]').click(function () {
  $(mainImg).attr('src', 'images/image-product-1.jpg')
})
$('[data-thumb=2]').click(function () {
  $(mainImg).attr('src', 'images/image-product-2.jpg')
})
$('[data-thumb=3]').click(function () {
  $(mainImg).attr('src', 'images/image-product-3.jpg')
})
$('[data-thumb=4]').click(function () {
  $(mainImg).attr('src', 'images/image-product-4.jpg')
})

$('.plus').click(function (e) {
  increment++
  $('.qt').text(increment)
})

$('.minus').click(function (e) {
  if ($('.qt').text() > 0) {
    $('.qt').text(increment--)
  }
})

$('[data-slide=1]').click(function () {
  $(slideImg).attr('src', 'images/image-product-1.jpg')
})
$('[data-slide=2]').click(function () {
  $(slideImg).attr('src', 'images/image-product-2.jpg')
})
$('[data-slide=3]').click(function () {
  $(slideImg).attr('src', 'images/image-product-3.jpg')
})
$('[data-slide=4]').click(function () {
  $(slideImg).attr('src', 'images/image-product-4.jpg')
})

$(mainImg).click(function () {
  if (window.outerWidth > 768) {
    document.querySelector('.main-slide-img').src ===
      document.querySelector('.mainImg').src
    $('.slide').show()
  }
})

$('.slide').on('click', close)

function close(e) {
  e.preventDefault()
  if (e.target === this) {
    $('.slide').hide()
  }
}
$('.arrow-right').click(function () {
  increment++
  if (increment > 4) {
    increment = 1
  }
  document.querySelector(
    '.main-slide-img'
  ).src = `./images/image-product-${increment}.jpg`
})
$('.arrow-left').click(function () {
  if (increment <= 1) {
    increment = 5
  }
  increment--
  document.querySelector(
    '.main-slide-img'
  ).src = `./images/image-product-${increment}.jpg`
})

$('.close-x').click(function () {
  $('.slide').hide()
})
$('[data-cart="svg"]').click(function () {
  $('.cart-items').toggleClass('hide')
})

$('.add-item').click(function () {
  if ($('.qt').text() > 0) {
    $('.cart-items').removeClass('hide')
    $('.cart-items-empty').hide()
    $('.cart-items-empty').css('visibility', 'hidden')
    $('.cart-items-content').removeClass('notShow')
    $('[data-icon="delete"]').removeClass('notShow')
    $('.checkout').removeClass('notShow')

    document.querySelector('.cart-item-img img').src =
      document.querySelector('.mainImg').src

    $('#name-item').text($('.desc h1').text())
    $('.cart-item-price').text($('.price h3').text().replace(' ', ''))
    $('#cart-qt').text('x ' + $('.qt').text())
    $('.cart-icon span').text($('#cart-qt').text().replace('x ', ''))
    $('.cart-icon span').css('opacity', 1)
    const justText = +document
      .querySelector('#cart-qt')
      .innerHTML.replace('x ', '')
    const priceNumber = +document
      .querySelector('.price h3')
      .innerHTML.replace('$ ', '')
    const total = justText * priceNumber
    document.querySelector('#cart-total').innerHTML = `$${total}.00`
  }
})

$('[data-icon="delete"]').click(function () {
  $('.cart-items-empty').show()
  $('.cart-items-empty').css('visibility', 'visible')
  $('.cart-items-content').addClass('notShow')
  $('[data-icon="delete"]').addClass('notShow')
  $('.checkout').addClass('notShow')

  document.querySelector('.cart-item-img img').src = ''

  $('#name-item').text('')
  $('.cart-item-price').text('')
  $('#cart-qt').text('')
  document.querySelector('#cart-total').innerHTML = ''
  $('.cart-icon span').text(' ')
  $('.cart-icon span').css('opacity', 0)
})

$('.menu-mobile').click(function () {
  $('nav').addClass('show')
})
$('[data-icon="close"]').click(function () {
  $('nav').removeClass('show')
})
$('.arrow-right-mobile').click(function () {
  increment++
  if (increment > 4) {
    increment = 1
  }
  document.querySelector(
    '.mainImg'
  ).src = `./images/image-product-${increment}.jpg`
})
$('.arrow-left-mobile').click(function () {
  if (increment <= 1) {
    increment = 5
  }
  increment--
  document.querySelector(
    '.mainImg'
  ).src = `./images/image-product-${increment}.jpg`
})
