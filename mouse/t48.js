// JavaScript Document
(function ($) {
	$.fn.extend({
		
		yidong : function (child) {
			
			var h = this.height(),
				w = this.width(),
				direction = "",
				dirName = "";
			
			child.css({
				top : h,
			});
			
			this.on("mouseenter mouseleave",function (evt) {
				var evt = evt || event,
					offsetX = evt.offsetX,
					offsetY = evt.offsetY;
				var angle = Math.atan((offsetX - w/2)/(offsetY - h/2)) * 180 / Math.PI;
				
				if (angle > -45 && angle < 45 && offsetY > h/2) {
					
					direction = "down";
					
				}
				if (angle > -45 && angle < 45 && offsetY < h/2 ) {
					
					direction = "up";
					
				}
				
				if (((angle > 45 && angle < 90) || (angle > -90 && angle < -45)) && (offsetX < w/2)) {
					
					direction = "left";
					
				}
				if (((angle > 45 && angle < 90) || (angle > -90 && angle < -45)) && (offsetX > w/2)) {
					
					direction = "right";
					
				}
				move(evt.type,direction);
			});
			
			var move = function (a,b) {
				if (a == "mouseenter") {
					switch (b) {
						case "down" :
							child.css({
								top : h,
								left : 0,
							}).stop(true,true).animate({
								top : 0,
							});
							break;
						case "up" :
							child.css({
								left : 0,
								top : -h,
							}).stop(true,true).animate({
								top : 0
							});
							break;
						case "left" :
							child.css({
								top : 0,
								left : -w,
							}).stop(true,true).animate({
								left: 0
							});
							break;
						case "right" :
							child.css({
								top : 0,
								left : w,
							}).stop(true,true).animate({
								left : 0,
							});
							break;
					}
				} else {
					switch (b) {
						case "down" :
							child.stop(true,true).animate({
								top : h,
							});
							break;
						case "up" :
							child.stop(true,true).animate({
								top : -h,
							});
							break;
						case "left" :
							child.stop(true,true).animate({
								left : -w,
							});
							break;
						case "right" :
							child.stop(true,true).animate({
								left : w,
							});
					}
				}
			};
		}
	});
})(jQuery);

$("#container").yidong($("#box"));