$(function(){
//네비게이션popup	
		$(".product_li_1").mouseenter(function(){			
			$( '.right_navi_2>img' ).removeAttr( 'src' );
			$( '.right_navi_2>img' ).attr( 'src','img/nav/product_img_1.jpg');			
		});//mouseEnter1
		
		$(".product_li_2").mouseenter(function(){			
			$( '.right_navi_2>img' ).removeAttr( 'src' );
			$( '.right_navi_2>img' ).attr( 'src','img/nav/product_img_2.jpg');			
		});//mouseEnter2
		
		$(".product_li_3").mouseenter(function(){			
			$( '.right_navi_2>img' ).removeAttr( 'src' );
			$( '.right_navi_2>img' ).attr( 'src','img/nav/product_img_3.jpg');			
		});//mouseEnter3
		
		$(".product_li_4").mouseenter(function(){			
			$( '.right_navi_2>img' ).removeAttr( 'src' );
			$( '.right_navi_2>img' ).attr( 'src','img/nav/product_img_4.jpg');			
		});//mouseEnter4

	$(window).scroll(function(){
		var scroll_top=$(this).scrollTop();

		if(scroll_top>=600){
			$(".quick_menu").css({"top":"400px","position":"fixed"});
		}else{
			$(".quick_menu").css({"top":"1000px","position":"absolute"});
		}//else
	});//scroll
	
	$(".quick_menu a").hover(function(){
		$(this).children("span").fadeIn(200);
	},function(){
		$(".quick_menu a").children("span").fadeOut(200);
	});//hover
	
	$(".top_btn").click(function(){
		$("html,body").stop().animate({	scrollTop:0	},500);
		return false;
	})//click
	
	$(".M_menu_btn").click(function(){
		$(".M_header_content:not(:animated)").slideToggle(500);
		return false;
	});//click
	
	$(".M_menu").click(function(){
		$(".M_navi_list:not(:animated)").slideUp(500);
		$(this).next().slideDown(500);
		return false;
	})//click
	
	var Xbtn=$(".M_menu_btn");	
	$(".M_menu_btn").click(function(){		
		Xbtn.toggleClass("X_btn");		
		if(Xbtn.hasClass("X_btn")){			
			$(this).children("span").eq(1).stop().animate({"opacity":"0"},30);
			$(this).children("span").eq(0).stop().animate({top:"50%"},50).css({"transform":"rotate(45deg)"});
			$(this).children("span").eq(2).stop().animate({top:"50%"},50).css({"transform":"rotate(-45deg)"});
			$("div.quick").stop().animate({right:0},300);
			$(".quick_menu").stop().animate({right:"330px"},300);
		}else{
			$(this).children("span").eq(1).stop().animate({"opacity":"1"},30);
			$(this).children("span").eq(0).stop().animate({top:"0%"},50).css({"transform":"rotate(0deg)"});
			$(this).children("span").eq(2).stop().animate({top:"100%"},50).css({"transform":"rotate(0deg)"});
			$("div.quick").stop().animate({right:-300},300);
			$(".quick_menu").stop().animate({right:"30px"},300);
		}//if
		return false;
	});//click	

});//document.ready