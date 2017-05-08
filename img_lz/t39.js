// JavaScript Document
$(function(){
	
	var aa = "imgShow" ;
	
	var load = {
		container : "._img",
		width : 800 ,
		row : 15,
		col : 25,
		img : "images/l7.jpg",
		animTime : 5000,
	};
	
	window[aa] = function (bb) {
		
		 if (typeof(bb) == "object") {
			 
			 for (var i in bb) {
				 
				 load[i] = bb[i];
				 
			 }
			 
		 }
		if (!load.container) {
			
			return false;
			
		} 
		
		var $container = $(load.container);
		
		$container.append("<ul></ul>");
		
		$container.css({
			
			width : load.width,
			
		});
		
		var $find_ul = $container.find(" > ul");
		
		for (var i = 0; i < (load.row * load.col); i++) {
			
			$find_ul.append("<li></li>");
			
		}
		
		var $find_li = $find_ul.find("li");
		
		var Img = new Image();
		
		Img.src = load.img;
		
		Img.onload = function () {
			
			var multiple = $container.width() / Img.width;
			var width = Img.width * multiple;
			var height = Img.height * multiple;
			var li_width = width / load.col;
			var li_height = height / load.row;
			var windowWidth = screen.width;
			var windowHeight = screen.height;
			
			$find_li.css({
				
				"width" : li_width,
				"height" : li_height,
				"background-image" : "url('"+Img.src+"')",
				"background-size" : width+"px "+height+"px",
				"opacity" : 0,
				
			});
			
			$container.css({
				
				left : '50%', 
				top : '50%',
				'margin-top' : -height/2,
				'margin-left' : -width/2
				
			});
			
			var x,y;
			for (var i = 0; i < $find_li.length; i++) {
				
				 x = i % load.col;
				
				 y = Math.floor(i / load.col);
				
				$find_li.eq(i).css({
					
					"background-position" : -x*li_width+'px ' + (-y*li_height)+'px', 
					"left" :  Math.ceil(Math.random()*windowWidth*2) - windowWidth,
					"top" : Math.ceil(Math.random()*windowHeight*2) - windowHeight
					
				});
				
				$find_li.eq(i).animate({
					
					"top" : 0,
					"left" : 0,
					"opacity" : 1,
					
				},load.animTime);
				
			}
			
		};
	};
});