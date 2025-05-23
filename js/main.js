$('.burger, .overlay').on('click', function (e) {
  e.preventDefault;
  $('.header__nav').toggleClass('header__nav--open');
  $('.overlay').toggleClass('overlay--show');

})

$('.menu__slider').slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
      },
    }
  ]
});


$('.menu__slider-prev').on('click', function (e) {
  e.preventDefault();
  $('.menu__slider').slick('slickPrev');
})

$('.menu__slider-next').on('click', function (e) {
  e.preventDefault();
  $('.menu__slider').slick('slickNext');
})



$('.feedback__slider').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  dots: true,
});