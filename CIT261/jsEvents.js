var enter = 0;
var exit = 0;

function onLoad() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("backColor").style.backgroundColor = "#" + randomColor;
}

function onClick() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("clicker").style.backgroundColor = "#" + randomColor;
}

function mOver(obj) {
    document.getElementById("countOver").innerHTML = enter += 1;
}

  function mOut() {
    document.getElementById("countOut").innerHTML = exit += 1;
}

function mDown(obj) {
    obj.style.backgroundColor = "#15ff00";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="#3300ff";
    obj.innerHTML="Thanks For Clicking!";
}

function changingPayment() {
    let Pay = document.getElementById("payment").value;
    document.getElementById("paymentMethod").innerHTML = Pay;
}

function kDown() {
    let keyDownValue = document.getElementById("keyDown").value;
    document.getElementById("keyDownText").innerHTML = keyDownValue;
}
function kUp() {
    let keyUpValue = document.getElementById("keyUp").value;
    document.getElementById("keyUpText").innerHTML = keyUpValue;
}