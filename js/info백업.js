$(function(){
	var ht = $(window).height();
	$("section").css("height",ht);
	
	$(window).load(function(){
		$(".section1_text p").eq(0).css({"opacity":1});
		$(".section1_text p").eq(1).css({"opacity":1});
	});//load	
	
	$(".gnb li").hover(function(){
		$(this).find("span:not(:animated)").fadeIn("fast");
		$(this).find("a").addClass("on");
	},function(){
		$(this).find("span").fadeOut("fast");
		$(".gnb a").removeClass("on");
	});//hover
	

	$(window).scroll(function(){
			alert("asdf");
		});//scroll
	
	$(".gnb li").click(function(){
		$(".gnb a").removeClass("on");
		$(".gnb a").removeClass("real_on");
		
		$(this).find("a").addClass("real_on");		
		return false;
	});//click
	
	 $('#fullpage').fullpage({
		 navigation:true,
		 slidesNavigation:true,
	 });//fullpage

});//document.ready