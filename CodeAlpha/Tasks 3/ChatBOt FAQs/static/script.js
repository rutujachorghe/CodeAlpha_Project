function sendMessage() {
    let input = document.getElementById("userInput").value;

    let chat = document.getElementById("chat");
    chat.innerHTML += "<p><b>You:</b> " + input + "</p>";

    fetch("/get?msg=" + input)
        .then(res => res.text())
        .then(data => {
            chat.innerHTML += "<p><b>Bot:</b> " + data + "</p>";
        });

    document.getElementById("userInput").value = "";
}