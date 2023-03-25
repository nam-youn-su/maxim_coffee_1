$(function(){
	var ht = $(window).height();
	$("section").css("height",ht);
	
	$(window).load(function(){
		$(".section1_text p").eq(0).css({"opacity":1});
		$(".section1_text p").eq(1).css({"opacity":1});
	});//load	
	
	var vid=document.getElementById("bgvid");
		vid.addEventListener("click",function(){			
//		vid.classList.toggle("stopfade");//css에 .stopfade 를 토글~
		if(vid.paused){
			vid.play();
		} else {
			vid.pause();
		}//if
	});//addEventListener는 여러개의 이벤트 핸들러를 등록할수있는 권장되는 방식
	

	 $('#fullpage').fullpage({
		 navigation:true,
		 slidesNavigation:true,
	 });//fullpage

});//document.ready