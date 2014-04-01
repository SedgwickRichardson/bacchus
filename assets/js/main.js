$( document ).ready(function() {
    $(".link").click(function() {
    	var scrn = $(this).attr('data-img');
    	var z = $(this).attr('data-z');
    	
    	if (z == undefined) z = 1;
    	console.log(z);
    	$('.screenwrapper img').attr('src', scrn + '.jpg');
    	$('.screenwrapper').css('z-index',z);
    	//console.log(scrn);
    })
});