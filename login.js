function Afficher()
{ 
var input = document.getElementById("passds"); 
if (input.type === "password")
{ 
input.type = "text"; 
} 
else
{ 
input.type = "password"; 
} 
} 