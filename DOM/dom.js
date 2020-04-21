function adding(){
var input = document.getElementById("inp").value;
var ul = document.getElementById("list");
var li = document.createElement("li"),
node = document.createTextNode(input); 
li.appendChild(node);
ul.appendChild(li);
}