$(function() {
  //main slider
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // //product filter
  // var mixer = mixitup('.product__items');

  // //design filter
  // var mixer2 = mixitup('.new-design__items');

  var containerEl1 = document.querySelector('[data-ref="product"]');
  var containerEl2 = document.querySelector('[data-ref="new-design"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});