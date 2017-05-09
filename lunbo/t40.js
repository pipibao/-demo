// JavaScript Document
$.fn.extend({
	
	"slider" : function (width,height,start,time) {
		
		var animTime,
			index = 0;
		
		var jsonData = [
			{
				"bg" : "images/l7.jpg"
			},
			{
				"bg" : "images/l11.jpg"
			},
			{
				"bg" : "images/l10.jpg"
			}
		];
		
		$("#container").css({
			
			"width" : width,
			"height" : height,
			
		});
		
		for (var i = 0; i < jsonData.length; i++) {
			
			$("#box").append('<div class="bg"></div>');
			
			$("#container").append('<img src="'+jsonData[i].bg+'">')
			
		}
		
		$("#box").find(".bg").each(function (index) {
			
			$(this).css({
				
				"width" : width,
				"height" : height,
				"background" : 'url('+jsonData[index].bg+') no-repeat center',
				
			});
		});
		
		$("#container").find("img").css({
			
			width : "80px",
			height : "40px",
			
		});
		

        
		$('<div class="bg"></div>').appendTo($("#box")).css({
			
			"width" : width,
			"height" : height,
			"background" : 'url('+jsonData[0].bg+') no-repeat center',
			
		});
		
		$('<div class="active"></div>').appendTo($("#container")).css({
			
			width : "80px",
			height : "40px",
			
		});
		
		if (start == "start") {
			
			var autoPlay = function () {
				
				animTime = setTimeout(function () {
					
					$("#box").animate({
						
						"margin-left" : -(parseInt(width)+1) * (index+1),
						
					},300,function () {
						
						if (index == 2) {
							
							index = 0;
							
							$("#box").css({
								
								"margin-left" : 0,
								
							});
						} else {
							
							index++;
							
						}
						
						autoPlay();
						
					});
					
					$(".active").animate({
						
						"left" : $("#container > img").eq(index==2 ? 0 : index+1).position().left,
						
					},300);
					
				},time);
			};
			
    		$("#container > img").each(function(i){
				
				$(this).hover(function () {
				
			        clearTimeout(animTime);
			
			        var now = $(this).position().left,
			            before = $(".active").position().left;
	
			        if (now > before) {
				
				        $(".active").stop().animate({
					
					        "left" : now,
					
				        },300);
				
			        } else {
				
				        $(".active").stop().animate({
					
					        "left" : now,
					
				        },300);
			        }
			
			        $("#box").stop().animate({
						
						"margin-left" : -i * parseInt(width),
						
					},300,function () {
						
						index = i;
						
						if (!$("#box").is("animated")) {
							
							autoPlay();
						}
						
					});
				
		        });			
			
			});
			autoPlay();
		}
		
	}
});