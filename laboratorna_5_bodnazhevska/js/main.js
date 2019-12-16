let interval;
var f_img, f_result, f_lens, fx_start, fy_start, fx_stop, fy_stop, f_cx, f_cy, f_x, f_y, f_identificator;
var s_img, s_result, s_lens, sx_start, sy_start, sx_stop, sy_stop, s_cx, s_cy, s_ide, s_ige, s_identificator;
var t_text, t_fon, t_str, t_r, t_g, t_b, t_identificator, tt_r, tt_g, tt_b;
var four_mas, four_to, four_obj, four_identificator;


//FIRST
fx_start = 84;
fy_start = 140;
fx_stop = 216;
fy_stop = 215;  
f_x = fx_start;
f_y = fy_start;
f_cx = 0;
f_cy = 0;

f_img  = document.getElementById("first1_image");
f_result = document.getElementById("f_1_c2");
f_lens = document.createElement("DIV");
f_lens.setAttribute("class", "f_cube_bord");
f_img.parentElement.insertBefore(f_lens, f_img);
f_result.style.backgroundImage = "url('" + f_img.src + "')";
f_result.style.backgroundSize = 1400 + "px " + 800 + "px";
f_lens.style.left = fx_start + "px";
f_lens.style.top = fy_start + "px";
f_identificator = true;



//SECOND
sx_start = 844;
sy_start = 140;
sx_stop = 975;
sy_stop = 215;  
s_x = sx_start;
s_y = sy_start;
s_cx = 0;
s_cy = 0;
s_ide = true;
s_ige = true;
s_identificator = true;

s_img  = document.getElementById("first2_image");
s_result = document.getElementById("f_2_c2");
s_lens = document.createElement("DIV");
s_lens.setAttribute("class", "s_cube_bord");
s_img.parentElement.insertBefore(s_lens, s_img);
s_result.style.backgroundImage = "url('" + s_img.src + "')";
s_result.style.backgroundSize = 1400 + "px " + 800 + "px";
s_lens.style.left = sx_start + "px";
s_lens.style.top = sy_start + "px";


//THREE
t_text = document.getElementById("s_text");
t_fon = document.getElementById("s_1");
t_r = 20;
t_g = 60;
t_b = 30;
tt_r = 180;
tt_g = 220;
tt_b = 190;
t_identificator = true;


//FOUR
four_mas = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];
four_to = -1;
four_obj = document.getElementById("img");
four_identificator = true;




function first(){
  if (f_identificator){
    f_x += 1;
  }else{
    f_y += 1;
  }
  if (f_y < fy_start) {f_y = fy_stop}
      else if (f_y > fy_stop) {f_y = fy_start}
  if (f_x < fx_start) {f_x = fx_stop}
      else if (f_x > fx_stop) {f_x = fx_start}

  f_lens.style.left = f_x + "px";
  f_lens.style.top = f_y + "px";
  f_result.style.backgroundPosition = "-" + (f_x *8 - fx_start*8) + "px -" + (f_y*8 - fy_start*8) + "px";


}

function second(){
if (s_identificator) {
  if (s_x < sx_start) {
    s_ide = !s_ide;
  }else if(s_x > sx_stop){
    s_ide = !s_ide;
  }

  if (s_ide) {
    s_x += 1;
  }else{
    s_x -= 1;
  }
}else{
  if (s_y < sy_start) {
    s_ige = !s_ige;
  }else if(s_y > sy_stop){
    s_ige = !s_ige;
  }

  if (s_ige) {
    s_y += 1;
  }else{
    s_y -= 1;
  }
}

s_lens.style.left = s_x + "px";
s_lens.style.top = s_y + "px";

    s_result.style.backgroundPosition = "-" + (s_x*8 - sx_start*8) + "px -" + (s_y*8 - sy_start*8) + "px";
}

function three(){
  if(t_g > 220 || t_r < 20){
    t_identificator = !t_identificator;
  }
  if (t_identificator) {
      t_g += 5;
      t_r += 5;
      t_b += 5;
      tt_r -= 5;
      tt_g -= 5;
      tt_b -= 5;
  }else{
      t_g -= 5;
      t_r -= 5;
      t_b -= 5;
      tt_r += 5;
      tt_g += 5;
      tt_b += 5;
  }
  t_str = "rgba(" + t_r + "," + t_g + "," + t_b + ", 0.5)";
  tt_str = "rgb(" + tt_r + "," + tt_g + "," + tt_b + ")";
  t_fon.style.backgroundColor = t_str;
  t_text.style.color = tt_str;

}

function four(){
  if (four_identificator) {
    if (four_to < four_mas.length-1) {
      four_to++;
    } 
    else{
      four_to = 0;
    }
    
  }else{
    if (four_to > 0) {
      four_to--;
    } 
    else{
      four_to = four_mas.length-1;
    }
  }
  four_obj.src = four_mas[four_to]; 
}

function soof(){
  f_identificator = !f_identificator;
  s_identificator = !s_identificator;

}




interval = setInterval(() => first(), 50);
interval = setInterval(() => second(), 50);
interval = setInterval(() => three(), 150);
interval = setInterval(() => four(), 1000);
setInterval(() => soof(), 5000);
