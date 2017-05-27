// JavaScript Document
var slider = {
	
	index : 0,
	
	autoPlay : function(className,bgName){
		
		var animTime = setTimeout(function(){
			
			className.animate({
				
				width : "100%"
				
			},5000,function(){
				
				className.css({
					
					width : 0
					
				});
				
				bgName.eq(slider.index == 2 ? 0 : slider.index+1).fadeIn().siblings().fadeOut();
				
				if(slider.index == 2) {
					
					slider.index = 0;
					
				} else {
					
					slider.index++;
					
				}
				
			});
			
			slider.autoPlay(className,bgName);
			
		},5000);
		
	},
	beforeBg : function(classname,bgName){
		
		var clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
			lftBtn = $(".lft-btn").eq(0),
			Height = lftBtn.height();
		
		lftBtn.css({
			
			top: (clientHeight-Height)/2,
			
		});
		
		lftBtn.click(function(){
			
			classname.stop().css({
				
				width: 0
				
			});
			
			bgName.eq(slider.index == 0 ? 2 : slider.index-1).stop().fadeIn().siblings().fadeOut();
			
			if (slider.index == 0) {
				
				slider.index = 2;
				
			} else {
				
				slider.index--;
				
			}			

		});

	},
	nextBg : function(classname,bgName){
		
		var clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
			rgtBtn = $(".rgt-btn").eq(0),
			Height = rgtBtn.height();
		
		rgtBtn.css({
			
			top: (clientHeight-Height)/2,
			
		});
		
		rgtBtn.click(function(){
			
			classname.stop().css({
				
				width : 0
				
			});
	
			bgName.eq(slider.index == 2 ? 0 : slider.index+1).fadeIn().siblings().fadeOut();
			
			if (slider.index == 2) {
				
				slider.index = 0;
				
			} else {
				
				slider.index++;
				
			}				

		});
		
	},
	
	init : function(className,bgName){
		
		var cName = $(className).eq(0),
			bName = $(bgName);

		this.autoPlay(cName,bName);
		this.beforeBg(cName,bName);
		this.nextBg(cName,bName);
		
	}
	
};

slider.init(".box",".bg1");