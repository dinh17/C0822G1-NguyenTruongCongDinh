function yesClick() {
    alert("<3>");
}

function noHover() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
}