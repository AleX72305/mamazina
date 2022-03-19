(function ($) {

	$('.home-slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.btn').on('click', function() {
		// $('.popup-arenda-form').addClass('active');
		$('.popup-arenda-form').show(300);
	});

	$('.popup-close').on('click', function() {
		// $('.popup-arenda-form').removeClass('active');
		$('.popup-arenda-form').hide(300);
	});

})(jQuery);

