$(()=>{
	var arr2=["Dragon Fin Soup Ridding","Girl Dragon fantasy sword wing","Danger bear guy pistol moment"]
	var index=0;
	$(".right").click(function(){
		index++;
		if(index==3){
			index=0;
		}
		$($(".carousel .img img")[index]).addClass("active");
		$($(".carousel .img img")[index]).siblings().removeClass("active");
		$(".carousel .img .info h4").html(`${arr2[index]}`);
		
	})
	$(".left").click(function(){
		index--;
		if(index==-1){
			index=2;
		}
		$($(".carousel .img img")[index]).addClass("active");
		$($(".carousel .img img")[index]).siblings().removeClass("active");
		$(".carousel .img .info h4").html(`${arr2[index]}`);
		
	})
	setInterval(()=>$(".right").click(),3000);
})
//模态框
$(()=>{
	$(".col-lg-4 .img").click(function(){
		$(".model").css("display","block");
		var i = $(this).parent().index();
		$($(".model .img img")[i]).addClass("active");
		$($(".model .img img")[i]).siblings().removeClass("active");
		setTimeout(()=>{
			$(".model .img").css("transform","scale(1)");
			$(".model .img").css("opacity","1");
		},10);
		$(".model .click span:nth-of-type(3)").click(function(){
			i++;
			if(i==9){
				i=0;
			}
			$($(".model .img img")[i]).addClass("active");
			$($(".model .img img")[i]).siblings().removeClass("active");
			
		})
		$(".model .click span:nth-of-type(1)").click(function(){
			i--;
			if(i==-1){
				i=8;
			}
			$($(".model .img img")[i]).addClass("active");
			$($(".model .img img")[i]).siblings().removeClass("active");
			
		})
		var sw=window.screen.width;
		if(sw>767){
			$(".model .click span:nth-of-type(2)").click(function(){
				$(".gallery .model .menu").css("bottom","0");
				$($(".model .menu .list .img")[i]).addClass("active");
				$($(".model .menu .list .img")[i]).siblings().removeClass("active");
			})
		}else if(sw<=767){
			$(".model .click span:nth-of-type(2)").click(function(){
				$(".gallery .model .menu").css("bottom","100px");
				$($(".model .menu .list .img")[i]).addClass("active");
				$($(".model .menu .list .img")[i]).siblings().removeClass("active");
			})
		}
		
		$(".model .menu .list .img").click(function(){
			i=$(this).index();
			$($(".model .img img")[i]).addClass("active");
			$($(".model .img img")[i]).siblings().removeClass("active");
			$($(".model .menu .list .img")[i]).addClass("active");
			$($(".model .menu .list .img")[i]).siblings().removeClass("active");
		})
	})
	
	$(".model .menu .nav span:nth-of-type(2)").click(function(){
		$(".gallery .model .menu").css("bottom","-40%");
	})
	
	$(".model .head .back").click(function(){
		$(".gallery .model").css("display","none");
		$(".model .img").css("opacity","0");
		$(".model .img").css("transform","scale(.3)");
	})
})
//新闻
$(()=>{
	var sw=window.screen.width;
	console.log(sw)
	if(sw>787){
		var index=0;
		$(".news .button button:last").click(function(){
			index++;
			if(index==5){
				index=0;
			}
			$(".news .img-box ").css("left",(-25)*index+"%");
		})
		$(".news .button button:first").click(function(){
			index--;
			if(index==-1){
				index=4;
			}
			$(".news .img-box ").css("left",(-25)*index+"%");
		})
	}else if(sw<=787){
		var index=0;
		$(".news .button button:last").click(function(){
			index++;
			if(index==8){
				index=0;
			}
			$(".news .img-box ").css("left",(-100)*index+"%");
		})
		$(".news .button button:first").click(function(){
			index--;
			if(index==-1){
				index=7;
			}
			$(".news .img-box ").css("left",(-100)*index+"%");
		})
	}
	setInterval(()=>$(".news .button button:last").click(),4000)
})


$(()=>{
	$(".contact .input").click((e)=>{
		e=e||window.event;
		var target=e.target||e.srcElement;
		if(target.nodeName=="LABEL"){
			  $(target).css({
			  	"top":"-50%",
			  	"height":"29px",
			  	"font-size":"7px",
			  	"border":"none",
			  	"padding":"9px 0"
			  })
		}
	})
	$(".contact .input input").blur((e)=>{
		e=e||window.event;
		var target=e.target||e.srcElement;
		if(target.nodeName=="INPUT"){
			$(target).next().css({
				"top":0,
			  	"height":"58px",
			  	"font-size":"14px",
			  	"border":"1px solid #e4e4e4",
			  	"padding":"18px 0"
			})
		}
	})
})

//返回顶部
$(()=>{
	$(".toTop").click(function(){
		$('html,body').animate({scrollTop: '0px'},800);
	})
})
