$(document).ready(function() {

		/* Smooth Scroll*/
    $('a[href^="#"]').click( function() {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-50
        }, 1000);
        return false;
	});

    $('.modal-trigger').leanModal();



        $('#filter').find('#showRouge').on('click', function(){
            $('#wine').find('#rose, #blanc').addClass('hide');
            $('#wine').find('#rouge1, #rouge2, #rouge3').removeClass('hide');
        });
        $('#filter').find('#showRose').on('click', function(){
            $('#wine').find('#rouge1, #rouge2, #rouge3, #blanc').addClass('hide');
            $('#wine').find('#rose').removeClass('hide');
        });
        $('#filter').find('#showBlanc').on('click', function(){
            $('#wine').find('#rose, #rouge1, #rouge2, #rouge3').addClass('hide');
            $('#wine').find('#blanc').removeClass('hide');
        });
        $('#filter').find('#showAll').on('click', function(){
            $('#wine').find('#blanc, #rose, #rouge1, #rouge2, #rouge3').removeClass('hide');
        });



});
