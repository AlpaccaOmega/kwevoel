if(localStorage.getItem("loggedIn")!="true"){
window.location="index.html";
}

let username=localStorage.getItem("username");

if(username){
document.getElementById("usernameScreen").style.display="none";
document.getElementById("myName").innerHTML=username;
}

function saveUsername(){

let name=document.getElementById("usernameInput").value.trim();

if(name==="") return;

localStorage.setItem("username",name);

document.getElementById("usernameScreen").style.display="none";

document.getElementById("myName").innerHTML=name;

}

function sendMessage(){

let box=document.getElementById("messageInput");

let text=box.value.trim();

if(text==="") return;

let div=document.createElement("div");

div.className="myMessage";

div.innerHTML=text;

document.getElementById("messages").appendChild(div);

box.value="";

document.getElementById("messages").scrollTop=document.getElementById("messages").scrollHeight;

}
