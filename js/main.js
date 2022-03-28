$(document).ready(function() {
	
 	try {
	  $('.mainslider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
				autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
				prevArrow: $('.topslider__left'),
			  nextArrow: $('.topslider__right'),

    });
	} catch(err) {
	
	}
	
	
	
	$('.products__showmore').on('click', function() {
					$(".products__items_hidden .slick-slider").slick("slickNext").slick("slickPrev"); 

		$(this).toggle();
		$('.products__items_hidden').toggle();
	});
	
 
	try {
	  $('.products__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
				autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
			/*	prevArrow: $('.products__left'),
			  nextArrow: $('.products__right'),*/

    });
	} catch(err) {
	
	}
	
	 	try {
	  $('.related__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
				autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
				prevArrow: $('.related__left'),
			  nextArrow: $('.related__right'),
				responsive: [

    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	
    });
	} catch(err) {
	
	}
	
	try {	
	  $('.product-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-nav'
		});
		$('.product-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			arrow: true,
				prevArrow: $('.productslider__left'),
			  nextArrow: $('.productslider__right'),
				 responsive: [
		
		{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

		});
		} catch(err) {
	
	}
	
	
	try {	
	  $('.product-for2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-nav2'
		});
		$('.product-nav2').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-for2',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			arrow: true,
				prevArrow: $('.productslider__left'),
			  nextArrow: $('.productslider__right'),
		});
		} catch(err) {
	
	}
	
	try {
	  $('.partners__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
				autoplay: false,
        arrows: true,
        dots: false,
				prevArrow: $('.partners__left'),
			  nextArrow: $('.partners__right'),
  responsive: [

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

    });
	} catch(err) {
	
	}
	
	
	$(".products__right").click(function(e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickNext"); // Switched to '.slick-slider'
	});
	
		$(".products__left").click(function(e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickPrev"); // Switched to '.slick-slider'
	});

	
		
	$(".products-slider__arrow_right").click(function(e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickNext"); // Switched to '.slick-slider'
	});
	
		$(".products-slider__arrow_left").click(function(e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickPrev"); // Switched to '.slick-slider'
});
  
	$("input[type=tel]").mask("+7 (999) 999-99-99");

	

});



/* мобильное меню */


// переменная для текущего размера экрана, по умолчанию - широкий
var windowState = 'large';

// проверка ширины экрана и адаптация меню
$(document).ready(function() {
    var sw = document.body.clientWidth;
    if (sw < 990) {
       smMenu();
    } 
	else {
	   lgMenu();
	}
});

// учитываем возможное изменение размера экрана (например, если перевернуть телефон в горизонтальный режим)
$(window).resize(function() {
	var sw = document.body.clientWidth;
    if (sw < 990 && windowState != 'small') {
       smMenu();
    }
  
    if (sw > 989 && windowState != 'large') {
       lgMenu();
	   
	  
    } 
});

function smMenu() {
		
	$('#mobile-menu').off('click');	
	$('#mobile-filter').off('click');
	$('.expand').removeClass('expand');
	/*$('#mobile-filter').remove();*/
	
/*     $('.topmenu').before('<button id="mobile-menu"></button>');
 */   
	$('#mobile-menu').click(function() {
		//развернуть меню
		$(this).toggleClass('clicked');
		$('div.topmenu_mobile').toggleClass('expand');
	});
	$('#mobile-filter').click(function() {
		//развернуть меню
		$('.mainform_aside').toggleClass('expand');
	});
	
	windowState = 'small';
}



//для больших экранов
function lgMenu() {
	
	$('#mobile-menu').off('click');	
	$('.expand').removeClass('expand');
	$('#mobile-filter').off('click');	
	/*$('#mobile-filter').remove();*/
    windowState = 'large';
}

/* END мобильное меню */





$( function () {
  
    $('.mobile__search').click(function ( event ) {        
        
        $('.b-search-box').animate({ width: 'toggle'}, 320).addClass('b-search-box--is-active');       
    });
		
		$('.search-close').click(function ( event ) {        
        
        $('.b-search-box').animate({ width: 'toggle'}, 0).removeClass('b-search-box--is-active');       
    });


});







