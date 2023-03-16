$(document).ready(function() {
		$('.menu__link').click(function(event) {
			$(this).toggleClass('active').next().slideToggle(0);
		});
	console.log($(window).width());
	$('.header__burger').click(function(event) {
		$('.header__burger').addClass('active');
		$(".menu").addClass('active');
		$("body").addClass('overflow-hidden');
	});
	
	$('.menu__close').click(function(event) {
		$('.header__burger').removeClass('active');
		$(".menu").removeClass('active');
		$("body").removeClass('overflow-hidden');
	});
	$('.menu__overlay').click(function(event) {
		$('.header__burger').removeClass('active');
		$(".menu").removeClass('active');
		$("body").removeClass('overflow-hidden');
	});
	
	
	$('.header__search').click(function(event) {
		$('.search-header').addClass('active');
	});
	$('.search-header__close').click(function(event) {
		$('.search-header').removeClass('active');
	});
	
	$('.btn-header__text').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(0);
	});


	var lastScroll = 0;
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > lastScroll) {
			$(".header").addClass("header-active");
		} else {
			$(".header").removeClass("header-active");
		}
		lastScroll = scroll;
		
		if(scroll > 100){
			$('.header').addClass('header-active-border');
		} else{
			$('.header').removeClass('header-active-border');
		}
	});
	
/* 	if ($(window).width() < 1100) {
		
		var header__menu = $('.header__menu.menu');
		header__menu.css({'height':'100vh'})
		$( window ).resize(function() {
			var header__menu = $('.header__menu');
			header__menu.css({'height':'100vh'})
		});
	} */


        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      // We listen to the resize event
      window.addEventListener('resize', () => {
      // We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
}); 

