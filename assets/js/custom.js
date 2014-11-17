(function($){

	/* ---------------------------------------------- /*
	 * Preloader  
	/* ---------------------------------------------- */ 


	$(window).load(function() { 
		$('.preloader').fadeOut(1000); // set duration in brackets
		console.log("jQuery est prêt !");



	});




	/*$(window).ready(function(){
	     $('.flexslider').flexslider({
	         animation: "slide",
	         slideshow: false,
	         initDelay: '0',
	         useCSS: true,
	         touch: true,
	     });
	 }); */

	$(document).ready(function(){

	 });

	


	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').backstretch(['assets/images/bg.png']);

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		function initFlexModal2() {
		    $('#flex2').flexslider({
			animation: "fade",
			slideshowSpeed: '3000',
			slideshow: true,
			initDelay: '2',
			useCSS: true,
			touch: true,
			pausePlay: true,
			
		    });
		};


		$('#portfolioModal7').on('show.bs.modal', function () {
		   initFlexModal2();
		   console.log("flex est ok");

		})
	

		/* ---------------------------------------------- /*
		 * Slider
		/* ---------------------------------------------- 
		// Can also be used with $(document).ready()
		  $('.flexslider').flexslider({
		    animation: 'slide',
		    slideshow: false,
		    slideshowSpeed: 7000,
		  });*/

	});

})(jQuery);
