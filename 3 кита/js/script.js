$(document).ready(function() {
 
var owl = $('.partners-logos').owlCarousel({
    pagination: false,
      nav: true,
      autoplay: false,
      autoplayTimeout: 200000,
      itemsDesktop: false,
      itemsMobile: false,
      center: false,
      navText: false,
      dots: false,
      loop: true,
      responsive: {
          300 : {
            items: 2
          },
          550 : {
            items: 3
          },
          1100 : {
            items: 4
          },
          1300 : {
            items: 6
          },
          1500 : {
            items: 7
          }
        }
  });
     // При клике по кнопке Влево
  $(this).find('.slider__arrow_prev').on('click', function () {
    // Перематываем карусель назад
    owl.trigger('prev.owl.carousel');
  });

  // При клике по кнопке Вправо
  $(this).find('.slider__arrow_next').on('click', function () {
    // Перематываем карусель вперед
    owl.trigger('next.owl.carousel');
  });

});
