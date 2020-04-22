function adding(){
var input = document.getElementById("inp").value;
if(input === ""){
    alert("Enter Task to add");
}
else{
var ul = document.getElementById("list");
var li = document.createElement("li"),
node = document.createTextNode(input); 
li.appendChild(node);
ul.appendChild(li);
document.getElementById("inp").value= null;


var cut = document.createElement("SPAN");
    var txt = document.createTextNode("\u2717");
    cut.className="close";
    cut.appendChild(txt);
    items[i].appendChild(cut);


    for( i = 0; i < close.length; i++)
{
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
}
}

var items = document.getElementsByTagName("LI");
var i;
for (i = 0;i < items.length; i++)
{
    var cut = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    cut.className="close";
    cut.appendChild(txt);
    items[i].appendChild(cut);
}

var close = document.getElementsByClassName("close");
var i;
for( i = 0; i < close.length; i++)
{
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


/*function remove(){
    var rem = document.getElementById("list");
    list.removeChild(list.childNodes[0]);
}
*/