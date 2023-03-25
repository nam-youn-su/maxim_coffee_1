$(function(){
	$("div.pro").hover(function(){
		$(this).children("a.pro_over").show();
	},function(){
		$("a.pro_over").hide();
	});//hover
	
	$("div.pro_tab>ul>li").click(function(){
		var proTap=$(this).attr("rel");
		$("#prodect_tap_1,#prodect_tap_2,#prodect_tap_3,#prodect_tap_4").hide();
		$("#"+proTap).show();
	});//click
	
	$("div.pro_tab>ul>li:nth-child(1)").click(function(){
		$(".pro_tap_line").animate({"marginLeft":"0%"});
	});//click
	$("div.pro_tab>ul>li:nth-child(2)").click(function(){
		$(".pro_tap_line").animate({"marginLeft":"25%"});
	});//click
	$("div.pro_tab>ul>li:nth-child(3)").click(function(){
		$(".pro_tap_line").animate({"marginLeft":"50%"});
	});//click
	$("div.pro_tab>ul>li:nth-child(4)").click(function(){
		$(".pro_tap_line").animate({"marginLeft":"75%"});
	});//click
	
	
});//document.ready