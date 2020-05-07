


var first = document.getElementById("im1");
var second = document.getElementById("im2");
var third = document.getElementById("im3");
var fourth = document.getElementById("im4");

var crt_img = document.getElementById("crt-img");

function cart(){
    var a = document.getElementById("crt");
    a.style.opacity=1;
}

function clos(){
    var b = document.getElementById("crt");
    b.style.opacity=0;
}


var lstQuan = document.getElementById("qun");
var totPrc = document.getElementById("ttl");

function addToCart(elem){
    var lstImg = document.getElementById("lst-img");

    var unitPrice = document.getElementById("prc-unit");
    var p1 = document.getElementById("im1-price").value;
    var p2 = document.getElementById("im2-price").value;
    var p3 = document.getElementById("im3-price").value;
    var p4 = document.getElementById("im4-price").value;



    if( elem.id == "add1"){
        lstImg.src="./Images/1.jpg"
        lstQuan.value = 1;
        unitPrice.value = p1;
        totPrc.value = lstQuan.value * unitPrice.value;
    }
    else if( elem.id == "add2"){
        lstImg.src="./Images/2.jpeg"
        lstQuan.value = 1;
        unitPrice.value = p2;
        totPrc.value = lstQuan.value * unitPrice.value;
    }
    else if( elem.id == "add3"){
        lstImg.src="./Images/3.jpg"
        lstQuan.value = 1;
        unitPrice.value = p3;
        totPrc.value = lstQuan.value * unitPrice.value;
    }
    else if( elem.id == "add4"){
        lstImg.src="./Images/4.jpeg"
        lstQuan.value = 1;
        unitPrice.value = p4;
        totPrc.value = lstQuan.value * unitPrice.value;
    }

}
function qun(){
    lstQuan++;
}