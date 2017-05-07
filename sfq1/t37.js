// JavaScript Document
   

    $(".slide").hover(function(){
		
		$(this).addClass('on').siblings().removeClass('on');
		
		$(this).find(".before").css({
			
			"background": "#0876c2" 
			
		});
		
		
		$(this).find(".bg_dis").css({
			
			"background-position" : "-148px 0"
			
		});
		
		$(this).find(".text_dis").css({
			
			"color" : "aliceblue",
			
			"border-top-color" : "white"
		});
		
		$(this).find(".head_dis").css({
			
			"color" : "aliceblue",
			
		});
	},function(){
		
		$(this).find(".before").css({
			
			"background" : "#fff",
			
		});
		
		$(this).find(".bg_dis").css({
			
			"background-position" : "0 0"
			
		});
		
		$(this).find(".text_dis").css({
			
			'color' : "#666666",
			
			"border-top-color" : "#666666"
			
		});
		
		$(this).find(".head_dis").css({
			
			"color" : "#666666",
			
		});
		
	});
		
	
	
