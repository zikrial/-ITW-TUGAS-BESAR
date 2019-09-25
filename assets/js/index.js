    	$('.pg-scr').on("click", function(e) {
    		var scral = $(this);
    		$("html, body").animate({
    			scrollTop: $(scral.attr('href')).offset().top - 50
    		}, 1000, "linear");
    		e.preventDefault(); 
    	});
