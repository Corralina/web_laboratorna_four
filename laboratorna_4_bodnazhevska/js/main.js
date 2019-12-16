function imageZoom(imgID, resultID, imgID_r,resultID_r) {
  var img, lens, result, cx, cy, x_start, x_stop, y_start, y_stop;
  var img_r, lens_r, result_r, ck, cz, k_start, k_stop, z_start, z_stop;
  var x, y, k, z;

  var up, down, left, right, number_x, number_y, button_left;
  var up_r, down_r, left_r, right_r;

  var zmina_y = 5;
  var zmina_x = 6;

//Left
  x_start = 25;
  y_start = 4;

  x_stop = 288;
  y_stop = 152;
  
  x = x_start;
  y = y_start;
  cx = 0;
  cy = 0;

  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  lens = document.createElement("DIV");
  lens.setAttribute("class", "cube_bord");
  img.parentElement.insertBefore(lens, img);
  
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = 2800 + "px " + 1600 + "px";
  
  up = document.getElementById("left_up");
  down = document.getElementById("left_down");
  left = document.getElementById("left_left");
  right = document.getElementById("left_right");
  number_x = document.getElementById("left_number_x");
  number_y = document.getElementById("left_number_y");
  button_left = document.getElementById("button_left");
  up.addEventListener("click", function(){moveLens_left(zmina_y,0,0,0)});
  down.addEventListener("click", function(){moveLens_left(0,zmina_y,0,0)});
  left.addEventListener("click", function(){moveLens_left(0,0,zmina_x,0)});
  right.addEventListener("click", function(){moveLens_left(0,0,0,zmina_x)});
  button_left.addEventListener("click", function(){moveLens_number(parseInt(number_x.value) + x_start, parseInt(number_y.value) + y_start, k, z)})




//Right

  var iterator_l = true;
  var iterator_r = true;

  k_start = 25;
  z_start = 4

  k_stop = 288;
  z_stop = 152;

  k = k_start;
  z = z_start;

  ck = 0;
  cz = 0;

  img_r = document.getElementById(imgID_r);
  result_r = document.getElementById(resultID_r);
  lens_r = document.createElement("DIV");
  lens_r.setAttribute("class", "cube_bord_2");
  img_r.parentElement.insertBefore(lens_r,img_r);

  result_r.style.backgroundImage = "url('" + img_r.src + "')";
  result_r.style.backgroundSize = 2800 + "px " + 1600 + "px";

  up_r = document.getElementById("right_up");
  down_r = document.getElementById("right_down");
  left_r = document.getElementById("right_left");
  right_r = document.getElementById("right_right");
  number_k = document.getElementById("right_number_x");
  number_z = document.getElementById("right_number_y");
  button_right = document.getElementById("button_right");

  up_r.addEventListener("click", function(){moveLens_right(zmina_y,0,0,0)});
  down_r.addEventListener("click", function(){moveLens_right(0,zmina_y,0,0)});
  left_r.addEventListener("click", function(){moveLens_right(0,0,zmina_x,0)});
  right_r.addEventListener("click", function(){moveLens_right(0,0,0,zmina_x)});
  button_right.addEventListener("click", function(){moveLens_number(x, y, parseInt(number_k.value) + k_start, parseInt(number_z.value) + z_start)})


  moveLens_left(0,0,0,0);
  moveLens_right(0,0,0,0);

  function moveLens_left(a,b,c,d) {
    y -= a;
    y += b;
    x -= c;
    x += d;
  

  if (y < y_start) {y = y_stop}
      else if (y > y_stop) {y = y_start}
    if (x < x_start) {x = x_stop}
      else if (x > x_stop) {x = x_start}

  lens.style.left = x + "px";
  lens.style.top = y + "px";
  result.style.backgroundPosition = "-" + (x *8 - x_start*8) + "px -" + (y*8 - y_start*8) + "px";
    
  }

  function moveLens_number(a,b,c,d){
    x = a;
    y = b;
    k = c;
    z = d;
    moveLens_left(0,0,0,0);
    moveLens_right(0,0,0,0);  
  }

  function moveLens_right(a,b,c,d){

  if (z < z_start) {iterator_l = !iterator_l}
    else if (z > z_stop) {iterator_l = !iterator_l}
  if (k < k_start) {iterator_r = !iterator_r}
    else if (k > k_stop) {iterator_r = !iterator_r}
  
  if (iterator_l) {
    z -= a;
    z += b;
  }else{
    z += a;
    z -= b;
  }

  if (iterator_r) {
    k -= c;
    k += d;
  }else{
    k += c;
    k -= d;
  }

    lens_r.style.left = k + "px";
    lens_r.style.top = z + "px";

    result_r.style.backgroundPosition = "-" + (k*8 - k_start*8) + "px -" + (z*8 - z_start*8) + "px";
  }
  
}

imageZoom("myimage", "myresult", "myimage_r", "result_r");


// if (bs == 1) {
//       if (y > y_start) {
//           y -= 5;
//           cy -=40
//       }else{y = y_stop;cy = 1200}
//     }else if(bs == 2){
//       if(y < y_stop){
//         y += 5;
//         cy += 40;
//       }else{
//         y = y_start;
//         cy = 0;
//       }
//     }else if(bs == 3){
//       if (x > x_start) {
//         x -= 6;
//         cx -= 48;
//       }else{
//         x = x_stop;
//         cx = 2100;
//       }
//     }else if(bs == 4){
//       if(x < x_stop){
//         x += 6;
//         cx += 48;
//       }else{
//         x = x_start;
//         cx = 2000;
//       }
//     }else if (bs == 5) {
//       if (z > z_start) {
//           z -= 5;
//           cz -=40
//       }else{z = z_stop;cz = 1200}
//     }else if(bs == 6){
//       if(z < z_stop){
//         z += 5;
//         cz += 40;
//       }else{
//         z = z_start;
//         cz = 0;
//       }
//     }else if(bs == 7){
//       if (k > k_start) {
//         k -= 6;
//         ck -= 48;
//       }else{
//         k = k_stop;
//         ck = 2100;
//       }
//     }else if(bs == 8){
//       if(k < k_stop){
//         k += 6;
//         ck += 48;
//       }else{
//         k = k_start;
//         ck = 2000;
//       }
//     }