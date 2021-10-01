$(function() {

  //star ratings in recent products
  $(".recent-products__star").rateYo({
    starWidth: "11px",
    spacing: "9px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  //star ratings in products
  $(".star").rateYo({
    starWidth: "16px",
    spacing: "14px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  //ionRangeSlider in filter price on Shop page
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    step : 0.01,
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },  
  });

  //main slider
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //product filter & design filter

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