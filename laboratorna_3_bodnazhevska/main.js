var mas = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"]
var to = -1;

function right_arrow()
{ 
 var obj = document.getElementById("img");
  if (to < mas.length-1)  to++ 
   else
     to = 0;
     obj.src = mas[to];	 
}

function left_arrow()
{     
 var obj = document.getElementById("img");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = mas[to];	  
}

function start_arrow()
{     
 var obj = document.getElementById("img");
    to = 0;
    obj.src = mas[to];	  
}


function finish_arrow()
{     
 var obj = document.getElementById("img");
    to = mas.length-1;
    obj.src = mas[to];	  
}

function numb_arrow(a)
{     
 var obj = document.getElementById("img");
    to = a;
    obj.src = mas[to];	  
}
