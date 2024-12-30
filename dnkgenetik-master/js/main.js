$(document).ready(function(){
	$('.params__slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,	 
	  arrows: true,
	  dots: true,
	 dotsClass: 'my-dots',
		nextArrow: '.slider-right',
	  prevArrow: '.slider-left',
	   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   
	]
	  
	  
	});
	
	$(function() {

		 $(window).scroll(function() {

		 if($(this).scrollTop() != 0) {

		 $('#toTop').fadeIn();
		 
		 } else {

		 $('#toTop').fadeOut();

		 }

		 });
		 
		 $('#toTop').click(function() {

		 $('body,html').animate({scrollTop:0},800);

		 });
		 
		});
	

});

function sendForm(t) {
		var th = t;
		var data = new FormData(t);
		var metrikaTarget = $(th).attr('data-metrika-target');				
			
			$.ajax({
				type: "POST",
				url: '/send.php',
				contentType: false,
				processData: false,
				data: data,
				dataType: 'json',
				  success: function(data){
					console.log(data);
					if(data.result == 'success'){  
						$('input').removeClass('error_input');
						$('.modal').on('show.bs.modal', function () {
						    $('.modal').not($(this)).each(function () {
						        $(this).modal('hide');
						    });
						});
						$('#myModal_spasibo').modal('show'); 	
						$(th).find('input').val('');
						
				/* 		yaCounter48032297.reachGoal(metrikaTarget, function () {
							console.log('Цель ' + metrikaTarget + ' отправлена');
						});	 */
					}
					else{	
						var i = 0;
						$('input').removeClass('error_input'); 
						for(var errorField in data.text_error){
							$(t).find('input[name="'+errorField+'"]').addClass('error_input'); 
							if(i == 0) {
								/*$('input[name="'+errorField +'"]').focus();*/
							}
							i++;
						}										
					}
					},
					error: function(error) {
						console.log(error);	
					},
					beforeSend: function() {
						console.log('loading...');
						$('.modal').prepend('<div class="loader">dd</div>');
					},
					complete: function() {
						$('.loader').remove();
					}
			});
			
		};



function sendForm2(t) {
		var th = t;
		var data = new FormData(t);
		var metrikaTarget = $(th).attr('data-metrika-target');				
			
			$.ajax({
				type: "POST",
				url: '/send2.php',
				contentType: false,
				processData: false,
				data: data,
				dataType: 'json',
				  success: function(data){
					console.log(data);
					if(data.result == 'success'){  
						$('input').removeClass('error_input');
						$('.modal').on('show.bs.modal', function () {
						    $('.modal').not($(this)).each(function () {
						        $(this).modal('hide');
						    });
						});
						$('#myModal_spasibo').modal('show'); 	
						$(th).find('input').val('');
						
				/* 		yaCounter48032297.reachGoal(metrikaTarget, function () {
							console.log('Цель ' + metrikaTarget + ' отправлена');
						});	 */
					}
					else{	
						var i = 0;
						$('input').removeClass('error_input'); 
						for(var errorField in data.text_error){
							$(t).find('input[name="'+errorField+'"]').addClass('error_input'); 
							if(i == 0) {
								/*$('input[name="'+errorField +'"]').focus();*/
							}
							i++;
						}										
					}
					},
					error: function(error) {
						console.log(error);	
					},
					beforeSend: function() {
						console.log('loading...');
						$('.modal').prepend('<div class="loader">dd</div>');
					},
					complete: function() {
						$('.loader').remove();
					}
			});
			
		};
		
		
function sendForm3(t) {
		var th = t;
		var data = new FormData(t);
		var metrikaTarget = $(th).attr('data-metrika-target');				
			
			$.ajax({
				type: "POST",
				url: '/send3.php',
				contentType: false,
				processData: false,
				data: data,
				dataType: 'json',
				  success: function(data){
					console.log(data);
					if(data.result == 'success'){  
						$('input').removeClass('error_input');
						$('.modal').on('show.bs.modal', function () {
						    $('.modal').not($(this)).each(function () {
						        $(this).modal('hide');
						    });
						});
						$('#myModal_spasibo').modal('show'); 	
						$(th).find('input').val('');
						
				/* 		yaCounter48032297.reachGoal(metrikaTarget, function () {
							console.log('Цель ' + metrikaTarget + ' отправлена');
						});	 */
					}
					else{	
						var i = 0;
						$('input').removeClass('error_input'); 
						for(var errorField in data.text_error){
							$(t).find('input[name="'+errorField+'"]').addClass('error_input'); 
							if(i == 0) {
								/*$('input[name="'+errorField +'"]').focus();*/
							}
							i++;
						}										
					}
					},
					error: function(error) {
						console.log(error);	
					},
					beforeSend: function() {
						console.log('loading...');
						$('.modal').prepend('<div class="loader">dd</div>');
					},
					complete: function() {
						$('.loader').remove();
					}
			});
			
		};

$(document).ready(function(){
	$('.reviews__slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,	 
	  arrows: true,
	  dots: false,
		nextArrow: '.reviews__right',
	  prevArrow: '.reviews__left',
	 
	});
});

$(document).ready(function(){
	$('.questions__item').on('click',function(){
		$('.questions__answer').removeClass('active');
		$('.questions__item').removeClass('active');
		$(this).addClass('active');
		var k = $(this).attr('data-item');
		$('.questions__answer#'+k).addClass('active'); 
	})
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



