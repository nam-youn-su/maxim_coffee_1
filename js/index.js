$(function(){
	var $owl=$("#owl-example").owlCarousel({ singleItem:true });
	
	$(".sd_prev").click(function(){
		$owl.trigger("owl.prev");
		return false;
	});//click
	
	$(".sd_next").click(function(){
		$owl.trigger("owl.next");
		return false;
	});//click
	
//	$(".owl-carousel").hover(function(){
//		$owl.trigger("owl.stop");
//	},function(){
//		$owl.trigger("owl.play",2500);		
//	});//hover
	
	$owl.trigger("owl.play",2500);
	
	
	var newPro=$("div.new_slide").bxSlider({
	      mode:"horizontal",//수평방향으로 이동합니다
		  speed:500,//이동속도(500:0.5초)
		  moveSlides:1,//이동슬라이드수
		  slideWidth:300,//각슬라이드폭
		  minSlides:3,//최소노출슬라이드수
		  maxSlides:3,//최대노출슬라이드수
		  slideMargin:30,//슬라이드간의 간격
		  auto:true,//자동슬라이드여부
		  autoHover:true,//마우스오버시자동정지
		  pager:false,//페이징표시제어숨김
		  controls:false//이전 다음버튼을 숨긴다
	});//bxSlider

	$(".prev_btn").click(function(){
		newPro.goToPrevSlide();
		return false
	});//click
	
	$(".next_btn").click(function(){
		newPro.goToNextSlide();
		return false
	});//click
	
		$(window).scroll(function(){
		var scroll_pick=$(this).scrollTop();
		if(scroll_pick>=1300){
			$(".pick_your_box").stop().animate({opacity:"1"},200);
		}else{
			$(".pick_your_box").stop().animate({opacity:"0"},200);
		}//if
	});//scroll
	
	
   var video_zone=document.getElementById("video_img");
   var video_a=video_zone.getElementsByTagName("a");   
   
   for( var i = 0; i<video_a.length;  i++ ){
      //처음인덱스번호 i변수 저장
      //작은그림 전체개수 10보다 작으면 계속증가반복해      
      video_a[i].onclick=function(){//a인덱스번호 클릭할때      
      var ph=document.getElementById("video_box").children[0];
         //변수 ph에 #photo의 첫번째 자식요소를 할당하고               
         ph.src=this.href;
         //photo메인그림을 인덱스 차례에 해당자식의 연동 큰 그림으로 바꿔
         return false;
      }//onclick      
   };//for

	
	$(".promotion_left").hover(function(){
		$( '.promotion_left>a>img' ).removeAttr( 'src' );
		$( '.promotion_left>a>img' ).attr( 'src','img/promotion/index_proimg_1_over.jpg');
	},function(){
		$( '.promotion_left>a>img' ).removeAttr( 'src' );
		$( '.promotion_left>a>img' ).attr( 'src','img/promotion/index_proimg_1.jpg');
	});//hover
	
	$(".promotion_right").hover(function(){
		$( '.promotion_right>a>img' ).removeAttr( 'src' );
		$( '.promotion_right>a>img' ).attr( 'src','img/promotion/index_proimg_2_over.jpg');
	},function(){
		$( '.promotion_right>a>img' ).removeAttr( 'src' );
		$( '.promotion_right>a>img' ).attr( 'src','img/promotion/index_proimg_2.jpg');
	});//hover
	
	$(window).scroll(function(){
		var proMotion=$(this).scrollTop();
		if(proMotion>=3100){
			$("#promotion_section").addClass("active");
		}else{
			$("#promotion_section").removeClass("active");
		}//if
	});//scroll
	
	//팝업
		if($.cookie("pop")!="no")$(".pop").fadeIn("slow");//if		
		$(".pop").css("cursor","move").draggable();		
		
		$('#pop').children('area').last().click(function(){
					$('.pop').fadeOut('fast');
					return false;
		});//닫기 click
		
		$('#pop').children('area').first().click(function(){			
			$.cookie("pop","no",{expires:1}); /*expires만료일*/
			/*하루동안 pop로 쿠키값 no 가 저장*/
					$('.pop').fadeOut('fast');
					return false;
		});//하루동안닫기click
	
});//document.ready