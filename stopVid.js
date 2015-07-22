$('.close').on('click', function(){
	var video = $('iframe').attr('src');
	$('iframe').attr("src","");
	$('iframe').attr("src",video);
});
