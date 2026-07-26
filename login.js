const PASSWORD = "Katinka";

if(localStorage.getItem("loggedIn")=="true"){

window.location="chat.html";

}

function login(){

let pass=document.getElementById("password").value;

if(pass===PASSWORD){

localStorage.setItem("loggedIn","true");

window.location="chat.html";

}else{

document.getElementById("error").innerHTML="Incorrect Password";

}

}

document.getElementById("password").addEventListener("keypress",function(e){

if(e.key==="Enter"){

login();

}

});
