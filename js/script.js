function showvideo(x) {
  var thistarget = x.className;
  if (thistarget.indexOf("netsuite-inventory-transfer")) {
    if ($("#netsuite-project-1").css("display") == "none") {
      $("#netsuite-project-1").css("display", "block");
    } else {
      $("#netsuite-project-1").css("display", "none");
    }
  }
  console.log(x.className);
}

function alertvideo() {
  if ($("p.showandhide").css("display") == "none") {
    $("p.showandhide").css("display", "block");
  } else {
    $("p.showandhide").css("display", "none");
  }
}

//Firebase
function connectDB(thisip) {
  //initialize firebase
  var config = {
    apiKey: "AIzaSyA7l48kyYuE6YJzofESse0Wlhcw4WdhUUo",
    authDomain: "tobeyyyy-github.firebaseio.com",
    databaseURL: "https://tobeyyyy-github.firebaseio.com",
    projectId: "tobeyyyy-github",
    storageBucket: "tobeyyyy-github.appspot.com",
    messagingSenderId: "600571938704",
  };
  firebase.initializeApp(config);
  var helloMessageReference = firebase.database().ref("WebsiteVisit");
  var newarrayRef = helloMessageReference.push();
  newarrayRef.set(thisip);
}

function visitorInfo() {
  var today = new Date();
  var m = today.getMonth() + 1;
  var d = today.getDate();
  var t = today.getHours();
  var mi = today.getMinutes();
  var currentTime = m + "/" + d + " " + t + ":" + mi;

  var ipArray = {};
  $.get("https://ipapi.co/json", function (data, status) {
    ipArray["city"] = data.city;
    ipArray["country"] = data.country;
    ipArray["ip"] = data.ip;
    ipArray["org"] = data.org;
    ipArray["city"] = data.city;
    ipArray["region"] = data.region;
    ipArray["currentTime"] = currentTime;
    ipArray["version"] = "V.main";
    //  console.log(data);
    connectDB(ipArray);
    //console.log(current);
  });
}

visitorInfo();

//mobile navigation setup
$(".navigation-mobile").click(function () {
  if ($(".navigation-button-mobile").css("display") == "block") {
    $(".navigation-button-mobile").css("display", "none");
  } else {
    $(".navigation-button-mobile").css("display", "block");
  }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
