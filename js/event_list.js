$(function(){
	
	$("div.event_tab>ul>li").click(function(){
		var eventTap=$(this).attr("rel");
		$(".event_bottom_menu_1,.event_bottom_menu_2,.event_bottom_menu_3").hide();
		$("."+eventTap).show();
		return false;
	});//click
	
	$("div.event_tab>ul>li:nth-child(1)").click(function(){
		$(".event_tap_line").animate({"marginLeft":"0%"});
		return false;
	});//click
	$("div.event_tab>ul>li:nth-child(2)").click(function(){
		$(".event_tap_line").animate({"marginLeft":"33.333%"});
		return false;
	});//click
	$("div.event_tab>ul>li:nth-child(3)").click(function(){
		$(".event_tap_line").animate({"marginLeft":"66.666%"});
		return false;
	});//click
	
	$(".event_bottom_menu_2 a").click(function(){
		alert("종료된 이벤트 입니다.");
		return false;
	});//click
	
	
});//document.ready