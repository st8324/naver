
var rollingNewsInterval;
var rollingTimesquareInterval;

function startRollingNews(){
	rollingNewsInterval = setInterval(function(){
		if(!$('.rolling-news .news').is(':animated')){
			$('.rolling-news .news').first().animate({'margin-top':'-24px'},900,function(){
				$(this).detach().appendTo('.rolling-news').removeAttr('style');
			})
		}
	},2000);
}
function startRollingTimeSquare(){
	rollingTimesquareInterval = setInterval(function(){
		if(!$('.timesquare-rolling .card').is(':animated')){
			$('.timesquare-rolling .card').first()
			.animate({'margin-left':'-281px'},1000,function(){
				$(this).detach().appendTo('.timesquare-rolling').removeAttr('style');
			})
		}
	},3000);
}
$(function(){
	//화면 로딩 완료후 연합뉴스 롤링
	startRollingNews();
	startRollingTimeSquare();

	$('.rolling-news .news').hover(function(){
		//롤링 중지
		clearInterval(rollingNewsInterval);
	},function(){
		//롤링 재시작
		startRollingNews();
	})

	$('.timesquare-box').hover(function(){
		clearInterval(rollingTimesquareInterval)
	},function(){
		startRollingTimeSquare();
	})
	$('.timesquare-box .prev').click(function(e){
		e.preventDefault();
		if(!$('.timesquare-rolling .card').is(':animated')){
			$('.timesquare-rolling .card').last().detach()
					.prependTo('.timesquare-rolling').css('margin-left','-281px');
			$('.timesquare-rolling .card').first()
					.animate({'margin-left':'0px'},1000);
		}
	})
	$('.timesquare-box .next').click(function(e){
		e.preventDefault();
		if(!$('.timesquare-rolling .card').is(':animated')){
			$('.timesquare-rolling .card').first()
			.animate({'margin-left':'-281px'},1000,function(){
				$(this).detach().appendTo('.timesquare-rolling').removeAttr('style');
			})
		}
	})
})