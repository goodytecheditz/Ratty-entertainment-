function sendToWhatsApp() {
    var name = document.getElementById("clientName").value;
    var event = document.getElementById("eventType").value;
    var msg = document.getElementById("message").value;

    if (name === "" || event === "" || msg === "") {
        alert("Please fill in all fields!");
        return;
    }

    var fullMessage = "Hello CEO, I am " + name + ".%0A%0A" +
                      "Event Type: " + event + "%0A" +
                      "Message: " + msg;

    var whatsappURL = "https://wa.me/2347072539979?text=" + fullMessage;
    
    // This changes the current page to WhatsApp, which mobile browsers allow
    window.location.href = whatsappURL;
}
