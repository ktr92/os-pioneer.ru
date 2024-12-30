function sendForm(t) {
		var th = t;
		var data = new FormData(t);
		// Из формы тащим идентификатор цели
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
						/*alert('Ваша заявка успешно отправлена!');*/
						$('.modal').on('show.bs.modal', function () {
						    $('.modal').not($(this)).each(function () {
						        $(this).modal('hide');
						    });
						});
						$('#myModal_spasibo').modal('show'); 
						//Отправка цели
						yaCounter45039614.reachGoal(metrikaTarget, function () {
							console.log('Цель ' + metrikaTarget + ' отправлена');
						});								
					}
					else{	
						var i = 0;
						$('input').removeClass('error_input'); 
						for(var errorField in data.text_error){
							$('input[name="'+errorField+'"]').addClass('error_input'); 
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
  $('.sertificates').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '.sert-right',
  prevArrow: '.sert-left',
  
  responsive: [
		{ 
		breakpoint: 992,
			settings: {           
				slidesToShow: 2,
				slidesToScroll: 1,
			} 
		},
		{ 
		breakpoint: 630,
			settings: {           
				slidesToShow: 1,
				slidesToScroll: 1,
			} 
		}
		]
});	
});

$(document).ready(function(){
  $('.facts').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '.facts-right',
  prevArrow: '.facts-left'
});	
});


$(document).ready(function(){
	
	$('.preim-for-toggle').on('click', preim_text_show);
	
	function preim_text_show() {
		$(this).children(".preim-text").toggle();	
	}
});

$(document).ready(function(){
	$('.close-modal').on('click', close_modal);
	
	function close_modal() {
		$('.dom-popup').css("display", "none");	
	}
});


$(document).ready(function(){
	$('.dom-snoska').on('click', dom_open_modal);
	
	function dom_open_modal() {
		$(this).siblings('.dom-popup').css("display", "block");	
	}
});
/*
$(document).ready(function(){
	
		var arrowsDrawer1 = $cArrows('#dom-strelki');
  
		// 4. Рисуем стрелки .arrow(from, to)
		arrowsDrawer1.arrow('.dom-metka', '.dom-snoska');
	}
});*/


