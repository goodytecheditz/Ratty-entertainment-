function showSupport() {
    var msg = document.getElementById("support-msg");
    if (msg.style.display === "none") {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
}

document.getElementById("f").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent to the CEO!");
    this.reset();
});
