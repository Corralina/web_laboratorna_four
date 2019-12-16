







// const wrapper = document.querySelector('.wrapper');
const bars = Array.from(document.querySelectorAll('.sl'));
mas_img = ['img/1.jpg','img/2.jpg'];
var count_img = 0;

var t_str, t_fon, t_r, t_g, t_b, t_identificator; 

t_fon = document.getElementById("bod");
t_r = 30;
t_g = 30;
t_b = 30;
t_identificator = true;


function voot() {
  bars.forEach((bar) => {
     bar.classList.add('flipInY');
    setTimeout(() => {
      bar.classList.remove('flipInY');
    }, 300);    
  });
};


function txt_size(){
  $(".txt_size").animate({
        'font-size':'700%'
    },1000);
  setTimeout(function(){
    $(".txt_size").animate({
        'font-size':'400%'
    },1000);
  },1000)

}

function img_ch(){
  if(count_img == mas_img.length - 1){
    count_img = 0;
  }else{
    count_img += 1;
  }
  $(".img_ch").animate({
        'width':'0px'
    },500);
  setTimeout(function(){
    document.getElementById('img_ch').style.background = "url('"+ mas_img[count_img] +"')";
    $(".img_ch").animate({
        'width':'500px'
    },500);
  },500)
}

function body_color(){
  if(t_g > 190 || t_r < 30){
    t_identificator = !t_identificator;
  }
  if (t_identificator) {
      t_g += 5;
      t_r += 5;
      t_b += 5;
  }else{
      t_g -= 5;
      t_r -= 5;
      t_b -= 5;
  }
  t_str = "rgba(" + t_r + "," + t_g + "," + t_b + ", 0.5)";
  t_fon.style.backgroundColor = t_str;
  

}

voot();
txt_size();
img_ch();
setInterval(function() {body_color()}, 100);
setInterval(function() {voot()}, 5000);
setInterval(function() {img_ch()}, 2000);
setInterval(function() {txt_size()}, 1000);