// JavaScript Document

var	change = true;

$(".btn1").click(function (evt) {
	
	evt.preventDefault();
	
	var random = Math.floor(Math.random()*250),
		random1 = Math.floor(Math.random()*250),
		random2 = Math.floor(Math.random()*250);
	
	var text = $(".inp").eq(0).val(),
		$p = $("<p></p>");
	
	$("#box").css("display","block");
	
	$p.css({
		
		position : 'absolute',
		right: 0,
		top : Math.random()*$("#box").height(),
		color : 'rgb('+random+','+random1+','+random2+')'
		
	}).append(text).animate({
		
		"right" : "1350px"
		
	},20000,function () {
		
		$(this).remove();
		
	});
	
	$("#box").append($p);
	
	$(".inp").eq(0).val("");
	
});

$(".btn2").click(function () {
	
	$("#box").empty();
	
});

$(".btn3").click(function () {
	
	$(this).css("display" , "none");
	$("#box").css("display" , "none");
	$(".btn4").css("display", "block");
		
});

$(".btn4").click(function () {
	
	$(this).css("display" , "none");
	$("#box").css("display" , "block");
	$(".btn3").css("display", "block");
	
})

