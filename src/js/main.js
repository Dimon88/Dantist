//=require components/**.*
$(window).ready(function () {
	$('.services-panel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.services__arrow_b'),
	  nextArrow: $('.services__arrow_f'),
	  dots: false,
	  arrows: true,
	  variableWidth: true
    });
	$('.team-panel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.team__arrow_b'),
	  nextArrow: $('.team__arrow_f'),
	  dots: false,
	  arrows: true,
	  variableWidth: true
    });
    	$('.intro-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.intro__b'),
	  nextArrow: $('.intro__f'),
	  dots: false,
	  arrows: true,
	  variableWidth: true
    });

})