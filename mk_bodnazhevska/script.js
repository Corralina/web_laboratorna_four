// $(document).ready(function(){
// 	$('.block-in').on('click', megaSlider);
// });

var i = 0;
var z = 0;
var mas = document.getElementsByClassName("block-in");
var mas_b = document.getElementsByName("br");
var mas_ch = document.getElementsByName("che");
var mas_menu = document.getElementsByClassName("m");
var mas_cont = document.getElementsByName("content");
// var mas_block = document.getElementsByName("r");
var frame = document.getElementById("frames");

function slide(){
	if (i == - ((mas.length) * 800)) {
		i = 0;
		z = 0;
	}else{
		i -= 800;
		z += 1;
	}
	megaSlider();
	mas_b[z].checked = true;
}
function slide_b(k){
	i = -800*k;
	console.log(k);
	z = +k;
	megaSlider();

}
function megaSlider(){
	$("#mega-slider").animate({
		'margin-left' : i + "px"
	}, 1000);

}
function megaText(bbb,text){
	if(bbb.checked){
		document.getElementById(text).removeAttribute("class");
		document.getElementById(text).setAttribute("class", "bl");
	}else{
		document.getElementById(text).removeAttribute("class");
		document.getElementById(text).setAttribute("class", "bs");

	}
}

function show_menu(elm){
	$('.mm').animate({
		'width' : '0px',
		'height' : '0px'
	},10);
	$(".b_"+elm).animate({
		'width' : '20%'
	},10);
	$(".b_"+elm).animate({
		'height' : '100px'
	},500);
}

function show_block(elm){
	// for (var x = 0; x < mas_block.length; x++) {
	// 	mas_block[x].removeAttribute("class");
	// 	mas_block[x].setAttribute("class", "r_f");
	// }
	$('.mm').animate({
		'width' : '0px',
		'height' : '0px'
	},10);
	frame.src = elm + ".html";
	
	// svg.getElementById("svg_map").style.display = "none";

	// document.getElementById(elm).removeAttribute("class");
	// document.getElementById(elm).setAttribute("class", "r_t");
}

// function show_map(){

// 	for (var x = 0; x < mas_block.length; x++) {
// 		mas_block[x].removeAttribute("class");
// 		mas_block[x].setAttribute("class", "r_f");
// 	}
// 	$('.mm').animate({
// 		'width' : '0px',
// 		'height' : '0px'
// 	},10);
// 	// svg.getElementById("svg_map").style.display = "block";
// }



for(var x = 0; x < mas_b.length; x++ ){
	mas_b[x].addEventListener("click", function(){
		slide_b(this.value);
	});
}
for (var x = 0; x < mas_ch.length; x++) {
	mas_ch[x].addEventListener("click", function(){
		megaText(this,this.value);
	})
}console.log(mas_menu);
for (var x = 0; x < mas_menu.length; x++) {

	mas_menu[x].addEventListener("click", function(){
		show_menu(this.value);
	})
}
for (var x = 0; x < mas_cont.length; x++) {

	mas_cont[x].addEventListener("click", function(){
		show_block(this.value);
	})
}
// for (var x = 0; x < mas_block.length; x++) {
// 	mas_block[x].setAttribute("class", "r_f");
// }






	

setInterval(slide,3000);





