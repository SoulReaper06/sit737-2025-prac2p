function showMessage() {
  alert("Hello from Web Server!");
}

function sendMessage() {
    let input = document.getElementById("chat-input");
    let message = input.value.trim();
    if (message === "") return;

    let chatBox = document.getElementById("chat-box");
    let senderMsg = document.createElement("p");
    senderMsg.className = "sender";
    senderMsg.textContent = "You: " + message;
    chatBox.appendChild(senderMsg);

    setTimeout(() => {
        let receiverMsg = document.createElement("p");
        receiverMsg.className = "receiver";
        receiverMsg.textContent = "Bot: " + generateResponse(message);
        chatBox.appendChild(receiverMsg);
    }, 1000);

    input.value = "";
}

function generateResponse(msg) {
    let responses = [
        "That's interesting!", "Tell me more!", "I see!", "Really?", "Why do you think so?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}