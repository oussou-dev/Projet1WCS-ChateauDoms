$(document).ready(function() {



    // Smooth Scroll
        $('a[href^="#"]:not(.modal-trigger, .button-collapse)').click( function() {
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top-63
            }, 1000)
            return false
        })



    //Filter Page Products
        $('#filter').find('#showRouge').click(function(){
            $(this).addClass('active')
            $('#filter').find('#showRose, #showBlanc, #showAll').removeClass('active')
            $('#wine').find('#rose, #blanc').hide( "normal" )
            $('#wine').find('#rouge1, #rouge2, #rouge3').show('normal')
        })
        $('#filter').find('#showRose').click(function(){
            $(this).addClass('active')
            $('#filter').find('#showRouge, #showBlanc, #showAll').removeClass('active')
            $('#wine').find('#rouge1, #rouge2, #rouge3, #blanc').hide( "normal" )
            $('#wine').find('#rose').show('normal')
        })
        $('#filter').find('#showBlanc').click(function(){
            $(this).addClass('active')
            $('#filter').find('#showRose, #showRouge, #showAll').removeClass('active')
            $('#wine').find('#rose, #rouge1, #rouge2, #rouge3').hide( "normal" )
            $('#wine').find('#blanc').show('normal')
        })
        $('#filter').find('#showAll').click(function(){
            $(this).addClass('active')
            $('#filter').find('#showRose, #showBlanc, #showRouge').removeClass('active')
            $('#wine').find('#blanc, #rose, #rouge1, #rouge2, #rouge3').show('normal')
        })


    //Display button scroll to top
    	$(window).scroll(function(){
    		if ($(this).scrollTop() > 100) {
    			$('.scrollToTop').fadeIn()
    		} else {
    			$('.scrollToTop').fadeOut()
    		}
    	})


    // Sticky Navbar on scroll
    	let aboveHeight = $('#index-banner').outerHeight()
	    $(window).scroll(function(){
	    	if ($(window).scrollTop() > aboveHeight){
	    	$('#nav-wrapper').addClass('fixed').css('top','0').next()
            .css('margin-top','64px')
	    	} else {
	    	$('#nav-wrapper').removeClass('fixed').next()
            .css('margin-top','0')
	    	}
		})


})
