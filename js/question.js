$(function(){
	$(".Q_question").click(function(){
		$(this).next("p").slideToggle();
		return false;
	});//click
	$("#question a").click(function(){
		return false;
	});//click
});//document.ready