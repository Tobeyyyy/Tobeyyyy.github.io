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