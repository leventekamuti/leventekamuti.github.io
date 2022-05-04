$(document).on('click', "#ResetForm", function() {
	// Reset the form
	document.getElementById('form-form').reset();
});

(function ($) {

	window.onload = function() {
		document.body.className += " loaded";
	}
	//window.sr = new scrollReveal();
	if($('.menu-btn').length){
		$(".menu-btn").on('click', function() {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(250);
		});
	}
})(window.jQuery);