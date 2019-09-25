$(document).ready(function(){



var scroll = $('.images-section').offset().top - window.innerHeight;
$(document).scroll(function(){
	if(scroll < $('body').scrollTop()){
	$('.images').each(function(index, img){
			setTimeout(function(){
				$(img).css({
			}).addClass('imgs');
	}, index + '00');
	});	
};
});

$('.ul li').on('click', function(){
	var cardId = $(this).find('a').attr('id');
	var position = $('.' + cardId).offset().top;
	$('body').animate({
		scrollTop: position,
	}, 300);
});

$('.but2').click(function(){
	$('html, body').animate({
		scrollTop: $(document).height(),
	}, 1000);
	return false;
});


});