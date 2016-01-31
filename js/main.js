$(document).ready(function() {
	$("#navbar li a[href^='#'], #gohome a[href^='#']").on('click', function(e) {

		var hash = this.hash;

		e.preventDefault();
	  
		$('html, body').animate({
		    scrollTop: $(hash).offset().top -50
		  }, 400, function() {
	    window.location.hash = hash;
	  	});
	});

	$("#mycarousel").carousel({interval: 5000});
}); 