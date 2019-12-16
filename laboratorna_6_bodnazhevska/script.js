var images = ['images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg', 'images/05.jpg'];
var slide_1, slide_2;
var last, now;
var iter = true;

var radios = document.getElementsByName("br");
console.log(radios);
for(var i = 0; i < radios.lenght; i++){
	radios[i].addEventListener("click", function(){run(this.value)})
}



now = 1;


function run(int){
	if (int == -1) {
		if (now == 4) {
			now = 0;
		}else{
			now += 1;
		}

	}else{
		now = int;
	}
	
document.getElementById("bosd").style.backgroundImage = "url('" + images[now] + "')";
$( "#bos" ).fadeOut( 2000, function() {
  });
 
 

 setTimeout(function(){newimg()},2000);
}

function newimg(){
	radios[now].checked = true;
	document.getElementById("bos").style.backgroundImage = "url('" + images[now] + "')";
	$( "#bos" ).fadeIn( 10, function() {
  });

}


document.getElementById("bos").style.backgroundImage = "url('" + images[0] + "')";
run(-1);

setInterval(function(){run(-1)},5000);


// var bl_1 = document.createElement("div");
// bl_1.style.backgroundImage = "url('" + images[now] + "')";
// bl_1.setAttribute("class", "slide_1");
// document.getElementById('bos').appendChild(bl_1);


// function show(index){
// 	if (index == 100) {
// 		if (now == images.lenght) {
// 			last = 0;
// 		}else{
// 			last = now + 1;
// 		}
// 	}else{
// 		last = index;
// 	}
// 	var bl_2 = document.createElement("div");
// 	bl_2.style.backgroundImage = "url('" + images[last] + "')";
// 	bl_2.setAttribute("id","bl");
// 	bl_2.opacity = "0%";
// 	bl_2.setAttribute("class", "slide_1");
// 	document.getElementById('bos').appendChild(bl_2);
// 	$('#bl_2').animate({
// 		'opacity' : '100%'
// 	},2000);
// 	now = last;
// 	iter != iter;

// }
// function slick(){
// 	slide_1.style.backgroundImage = "url('" + images[last] + "')";
// 	$('#slide_2').animate({
// 		'opacity' : '0%'
// 	},2000);
// 	slide_2.style.opacity = "0%";
// 	slide_2.style.backgroundImage = "url('" + images[last] + "')";
// }
// function slick_2(){
// 	slide_2.style.backgroundImage = "url('" + images[last] + "')";
// 	$('#slide_2').animate({
// 		'opacity' : '100%'
// 	},2000);
	
// }






// setInterval(function(){show(100)},3000);