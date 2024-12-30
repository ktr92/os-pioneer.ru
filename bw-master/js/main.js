$(document).ready(function(){
	
	$('.product-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			asNavFor: '.product-nav'
		});
		$('.product-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			arrow: true,
			prevArrow: $('.productslider__left'),
			nextArrow: $('.productslider__right'),

		});
	
	
	$('.mainslider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: true,
	  nextArrow: '.slider-right',
		prevArrow: '.slider-left',
		    dotsClass: 'my-dots',

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
    if (sw < 768) {
       smMenu();
    } 
	else {
	   lgMenu();
	}
});

// учитываем возможное изменение размера экрана (например, если перевернуть телефон в горизонтальный режим)
$(window).resize(function() {
	var sw = document.body.clientWidth;
    if (sw < 768 && windowState != 'small') {
       smMenu();
    }
  
    if (sw > 767 && windowState != 'large') {
       lgMenu();
    } 
});

function smMenu() {
	
	$('#mobile-menu').off('click');	
	$('.expand').removeClass('expand');
	$('#mobile-menu').remove();
	$('#mobile-callback').remove();
	
    $('.mainmenu').before('<button id="mobile-menu"><img src="/images/bars.png"></button>');
	$('#mobile-menu').after('<a id="mobile-callback" href="#myModal_zakazat_zvonok" data-toggle="modal">Отправить запрос</a>');
   
	$('#mobile-menu').click(function() {
		//развернуть меню
		$('.mainmenu').toggleClass('expand');
	});
	windowState = 'small';
}



//для больших экранов
function lgMenu() {
	
	$('#mobile-menu').off('click');	
	$('.expand').removeClass('expand');
	$('#mobile-menu').remove();
	$('#mobile-callback').remove();
	
    windowState = 'large';
}

/* END мобильное меню */




		

