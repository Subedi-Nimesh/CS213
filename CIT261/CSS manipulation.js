function changingColor() {
    document.getElementById("changeColor").style.color= "darkblue";
  }

  function changingVisibility() {
    if (document.getElementById("visibility").style.visibility == "hidden") {
      document.getElementById("visibility").style.visibility = "visible";
    }
    else {
      document.getElementById("visibility").style.visibility = "hidden";
    }
  }
  function changingDisplay() {
    if (document.getElementById("display").style.display == "none") {
      document.getElementById("display").style.display = "block";
    }
    else {
      document.getElementById("display").style.display = "none";
    }
  }
  
  function changeFont() {
    var x = document.getElementsByTagName("P");
    for (var i = 0; i < x.length; i++) {
      x[i].style.fontFamily = "arial";
    }
  }