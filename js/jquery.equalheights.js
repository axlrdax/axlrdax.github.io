<<<<<<< HEAD
/*parsed HTML*/
$(function(){
	$(".maxheight").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight1").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})

})
/*add event*/
$(window).bind("resize", height_handler).bind("load", height_handler)
function height_handler(){
	if($(window).width()>767){
		$(".maxheight").equalHeights();
	}else{
		$(".maxheight").css({'height':'auto'});
	}
	if($(window).width()>767){
		$(".maxheight1").equalHeights();
	}else{
		$(".maxheight1").css({'height':'auto'});
	}
}
/*glob function*/
(function($){
	$.fn.equalHeights=function(minHeight,maxHeight){
		tallest=(minHeight)?minHeight:0;
		this.each(function(){
			if($(">.box_inner", this).outerHeight()>tallest){
				tallest=$(">.box_inner", this).outerHeight()
			}
		});
		if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
		return this.each(function(){$(this).height(tallest)})
	}
})(jQuery)
=======
/*parsed HTML*/
$(function(){
	$(".maxheight").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight1").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})

})
/*add event*/
$(window).bind("resize", height_handler).bind("load", height_handler)
function height_handler(){
	if($(window).width()>767){
		$(".maxheight").equalHeights();
	}else{
		$(".maxheight").css({'height':'auto'});
	}
	if($(window).width()>767){
		$(".maxheight1").equalHeights();
	}else{
		$(".maxheight1").css({'height':'auto'});
	}
}
/*glob function*/
(function($){
	$.fn.equalHeights=function(minHeight,maxHeight){
		tallest=(minHeight)?minHeight:0;
		this.each(function(){
			if($(">.box_inner", this).outerHeight()>tallest){
				tallest=$(">.box_inner", this).outerHeight()
			}
		});
		if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
		return this.each(function(){$(this).height(tallest)})
	}
})(jQuery)
>>>>>>> b092b3e6b05af35154351e50a4d9a0e39f64fd7b
