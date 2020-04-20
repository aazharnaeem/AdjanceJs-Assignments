


function Basic(){
    var fname=document.getElementById("Fname").value;
    var lname=document.getElementById("Lname").value;
    var Email=document.getElementById("email").value;
    var Pass=document.getElementById("pass").value;

   //document.getElementById("frm").submit();
console.log("First name ="+fname+"  Last Name ="+lname+"  Email address = "+Email+"  Password ="+Pass);
//alert("First name ="+fname+"Last Name ="+lname+"Email address = "+Email+"Password ="+Pass);
}


function SEC(){

    var Noffice= document.getElementById("Noff").value;
    var Add= document.getElementById("Add").value;
    var Add2= document.getElementById("Add2").value;
    var city= document.getElementById("city").value;
    var relocate = document.getElementById("rel").value;
    var Pcode = document.getElementById("Pcode").value;
    var phone = document.getElementById("phn").value;
    var mobile = document.getElementById("mbl").value;
    
    console.log("Nearest Office = "+Noffice+" Address = "+Add+" Address 2 = "+Add2+"city = "+city+" relocating to = "+relocate+" Post code = "+Pcode+" Phone = "+phone+" Mobile = "+mobile)
}

function thr(){

    var cat = document.getElementById("cat").value;
    var Jtit = document.getElementById("Jtit").value;
    var rel2 = document.getElementById("rel2").value;
    var expr = document.getElementById("exp").value;
    var coun = document.getElementById("coun").value;
    var webs = document.getElementById("webs").value;
    var Age = document.getElementById("Age").value;
    var other = document.getElementById("other").value;

    console.log("Category = "+cat+" Job title = "+Jtit+" Relocate to = "+rel2+" Experience = "+expr+" authorized countries"+coun+"Website = "+webs+" Age = "+Age+" Others = "+other)

}