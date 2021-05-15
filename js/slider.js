$('#slider-menu').slick({
  infinite: false,
  draggable: false,
  slidesToShow: 4,
  variableWidth: false,
  adaptiveHeight: false,
  slidesToScroll: 1,
  initialSlide: 3,

  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 408,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
})


$('#slider-review').slick({
  arrows: false,
  infinite: true,
  draggable: true,
  slidesToShow: 4,
  variableWidth: false,
  adaptiveHeight: false,
  slidesToScroll: 1,
  initialSlide: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true, 
  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 408,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
})