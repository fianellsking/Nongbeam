document.getElementById("explodeButton").addEventListener("click", function() {
    const cakeImage = document.getElementById("cakeImage");
    cakeImage.style.transform = "scale(1.5) rotate(360deg)";
    setTimeout(function() {
        window.location.href = "page3.html";
    }, 1000);
});