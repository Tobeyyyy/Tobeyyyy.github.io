window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.onbeforeunload;//return to top when refresh page

//set image cover to clear after 5s
setTimeout(function(){
    //hide cover page to bottom
	$('img#cover').css("display","none");
	
}, 5000);

