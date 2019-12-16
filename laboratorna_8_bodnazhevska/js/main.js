

var masMenuBat = document.getElementsByClassName("mb");
var masFrameBut = document.getElementsByName("content");
var masArea = document.getElementsByName("planet");
var masShow = document.getElementsByClassName("show");
console.log(masShow);
// var fr = document.getElementById("frame");
// fr.src = "home.html";
function show_menu(elm){
  $('.mm').animate({
    'width' : '0px',
    'height' : '0px'
  },10);
  $("." + elm).animate({
    'width' : '25%'
  },10);
  if (elm == "other") {
    $("."+ elm).animate({
    'height' : '80px'
  },500);
  }else{
    $("."+ elm).animate({
    'height' : '160px'
    },500);
  }
}

function chanchFrame(s){
  // console.log(fr.src);
  // fr.src = s + ".html";
  for(var j = 0; j < masShow.length; j++){
    masShow[j].style.display = "none";
  }
  document.getElementById(s).style.display = "block";

  $('.mm').animate({
    'width' : '0px',
    'height' : '0px'
  },10);
}



for(var i = 0; i < masMenuBat.length; i++){
  masMenuBat[i].addEventListener("click", function(){
    show_menu(this.value);
  })
}
for(var i = 0; i < masFrameBut.length; i++){
  masFrameBut[i].addEventListener("click", function(){
    chanchFrame(this.value);
  })
}
for(var i = 0; i < masArea.length; i++){
  masArea[i].addEventListener("click", function(){
    chanchFrame(this.alt);
  })
}
chanchFrame("home_home");

