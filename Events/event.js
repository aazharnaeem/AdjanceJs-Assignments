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
}
}

function remove(){
    var rem = document.getElementById("list");
    list.removeChild(list.childNodes[0]);
}
