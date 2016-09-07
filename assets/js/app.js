$(document).ready(function() {

		/* Smooth Scroll*/
    $('a[href^="#"]:not([data-toggle=collapse])').click( function() {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-50
        }, 1000);
        return false;
	});



});
