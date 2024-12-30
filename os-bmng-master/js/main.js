$(document).ready(function () {
	
	try {
		$('.homeslider__slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: false,
			dots: true,
			/*	prevArrow: $('.products__left'),
			  nextArrow: $('.products__right'),*/

		});


	} catch (err) {

	}
	
	
	new WOW().init();
		
	
	
	$("input[type=tel]").mask("+7 (999) 999-99-99");
	$("input[name=date]").mask("99.99.9999");
	$("input[name=paspcode]").mask("999-999");
	$("input[name=paspnomb]").mask("9999 999999");
	
	
	
	
	
	(function($) {
	$(function() {

		$('ul.tabs__caption_js').on('click', 'li:not(.active)', function() {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content_js').removeClass('active').eq($(this).index()).addClass('active');
		});

	});
	})(jQuery);
			
	lightbox.option({
		  'resizeDuration': 200,
		  'fadeDuration': 200,
		  'imageFadeDuration': 200,
		  'resizeDuration': 200,
		  'showImageNumberLabel': false,
		  'wrapAround': true
		});
});


$(function () {
	
	$('#mobilemenu').click(function (event) {
		$(this).toggleClass('active');
		$('.header__menu').slideToggle();
	});
	$('#mobileclose').click(function (event) {		
		$('.header__menu').slideToggle();
	});
	
	$('.mobshowhide1').click(function (event) {
		$(this).hide()			
		$(this).siblings().slideToggle();
		
	});
	$('.mobshowhide2').click(function (event) {
		$(this).hide();			
		$(this).siblings().slideToggle();
			
	});
	
	
	/* $('.showhide').click(function (event) {
		event.preventDefault();
		$(this).parent().find('p').slideToggle();		
		$(this).toggleClass('clicked');
		
		var title = 'Читать далее';
		if($(this).hasClass('clicked')){
		   title = 'Скрыть';
		}
		$(this).text(title);
		
		
	});
	 */


	
	$('.accordeon__title').click(function (event) {
		/* $('.accordeon__content').not($(this).next()).hide().removeClass('active');
		$('.accordeon__title').not($(this)).removeClass('active'); */
		$(this).toggleClass('active');		 
		$(this).next('.accordeon__content').slideToggle('slow', function() {
			$(this).toggleClass('active', $(this).is(':visible'));
		  });
	});
	
	
	$('.lang').on('click', function() {
		$('.lang__items').slideToggle();
	});
	
	$(".pageanchors__item a").on("click", function (e) {
        e.preventDefault();
        var i = $(this).attr("href");
		var x = "a[name="+i.slice(1)+"]";
         var t = $(x).offset().top-110;
        $("body,html").animate({
            scrollTop: t
        }, 400)
    })
	

});



    
$(window).scroll(function(){
    $('#header').toggleClass('stick', $(this).scrollTop() > 1);
});



