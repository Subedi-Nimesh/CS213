function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
  
function clickAntiCounter()  {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)-1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function save(){
    var text = document.getElementById("myText").value;
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("Name", text);
        document.getElementById("display").innerHTML = "Hi, " + localStorage.getItem("Name") + "!" + '<br>' + "Now try refreshing the browser!!!";
        alert("Saved!");
    } else {
        document.getElementById("display").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

}

function onLoad(){
    var loaded = localStorage.getItem("Name");
    if (loaded !== null){
        document.getElementById("load").innerHTML = "Welcome back " + loaded + "!!!";
    }
}