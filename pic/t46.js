// JavaScript Document
$.fn.extend({
	"show" : function (aa) {
		
		var jsonData = [
			{
				"bg" : "images/003.jpg"
			},
			{
				"bg" : "images/005.jpg"
			},
			{
				"bg" : "images/004.jpg"
			}
		];
		
		for(var i = 0; i < jsonData.length; i++) {
			
			$(aa).append('<img src='+jsonData[i].bg+'>');
			
		}
		
		var find_img = $("#container").find("img"),
			container = $("<div class='container'></div>");
		
		container.css({
		
			"height" : "100%",
			"padding-top" : "30px"
			
		}).append(find_img).appendTo($("#container"));
		
		find_img.css({
			
			"float" : "left",
			"width" : "200px",
			"height": "100px",
			"margin-left" : "20px",
			
			
			
		});
		
		$("img").each(function (index) {
			
			
			
			$(this).click(function () {
				
				
				
				$("#box").css({
					"display" : "block",
					"background" : "rgba(0,0,0,.85)",
	                
				})
				$("#box > .show").append('<img src="'+jsonData[index].bg+'">');
				
				var find_img = $("#box > .show").find("img");
				
				
				
				find_img.eq(0).css({
					
					"width" : find_img[0].width,
					"margin-left" : $(".show").width()/2-find_img[0].width/2,
					"margin-top" : $(".show").height()/2-find_img[0].height/2-80
				});
				
		        $(".right-btn").click(function () {
			          
		
			        $(".show").find("img").remove();
			
			        $(".show").append('<img src="'+jsonData[index == 2 ? 0 : index+1].bg+'">');
					
					if (index == 2) {
						index = 0;
					} else {
						index++;
					}
			
			        var find_img = $("#box > .show").find("img");
			
		            find_img.css({
						
				        "width" : find_img.get(0).width,
				        "margin-left" : $(".show").width()/2-find_img.get(0).width/2,
				        "margin-top" : $(".show").height()/2-find_img[0].height/2-80
						
			        });
			
			
			
		        });
				
				$(".lft-btn").click(function () {
					
			        $(".show").find("img").remove();
			
			        $(".show").append('<img src="'+jsonData[index == 0 ? 2 : index-1].bg+'">');
					
					if (index == 0) {
						index = 2;
					} else {
						
						index--;
					}
			
			        var find_img = $("#box > .show").find("img");
			
		            find_img.css({
						
				        "width" : find_img.get(0).width,
				        "margin-left" : $(".show").width()/2-find_img.get(0).width/2,
						"margin-top" : $(".show").height()/2-find_img[0].height/2-80
				
			        });
					
				});
			
			});
			
		});
		
		$("#btn").click(function () {
			 
            var find_img = $("#box > .show").find("img");
			 
			$("#box").css({
				
				"display" : "none"
				
			}).find(".show > img").remove();
			
		});
		

	}
});