function showvideo(x){
	var thistarget=x.className;
	if (thistarget.indexOf('netsuite-inventory-transfer')){
		$('#netsuite-project-1').style.display="block"
	}
	console.log(x.className);
}

