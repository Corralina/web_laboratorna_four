

var mas_a = document.getElementsByClassName("men_a");
var point = 0;

function megaSlid(){
    if(point == 3){
        point = 0;
    }else{
        point += 1;
    }

    $("#mega-slider").animate({
        'margin-left' :  point * -60 + "vw"
    },1500)

}

function slowPage(iter){
    $("#content").animate({
        'margin-top' :  iter * -100 + "vh"
    },500)
}

setInterval(megaSlid,2500);
for(var i = 0; i < mas_a.length; i++){
    mas_a[i].addEventListener("click", function(){slowPage(this.id)})
}