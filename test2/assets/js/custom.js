$(document).ready(function(){



	/*============================================
	Page Preloader
	==============================================*/
	
	$(window).load(function(){
		$('#page-loader').fadeOut(500);
	});


	$(document).ready(function() {

	// Initialize collapse button
	  $(".button-collapse").sideNav();

	});
	

	$('.collapsible').collapsible({
	   accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	 });
	       
	$('.scrollspy').scrollSpy();





});
