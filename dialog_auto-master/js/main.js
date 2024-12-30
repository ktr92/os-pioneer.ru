
$(document).ready(function() {


     var kxx = 0
            $('.mainslider-nav_index').each(function () {
                kxx = $(this).find('.mainslider__number').size();
                var myWidth = 100 / kxx - 2;
                $(this).find('.mainslider__number').width(myWidth + '%');
                kxx = 0;
            });

             $(".mainslider__slider_index").slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3e3,
                arrows: false,
                dots: false,               
                asNavFor: ".mainslider-nav_index"
            }), $(".mainslider-nav_index").slick({
                infinite: true,
                slidesToShow: 0,
                slidesToScroll: 0,
                asNavFor: ".mainslider__slider_index",
                dots: false,
                arrows: false,
                centerMode: false,
                focusOnSelect: true
            });

             $(".carsslider__slider").slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: false,
                true: 3000,
                arrows: true,
                dots: false,    
                  prevArrow: $(".carsslider__arrow_left"),
                  nextArrow: $(".carsslider__arrow_right"),           
            });

            $(".newsslider__slider").slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll:1,
                 centerPadding: '0px',
                autoplay: false,
                    variableWidth: true,
                centerMode: true,
                true: 3000,
                arrows: true,
                dots: false,    
                  prevArrow: $(".newsslider__arrow_left"),
                  nextArrow: $(".newsslider__arrow_right"),           
            });

          


            

       try {
        $(".mainslider__slider").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3e3,
            arrows: true,
            dots: true,
            prevArrow: $(".mainslider__left"),
            nextArrow: $(".mainslider__right"),
            asNavFor: ".mainslider-nav"
        }), $(".mainslider-nav").slick({
            infinite: true,
            slidesToShow: 0,
            slidesToScroll: 0,
            asNavFor: ".mainslider__slider",
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true
        })
    } catch (e) {}

     
           




	$('.mobilemenubtn').on('click',function(){
		$('.header__mainmenu').slideToggle();
	});

	$('.mobilemenuclose').on('click',function(){
		$('.header__mainmenu').hide();
	});
	$('li.hasChild').on('click',function(e){
		e.preventDefault();
		$(this).find('.submenu').slideToggle();
	});


    $(".thumb-item").brazzersCarousel(), $(".obzor__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,
        fade: true,
        swipe: false,
        asNavFor: ".obzor__navslider"
    }), $(".obzor__navslider").slick({
        slidesToShow: 0,
        slidesToScroll: 1,
        asNavFor: ".obzor__slider",
        dots: false,
        infinite: false,
        initialSlide: 2,
        centerMode: true,
        swipe: false,
        focusOnSelect: true,
        prevArrow: $(".obzor__navleft"),
        nextArrow: $(".obzor__navright")
    });
 

           






    try {
        $(".carslider__slider").each(function() {
            $(this).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3e3,
                arrows: true,
                dots: false,
                fade: true,
                asNavFor: $(this).parent().parent().parent().find(".carslider-nav")
            })
        }), $(".carslider-nav").each(function() {
            $(this).slick({
                infinite: true,
                slidesToShow: 0,
                slidesToScroll: 0,
                asNavFor: $(this).parent().parent().find(".carslider__slider"),
                dots: false,
                arrows: false,
                centerMode: false,
                focusOnSelect: true
            })
        })
    } catch (e) {}
    $(".carslider__right").click(function(e) {
        $(this).parent().parent().find(".slick-slider").slick("slickNext")
    }), $(".carslider__left").click(function(e) {
        $(this).parent().parent().find(".slick-slider").slick("slickPrev")
    }), setTimeout(function() {
        [].forEach.call(document.querySelectorAll("img[data-src]"), function(e) {
            e.setAttribute("src", e.getAttribute("data-src")), e.onload = function() {
                e.removeAttribute("data-src")
            }
        })
    }, 2e3), (new WOW).init(), $("input[type=tel]").mask("+7 (999) 999-99-99")
}), $(document).ready(function() {
    function e() {
        $(".dom-popup").css("display", "none")
    }
    $(".close-modal").on("click", e), $("#modal_close_href").on("click", e)
});

function sendForm(e) {
    var i = e,
        o = new FormData(e);
    $(i).attr("data-metrika-target");
    $.ajax({
        type: "POST",
        url: "/mail/send.php",
        contentType: false,
        processData: false,
        data: o,
        dataType: "json",
        success: function(o) {
            if (console.log(o), "success" == o.result) {
                var r = $(i).find('input[name="name"]').val(),
                    s = $(i).find('input[name="phone"]').val();
                roistatGoal.reach({
                    name: r,
                    text: "Заявка",
                    phone: s
                }), $("input").removeClass("error_input"), $(".modal").on("show.bs.modal", function() {
                    $(".modal").not($(this)).each(function() {
                        $(this).modal("hide")
                    })
                }), $("#myModal_spasibo").modal("show"), $(i).find("input").val(""), ym(68064520, "reachGoal", "id1")
            } else {
                for (var a in $("input").removeClass("error_input"), o.text_error) $(e).find('input[name="' + a + '"]').addClass("error_input"), 0
            }
        },
        error: function(e) {
            console.log(e)
        },
        beforeSend: function() {
            console.log("loading..."), $(".modal").prepend('<div class="loader">dd</div>')
        },
        complete: function() {
            $(".loader").remove()
        }
    })
}