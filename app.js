// Check login
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

// Username
let username = localStorage.getItem("username");

if (username) {
    document.getElementById("usernameScreen").style.display = "none";
    document.getElementById("myName").textContent = username;
}

// Save username first time
function saveUsername() {

    let name = document.getElementById("usernameInput").value.trim();

    if (name.length < 2) {
        alert("Please enter a username.");
        return;
    }

    localStorage.setItem("username", name);

    username = name;

    document.getElementById("myName").textContent = name;

    document.getElementById("usernameScreen").style.display = "none";
}

// Send message
function sendMessage() {

    let input = document.getElementById("messageInput");

    let message = input.value.trim();

    if (message === "") return;

    firebase.database().ref("messages").push({

        user: username,

        text: message,

        time: Date.now()

    });

    input.value = "";
}

// Send with Enter
document.getElementById("messageInput").addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

// Listen for messages
firebase.database().ref("messages").on("value", function(snapshot){

    const messages = document.getElementById("messages");

    messages.innerHTML = "";

    snapshot.forEach(function(child){

        let data = child.val();

        let div = document.createElement("div");

        if(data.user === username){

            div.className = "myMessage";

        }else{

            div.className = "otherMessage";

        }

        let time = new Date(data.time);

        let hours = time.getHours().toString().padStart(2,"0");
        let mins = time.getMinutes().toString().padStart(2,"0");

        div.innerHTML =
        "<b>"+data.user+"</b><br>"
        +data.text+
        "<br><small>"+hours+":"+mins+"</small>";

        messages.appendChild(div);

    });

    messages.scrollTop = messages.scrollHeight;

});
