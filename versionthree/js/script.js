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

function getVisitorInfo(){
		var today = new Date();
		var m = today.getMonth()+1;
		var d=today.getDate();
		var t=today.getHours();
		var mi=today.getMinutes();
		var currentTime= m+'/'+d+' '+t+':'+mi;
		
		function ipLookUp () {
            var ipArray={};
			$.get("https://ipapi.co/json", function(data, status){
                  ipArray['city']=data.city;
                  ipArray['country']=data.country;
                  ipArray['ip']=data.ip;
                  ipArray['org']=data.org;
                  ipArray['city']=data.city;
                  ipArray['region']=data.region;
				  ipArray['currentTime']=currentTime;
                  console.log(data);
                  connectDB(ipArray);
				 //console.log(current);
			});
		}
        ipLookUp();
  //Firebase
        function connectDB(thisip){
            //initialize firebase
            var config={
                apiKey:"AIzaSyA7l48kyYuE6YJzofESse0Wlhcw4WdhUUo",
                authDomain:"tobeyyyy-github.firebaseio.com",
                databaseURL:"https://tobeyyyy-github.firebaseio.com",
                projectId:"tobeyyyy-github",
                storageBucket:"tobeyyyy-github.appspot.com",
                messagingSenderId:"600571938704"
            }
            firebase.initializeApp(config);
            var helloMessageReference=firebase.database().ref("WebsiteVisit");
            var newarrayRef=helloMessageReference.push();
            newarrayRef.set(thisip);
        }
}

getVisitorInfo();