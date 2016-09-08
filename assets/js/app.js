$(document).ready(function() {

//Init Materialize
    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();


// Smooth Scroll
    $('a[href^="#"]:not(.modal-trigger)').click( function() {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-50
        }, 1000);
        return false;
    });



//Filter Page Products
    $('#filter').find('#showRouge').click(function(){
        $(this).addClass('active');
        $('#filter').find('#showRose, #showBlanc, #showAll').removeClass('active');
        $('#wine').find('#rose, #blanc').addClass('hide');
        $('#wine').find('#rouge1, #rouge2, #rouge3').removeClass('hide');
    });
    $('#filter').find('#showRose').click(function(){
        $(this).addClass('active');
        $('#filter').find('#showRouge, #showBlanc, #showAll').removeClass('active');
        $('#wine').find('#rouge1, #rouge2, #rouge3, #blanc').addClass('hide');
        $('#wine').find('#rose').removeClass('hide');
    });
    $('#filter').find('#showBlanc').click(function(){
        $(this).addClass('active');
        $('#filter').find('#showRose, #showRouge, #showAll').removeClass('active');
        $('#wine').find('#rose, #rouge1, #rouge2, #rouge3').addClass('hide');
        $('#wine').find('#blanc').removeClass('hide');
    });
    $('#filter').find('#showAll').click(function(){
        $(this).addClass('active');
        $('#filter').find('#showRose, #showBlanc, #showRouge').removeClass('active');
        $('#wine').find('#blanc, #rose, #rouge1, #rouge2, #rouge3').removeClass('hide');
    });



//Scroll to top
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});





});
