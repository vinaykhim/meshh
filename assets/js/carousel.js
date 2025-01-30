
$(document).ready(function () {
  $('.slick-carousel').slick({
    arrows: false, 
    dots: false, 
    infinite: true, 
    speed: 1000, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    cssEase: 'ease-in-out', 
    slidesToShow: 2, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1330, 
        settings: {
          slidesToShow: 1, 
        },
      },
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  });
});