/* -----------------------------------------------------------------------------
File:           Custom Js Functions
Version:        1.0
Last change:    00/00/00 
Author:         HTMLMATE Team
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Genius = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.menuBar();
				this.onePageNav();
				this.quickScroll2();
				this.datePicker();
				this.bannerParalax();
				this.videoPopup();
				this.rateReview();
				this.buttonSlide();
				this.productRange();
				this.searchBAR();
				this.mobileMenu();
				this.countDown();
				this.switchOpen();
				this.quickScroll();
			},


/* - Start of menu bar
================================================*/
menuBar: function (){
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 50) {
			jQuery('.main-menu-container').addClass('menu-bg-overlay')
		} else {
			jQuery('.main-menu-container').removeClass('menu-bg-overlay')
		}
	})

},

onePageNav: function (){
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 20) {
			jQuery('.header_3').addClass('full-width-menu')
		} else {
			jQuery('.header_3').removeClass('full-width-menu')
		}
	})

},
quickScroll2: function (){
	$('.quick-menu').on("click", "a", function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top -65
				}, 1000);
				return false;
			}
		}
	});
},

/* - End of menu bar
================================================*/



/* Start Of Date picker
================================================*/
datePicker: function (){
	$( "#datepicker" ).datepicker();
},
/* - End Start Of Date picker
================================================*/


/* Start Of parallax
================================================*/
bannerParalax: function (){
	$('.jarallax').jarallax({
		speed: 0.5,
	});
},
/* End Of Preloader
================================================*/




/* Start of popup
================================================*/
videoPopup: function (){
	jQuery('.popup-with-zoom-anim').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
},
/* End of popup
================================================*/



/* - Start of faq accordion
================================================*/
rateReview: function (){
	$(':radio').change(function() {
		console.log('New star rating: ' + this.value);
	});

},
/* - End of faq accordion
================================================*/



/* Start Of best product
================================================*/
buttonSlide: function (){
	$('.button-tab').owlCarousel({
		margin:0,
		responsiveClass:true,
		nav: true,
		dots: false,
		autoplay: false,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:2,
			},
			600:{
				items:4,
			},
			700:{
				items:5,
			},
			1000:{
				items:6,

			}
		},
	})
},
/* End Of best product
================================================*/




/* Start Of category slide
================================================*/
productRange: function (){

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 800,
		values: [ 175, 500 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
},
/* End Of  category slide
================================================*/



/* - Start of search bar
================================================*/
searchBAR: function (){
	$('.toggle-overlay').on('click', function() {
		$('.search-body').toggleClass('search-open');
	});

},
/* - End of search bar
================================================*/



mobileMenu: function (){
	jQuery('.mobile-menu nav').meanmenu();
	function slideMenu() {
		var activeState = jQuery('#menu-container .menu-list').hasClass('active');
		jQuery('#menu-container .menu-list').animate({
			left: activeState ? '0%' : '-100%'
		}, 400);
	}
	jQuery('.alt-menu-btn').on ("click" , function(event) {
		event.stopPropagation();
		jQuery('.hamburger-menu').toggleClass('open');
		jQuery('.menu-list').toggleClass('active');
		slideMenu();

		jQuery('body').toggleClass('overflow-hidden');
	});
},



switchOpen: function (){
	$('.color-switcher .open').on("click", function() {
		$('.color-switcher').toggleClass("open-switcher");
	});
},


countDown:  function (){
	if ($('.coming-countdown').length > 0) {
     // Specify the deadline date
     var deadlineDate = new Date('Decembar 21, 2018 23:59:59').getTime();

     // Cache all countdown boxes into consts
     var countdownDays = document.querySelector('.days .number');
     var countdownHours = document.querySelector('.hours .number');
     var countdownMinutes = document.querySelector('.minutes .number');
     var countdownSeconds = document.querySelector('.seconds .number');

     // Update the count down every 1 second (1000 milliseconds)
     setInterval(function () {
       // Get current date and time
       var currentDate = new Date().getTime();

       // Calculate the distance between current date and time and the deadline date and time
       var distance = deadlineDate - currentDate;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

       // Insert the result data into individual countdown boxes
       countdownDays.innerHTML = days;
       countdownHours.innerHTML = hours;
       countdownMinutes.innerHTML = minutes;
       countdownSeconds.innerHTML = seconds;
   }, 1000);
     
 };
},

quickScroll: function (){
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
},



}
}
jQuery(document).ready(function (){
	Genius.init();
});

})();
