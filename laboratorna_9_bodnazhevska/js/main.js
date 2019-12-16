

var logo_bul = false;
var mas_button = document.getElementsByClassName("menu_but");
var mas_context = document.getElementsByClassName("cont");
var mas_images = ['images/story.jpg','images/story.jpg','images/retailers.jpg','images/retailers.jpg'];


function show_menu(){
    $(".menu_but_1").animate({
        'margin-left':'8vw',
        'margin-top' : '-4vh'
    },2000);
    setTimeout(function(){
        $(".menu_but_1").animate({
        'margin-left':'13vw',
        'margin-top' : '-12vh'
    },1000);
    },2000);
    $(".menu_but_2").animate({
        'margin-left':'15vw',
        'margin-top' : '20vh'
    },2000);
    setTimeout(function(){
        $(".menu_but_2").animate({
        'margin-left':'0vw',
        'margin-top' : '-3vh'
    },1000);
    },2000);
    $(".menu_but_3").animate({
        'margin-left':'0vw',
        'margin-top' : '6vh'
    },2000);
    setTimeout(function(){
        $(".menu_but_3").animate({
        'margin-left':'16vw',
        'margin-top' : '-1vh'
    },1000);
    },2000);
    $(".menu_but_4").animate({
        'margin-left':'10vw',
        'margin-top' : '6vh'
    },2000);
    setTimeout(function(){
        $(".menu_but_4").animate({
        'margin-left':'8vw',
        'margin-top' : '3vh'
    },1000);
    },2000);
    // $(".me
}
function hide_menu(){
    $(".menu_but").animate({
    'margin-top':'-600px',
    'margin-left':'0px'
},3000)
    $(".menu_but_3").animate({
    'margin-left':'45px'
},3000)
    $(".menu_but_4").animate({
    'margin-left':'-45px'
},3000)
}

function control_menu(){
    if(logo_bul){
        hide_menu();
        
    }else{
        show_menu();
    }
    logo_bul = !logo_bul;
}

function show_context(iter){
    for(var i = 0; i < mas_context.length; i++){
        mas_context[i].style.display = 'none';
    }
    
    $("#toop").animate({
        'opacity': '100%'
    },1000);
    
    big_text();

    setTimeout(function(){
        document.getElementById("c_" + iter).style.display = 'block';
        norm_text(iter);
        ch_fon(iter);
    },1000);

}

function big_text(iter){
    $("#cont").animate({
        'font-size':'3vw'
    },1000)
}

function norm_text(iter){
    $("#cont").animate({
        'font-size':'2.5vw'
    },1000)
}

function ch_fon(iter){
    document.getElementById("wrap").style.background = "url('"+ mas_images[iter - 1] +"')";
    $("#toop").animate({
        'opacity': '20%'
    },1000);
    

}

document.getElementById("logo").addEventListener("click",control_menu);
// document.getElementById("logo-inner").addEventListener("mouseout",hide_menu);
for(var i = 0; i < mas_button.length; i++){
    mas_button[i].addEventListener("click",function(){show_context(this.value)})
}
show_context(4);