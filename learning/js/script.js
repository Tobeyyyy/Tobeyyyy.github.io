function showvideo(x){
	var thistarget=x.className;
	if (thistarget.indexOf('netsuite-inventory-transfer')){
		if ($('#netsuite-project-1').css('display')=='none'){
					$('#netsuite-project-1').css('display','block');
			}else{
				$('#netsuite-project-1').css('display','none');
			}
	}
	console.log(x.className);
}

function alertvideo(){
	if ($('p.showandhide').css('display')=='none'){
		$('p.showandhide').css('display','block');
	}else{
		$('p.showandhide').css('display','none');

	}
}


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

$(window).resize(function() {
	var height = $(window).height();
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
