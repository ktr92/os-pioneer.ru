$(document).ready(function(){
  $('.toggleslide').click(function () {
	  
		var id = $(this).attr('id');			
		$('.toggleslide').removeClass('active');
		$(this).addClass('active');
		$('.slider4__slides').removeClass('active');
		$('.slider4__slides[data-link='+id+']').addClass('active');
		
		$('.slider4__slides').slick('unslick');
		
			$('.slider4__slides.active').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 3,	 
	  arrows: true,
	  dots: false,
		nextArrow: '.slider4__right',
	  prevArrow: '.slider4__left',
	  responsive: [
    {
      breakpoint: 1169,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 719,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
   
  ]  
	  
	});
		
	});
});

$(document).ready(function(){
	
	$('.mainslider__items').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,	 
	  arrows: true,
	  dots: true,
	  dotsClass: 'my-dots',
		nextArrow: '.arrow__right',
	  prevArrow: '.arrow__left',
	   	  
	  
	});
	
				$('.slider4__slides.active').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 3,	 
	  arrows: true,
	  dots: false,
		nextArrow: '.slider4__right',
	  prevArrow: '.slider4__left',
	  responsive: [
    {
      breakpoint: 1169,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 719,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
   
  ]  
	  
	});
	
	var $status = $('.pagingInfo');
    var $slickElement = $('.slideshow');
	$status.html("<span class='slick__current'>1</span>"+"<span class='slick__symbol'>/</span>"+"<span class='slick__total'>"+document.getElementsByClassName('mainslider__item').length+"</span>");

    $('.mainslider__items').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html("<span class='slick__current'>"+i+"</span>"+"<span class='slick__symbol'>/</span>"+"<span class='slick__total'>"+slick.slideCount+"</span>");
    });

/* 
	$('#slider4__slides1').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 3,	 
	  arrows: true,
	  dots: false,
		nextArrow: '.slider4__right',
	  prevArrow: '.slider4__left',
	  responsive: [
    {
      breakpoint: 1169,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 719,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
   
  ]  
	  
	});
	
	$('#slider4__slides2').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 3,	 
	  arrows: true,
	  dots: false,
		nextArrow: '.slider4__right',
	  prevArrow: '.slider4__left',
	  responsive: [
    {
      breakpoint: 1169,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 719,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
   
  ]  
	  
	});
	
	$('#slider4__slides3').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 3,	 
	  arrows: true,
	  dots: false,
		nextArrow: '.slider4__right',
	  prevArrow: '.slider4__left',
	  responsive: [
    {
      breakpoint: 1169,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 719,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
   
  ]  
	  
	});
	 */
	
	$('.slider4ex__slides').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 3,	 
	  arrows: true,
	  dots: false,
		nextArrow: '.slider4ex__right',
	  prevArrow: '.slider4ex__left',
	  responsive: [
    {
      breakpoint: 1169,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 719,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
   
  ]  
	  
	});
	
	$('.partners__slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,	 
	  arrows: true,
	  dots: false,
		nextArrow: '.arrow__rightpartner',
	  prevArrow: '.arrow__leftpartner',
	  responsive: [
    {
      breakpoint: 1169,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 719,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    } 
   
  ]  	  
	  
	});

});

$(document).ready(function(){

	lightbox.option({
		  'resizeDuration': 50,
		  'fadeDuration': 50,
		  'imageFadeDuration': 50,
		  'resizeDuration': 100,
		  'showImageNumberLabel': false,
		  'wrapAround': true
		})
});



jQuery(function($){
   $("input[name=phone]").mask("+7(999) 999-99-99");
});	


$('[data-toggle="modal"]').on('click', function () {	
	$('input').removeClass('error_input'); 
	$('input[name=phone]').val('');
	$('input[name=email]').val('');
	$('input[name=name]').val('');
	$('.modal input[name=block]').val($(this).attr('data-header'));
});



		

/* мобильное меню */

// переменная для текущего размера экрана, по умолчанию - широкий
var windowState = 'large';

// проверка ширины экрана и адаптация меню
$(document).ready(function() {
    var sw = document.body.clientWidth;
    if (sw < 1170) {
       smMenu();
    } 
	else {
	   lgMenu();
	}
});

// учитываем возможное изменение размера экрана (например, если перевернуть телефон в горизонтальный режим)
$(window).resize(function() {
	var sw = document.body.clientWidth;
    if (sw < 1170 && windowState != 'small') {
       smMenu();
    }
  
    if (sw > 1169 && windowState != 'large') {
       lgMenu();
    } 
});

function smMenu() {
	
	$('#mobile-menu').off('click');	
	$('.expand').removeClass('expand');
	$('.mobile-button').remove();
	
  /*  $('#header .logo').after('<div class="mobile-button hidden-xs"><button id="mobile-menu"><img src="images/bars.png"></button><div>');*/
		
	$('.header-index .socblock').after('<div class="mobile-button visible-sm visible-xs"><button id="mobile-menu"><img src="mages/bars.png"></button><div>');
	
	$('.mob-menu').after('<div class="mobile-button visible-sm visible-xs"><button id="mobile-menu"><img src="mages/bars2.png"></button><div>');
	

   
	$('#mobile-menu').click(function() {
		//развернуть меню
		$('#menumobile').slideToggle();
	});
	$('.mobile-close').click(function() {
		//развернуть меню
		$('#menumobile').toggle();
	});
	
	windowState = 'small';
}

//для больших экранов
function lgMenu() {
	
	$('#mobile-menu').off('click');	
	$('.expand').removeClass('expand');
	$('.mobile-button').remove();
	
    windowState = 'large';
}

/* END мобильное меню */





