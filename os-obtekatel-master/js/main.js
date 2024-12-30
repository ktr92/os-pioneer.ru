$(document).ready(function() {

    try {
        $('.reviewslider__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: $('.reviewslider__left'),
            nextArrow: $('.reviewslider__right'),
        });

    } catch (err) {
    }
});



$(function() {
    $('.menumobile').click(function(event) {
        $(this).toggleClass('active');
        $('.header__menu').slideToggle();
    });
    $('.closemenu').click(function(event) {
        $('.menumobile').toggleClass('active');
        $('.header__menu').slideToggle();
    });
});


$(document).ready(function() {
	
	
	var btn = $('.up');

	  $(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
		  btn.addClass('show');
		} else {
		  btn.removeClass('show');
		}
	  });
	
    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 120;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
});


$(document).ready(function() {
    $('.close-modal').on('click', close_modal);
    $('#modal_close_href').on('click', close_modal);

    function close_modal() {
        $('.dom-popup').css("display", "none");
    }
});


(function($) {
    $(function() {
        $('.inform__title').on('click', function() {
            $(this).parent().parent().parent().parent().parent().siblings().find('.inform__text').hide();
            $(this).parent().parent().parent().parent().parent().siblings().find('.inform__title').removeClass('active');
            $(this)
                .toggleClass('active').siblings().removeClass('active')
                .closest('.inform__text').slideToggle();


            $('html, body').animate({
                scrollTop: $(this).offset().top - 20
            }, 500);
        });
    });
})(jQuery);