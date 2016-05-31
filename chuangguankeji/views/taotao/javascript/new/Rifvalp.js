$(function(){
	var itemHtml = '<div class="xian"></div>';
	$("ul.navdetailed li").hover(function(){
		var idx=$(this).index();
		$("ul.navdetailed li").eq(idx).children().find("dt,dd").addClass("color");
		$(this).find(".listnav").show();		
	},function(){
		var idx=$(this).index();
		$("ul.navdetailed li").eq(idx).children().find("dt,dd").removeClass("color");
		$(this).find(".listnav").hide();
	})
	$(".leftcenter ul li").click(function(){
		var a=$(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		$(this).append($(itemHtml).clone());
		$(".groupjs>div").eq(a).show().siblings().hide();
		$(this).siblings().children(".xian").remove();
	})
})