'use strict';

// ===============
// 	slider
// ===============

$('.sweets-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow:3,
  slidesToScroll:1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.testimonial-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow:3,
  slidesToScroll:1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// ===============
// 	Fancy Box
// ===============

Fancybox.bind("[data-fancybox]");

// ===============
// 	Accordian
// ===============

const accordian = document.querySelectorAll(".contentBx");

for(let i = 0; i < accordian.length; i++){
  accordian[i].addEventListener("click", function(){
    this.classList.toggle("active");
  })
}