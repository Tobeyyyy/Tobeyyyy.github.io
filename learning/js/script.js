


//menu button
$('#menu-icon').click(function(){
	if($('.nagivation-container')[0].style['position']=='initial'){
		$('.nagivation-container').css('position','fixed');
	}else{
		$('.nagivation-container').css('position','initial');
	}
});

//responsive height
//console.log(parseInt($('.nagivation').css('height')));//initial height
$('#home').css('height',window.innerHeight-parseInt($('.nagivation').css('height')));
$('#aboutme').css('height',window.innerHeight);
$('#portfolio').css('height',window.innerHeight);
$('#experience').css('height',window.innerHeight);
var height = $(window).height();
var width = $(window).width();

/*	if(parseInt(width)<=600){
		$('#navigation-logo').click(function(){
			console.log('click');
			if($('.nagivation-container').css('visibility')=='visible'){
				('.nagivation-container').css('visibility')=='hidden';
			}else{
			
			}
		});
	}*/
$(window).resize(function() {
	
	$('#home').css('height',window.innerHeight-parseInt($('.nagivation').css('height')));
	$('#aboutme').css('height',window.innerHeight);
	$('#portfolio').css('height',window.innerHeight);
	$('#experience').css('height',window.innerHeight);
	
});

$(window).scroll(function() {
	 var scroll = $(window).scrollTop();
	 if(scroll <10){
		 $('div#menu-icon').css('visibility','hidden');
		 $('.nagivation-container').css('position','initial');
	 }else{
	 	$('div#menu-icon').css('visibility','visible');
	 }
});
