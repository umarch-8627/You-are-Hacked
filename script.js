setTimeout(() => {
    document.querySelector("h1").textContent = "⚠️ Warning: Your data is being scanned!";
}, 5000);

setTimeout(() => {
    document.querySelector("#hacked-message").style.display = "block";
}, 10000);

setTimeout(() => {
    document.querySelector(".hacking-animation").style.display = "block";
}, 15000);

setTimeout(() => {
    document.querySelector(".error-code").style.display = "block";
}, 20000);

setTimeout(() => {
    document.querySelector(".hacking-animation").style.display = "none";
    document.querySelector("#hacked-message").style.display = "none";
    document.querySelector(".error-code").style.display = "none";
    document.querySelector("#message").style.display = "block";
}, 30000);