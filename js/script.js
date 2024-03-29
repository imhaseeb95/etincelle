'use strict';

// ===============
// 	slider
// ===============

$('.sweets-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		// {
		// 	breakpoint: 480,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 	},
		// },
	],
});

$('.testimonial-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

// ===============
// 	Popup form
// ===============

$('#place-order').click(function(){
    $('.overlay').fadeIn();
    $('body').addClass('bodyOverflow')
  })
  $('.closBtn').click(function(){
    $('.overlay').fadeOut();
    $('body').removeClass('bodyOverflow')
  })


// ===============
// 	Fancy Box
// ===============

Fancybox.bind('[data-fancybox]');

// ===============
// 	Accordian
// ===============

const accordian = document.querySelectorAll('.contentBx');

for (let i = 0; i < accordian.length; i++) {
	accordian[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}

// ===============
// 	Header
// ===============

var navBar = document.querySelector("header");
// var headerScroll = document.querySelector("header.sec-header");
var headerY = 50;

window.addEventListener("scroll", function () {
  var haederTop = window.scrollY;
  if (haederTop > headerY) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
});


// ====================
// 	Small scren Menu
// ====================

var menuBar = document.querySelector(".menu-bars");
var showMenu = document.querySelector("nav ul");
var closeMenu = document.querySelector(".close");
var headerOverlay = document.querySelector('.header-overlay')

menuBar.addEventListener("click", ()=>{
	showMenu.classList.add("active");
	headerOverlay.classList.add("active");
})

closeMenu.addEventListener("click", ()=>{
	showMenu.classList.remove("active");
	headerOverlay.classList.remove("active");
})

headerOverlay.addEventListener("click", ()=>{
	showMenu.classList.remove("active");
	headerOverlay.classList.remove("active");
})





// ========================
// 	Home counter Scroll
// ========================

const counters = document.querySelectorAll('.count');
const speed = 5;



var counterHeight = document.querySelector('.products');
var heightCounter = 1940;
//counterHeight.offsetTop


 window.addEventListener('scroll', function(){
  var scrollTop = window.scrollY 
  
  if(scrollTop > heightCounter){
    counters.forEach(myCounter => {
      myCounter.innerText = '0';
    
      const updateCounter = ()=>{
    
      let myNum = +myCounter.getAttribute('data-target');
      let myTarget = +myCounter.innerText;
    
      let newSpeed = myNum / speed; 
    
      if(myTarget < myNum){
        myCounter.innerText = `${Math.ceil(myTarget + newSpeed)}`;
        setTimeout(updateCounter, 1)
      }else{
        myCounter.innerText = myNum
      }
    }
    updateCounter()
    });
  }

})


// ========================
// 	About counter Scroll
// ========================

const clientsCounter = document.querySelectorAll('.counter')
const speedTime = 20;

let scrollHeight = document.querySelector('.clients-sec');
let scrollTopHeight = 500

window.addEventListener('scroll', function(){
  let topScroll = window.scrollY;
  

  if(topScroll < scrollTopHeight){
    clientsCounter.forEach((element)=>{
      element.innerText = '0';
    
      const updateNum = ()=> {
        let clietNum = +element.getAttribute('data-count');
      let clientTarget = +element.innerText
    
      const numTime =  clietNum / speedTime
    
      if(clietNum > clientTarget){
        element.innerText = `${Math.ceil(clientTarget + numTime)}`
        setTimeout(updateNum, 1)
      }
    }
    updateNum()
    
    })
  }


})


// ========================
// 	Tabers
// ========================

const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content-container");


tabBtn.forEach((tab, index)=>{
	tab.addEventListener("click", ()=>{
		tabBtn.forEach((tab)=>{tab.classList.remove("active")});
		tab.classList.add("active");


		tabContent.forEach((content)=>{content.classList.remove("active")});
		tabContent[index].classList.add("active");
	});
})


var sweetsBtn = document.querySelector(".btn-sweets");
sweetsBtn.addEventListener("click", ()=>{
	showMenu.classList.remove("active");
	headerOverlay.classList.remove("active");
})