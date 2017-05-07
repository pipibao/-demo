// JavaScript Document
$(function(){
	
	setTimeout(function(){
		
		$("#lft-bar").animate({
			
			"left" : -230
			
		});
		
	},3000);

	
});
var height = function(){
	
	if ($(document).height()<950) {
		
		return 950 ;
		
	} else {
		
		return $(document).height();
		
	}
};

$("#lft-bar").css({
	
	"height" : height()
	
});

$(".mb-child").click(function(){
	
	$(this).find(".first").addClass("color");
	
	$(this).siblings().find(".first").removeClass("color");
	
	$(this).addClass("on").siblings().removeClass("on");
	
	
	
});

$(".mb-child").hover(function(){
	
	$(this).find(".first").addClass("color");
	
	$(this).siblings().not(".on").find(".first").removeClass("color");
	
});

$('body,html').mousemove(function(e){
	
	if (e.pageX < 150 && e.pageY< height()) {
		
		$("#lft-bar").stop().animate({
			
			"left" : 0,
			
		},300);
	}
});

$("#lft-bar").mouseleave(function(){
	
	$(this).stop().animate({
		
		"left" : -230
		
	},300);
	
});

