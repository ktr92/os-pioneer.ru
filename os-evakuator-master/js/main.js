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
						
						yaCounter48032297.reachGoal(metrikaTarget, function () {
							console.log('Цель ' + metrikaTarget + ' отправлена');
						});	
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
	


	  $('.slider-works').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  dotsClass: 'pageInfo',
		  nextArrow: '.ab-right',
		  prevArrow: '.ab-left',
			
	});	
	
	
	
	$('.slider-right').on('click', function () {
		$(this).parent('.back-blue').parent('.slide-title').siblings('.slider-works').slick('slickNext');
	});
	
	$('.slider-left').on('click', function () {
		$(this).parent('.back-blue').parent('.slide-title').siblings('.slider-works').slick('slickPrev');
	});
	
	
	$('.models .slider-right').on('click', function () {
		$(this).siblings('.slider-works').slick('slickNext');
	});
	
	$('.models .slider-left').on('click', function () {
		$(this).siblings('.slider-works').slick('slickPrev');
	});
	
	
});

$(document).ready(function(){
   $("input[name=phone]").mask("+7(999) 999-99-99");
   
   lightbox.option({
		  'resizeDuration': 0,
		  'fadeDuration': 0,
		  'imageFadeDuration': 0,
		  'resizeDuration': 0,
		  'showImageNumberLabel': false,
		  'wrapAround': true
		})
});	



